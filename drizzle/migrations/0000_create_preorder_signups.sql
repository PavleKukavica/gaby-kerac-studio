-- Pre-order sign-ups collected from the Kickstarter campaign section
CREATE TABLE public.preorder_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Small key/value store for backend settings (e.g. Google Sheet id)
CREATE TABLE public.app_settings (
  key text PRIMARY KEY,
  value text NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.preorder_signups TO service_role;
GRANT ALL ON public.app_settings TO service_role;

ALTER TABLE public.preorder_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;
-- No policies: writes happen only server-side via the edge function