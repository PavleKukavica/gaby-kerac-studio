import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/google_sheets/v4'

const BodySchema = z.object({
  name: z.string().trim().min(1).max(255),
  email: z.string().trim().email().max(255),
})

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

function gatewayHeaders(): HeadersInit {
  const apiKey = Deno.env.get('LOVABLE_API_KEY')
  const connectionKey = Deno.env.get('GOOGLE_SHEETS_API_KEY')
  if (!apiKey || !connectionKey) throw new Error('Missing gateway credentials')
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
    'X-Connection-Api-Key': connectionKey,
  }
}

async function gatewayCall(path: string, init?: RequestInit) {
  const res = await fetch(`${GATEWAY_URL}${path}`, {
    ...init,
    headers: { ...gatewayHeaders(), ...(init?.headers ?? {}) },
  })
  const text = await res.text()
  if (!res.ok) {
    throw new Error(`Sheets API failed [${res.status}]: ${text}`)
  }
  return JSON.parse(text || '{}')
}

async function getOrCreateSheetId(admin: ReturnType<typeof createClient>) {
  const { data } = await admin.from('app_settings').select('value').eq('key', 'google_sheet_id').maybeSingle()
  if (data?.value) return data.value as string

  const created = await gatewayCall('/spreadsheets', {
    method: 'POST',
    body: JSON.stringify({ properties: { title: 'Gabbys Design — Kickstarter Pre-orders' } }),
  })
  const sheetId = created.spreadsheetId as string
  const { error } = await admin
    .from('app_settings')
    .upsert({ key: 'google_sheet_id', value: sheetId }, { onConflict: 'key' })
  if (error) throw error

  // Seed header row
  await gatewayCall(
    `/spreadsheets/${sheetId}/values/Sheet1!A1:C1?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      body: JSON.stringify({ values: [['Name', 'Email', 'Signed up at']] }),
    },
  )
  return sheetId
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return json({ error: 'Please provide a valid name and email address.' }, 400)
    }
    const { name, email } = parsed.data

    const admin = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    const { data: inserted, error } = await admin
      .from('preorder_signups')
      .upsert({ name, email: email.toLowerCase() }, { onConflict: 'email' })
      .select('created_at')
      .maybeSingle()
    if (error) throw error

    let sheetSynced = false
    let sheetError: string | null = null
    try {
      const sheetId = await getOrCreateSheetId(admin)
      await gatewayCall(
        `/spreadsheets/${sheetId}/values/Sheet1!A1:C1:append?valueInputOption=USER_ENTERED`,
        {
          method: 'POST',
          body: JSON.stringify({
            values: [[name, email.toLowerCase(), new Date().toISOString()]],
          }),
        },
      )
      sheetSynced = true
    } catch (e) {
      // Never fail the sign-up because of the sheet — the database copy is safe.
      sheetError = e instanceof Error ? e.message : String(e)
      console.error('Google Sheets sync failed:', sheetError)
    }

    return json({ ok: true, duplicate: !inserted, sheetSynced })
  } catch (e) {
    console.error('preorder-signup failed:', e)
    return json({ error: 'Something went wrong. Please try again.' }, 500)
  }
})
