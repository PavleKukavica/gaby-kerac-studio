# Kickstarter Home Page + Favicon Update

## Overview
Rework the home page for the Kickstarter launch: new hero photo, a section presenting the campaign (interchangeable-hood-and-sleeve winter coat, 20% early-bird discount), and an email sign-up form. Sign-ups are saved in the site's built-in database and synced to a live Google Sheet. Also swap the favicon to the new monogram.

## Changes

### 1. Favicon
- Replace `public/favicon.png` with the newly uploaded G monogram (black on white). No `index.html` change needed.

### 2. New hero (home page)
- Replace the current hero image with the user's upcoming Kickstarter hero photo. Until the photo is uploaded, keep an existing photo as a placeholder so the layout is ready.
- Hero copy updated for the campaign: headline referencing the convertible winter coat, subtitle about the Kickstarter launch, and a "Pre-order — 20% early bird" call-to-action that scrolls to the sign-up form.

### 3. Kickstarter campaign section (below hero)
- Large image + text layout presenting the coat: a feminine winter coat with interchangeable hoods and sleeves in different colors.
- Feature highlights (e.g., one coat, many looks; snap-on hoods & sleeves; premium natural materials).
- Early-bird offer callout: 20% off for backers who pre-order early.
- Campaign details block: launch status, funding goal placeholder text the user can edit later.

### 4. Email sign-up form
- Form with name + email on the campaign section; on submit, shows a confirmation.
- Backed by Lovable Cloud: a `preorder_signups` table (name, email, created_at) with proper access rules.
- Every sign-up is also appended to the user's Google Sheet so they can watch the list live. If the Sheet is not yet connected, sign-ups still save in the site database and sync resumes once connected — no emails lost.
- Basic validation (valid email, non-empty name), duplicate emails ignored.

### 5. Google Sheets connection
- The user links their Google account once from chat; each sign-up is appended to a row (name, email, date). I will provide the exact spreadsheet link target once they pick/create their sheet.

## Technical notes
- Lovable Cloud is enabled for the sign-up table; an edge function handles both the database insert and the Google Sheets append (using the Google Sheets connector).
- Nav "Pre-order" style call-to-action may be added pointing to the sign-up section.
- Home page keeps the existing designer sections below the new campaign content.

## Needs from the user
- Upload the Kickstarter hero photo (I will place it as soon as it arrives).
- Link the Google Sheets connection when the in-chat card appears, and choose/create the target spreadsheet.
