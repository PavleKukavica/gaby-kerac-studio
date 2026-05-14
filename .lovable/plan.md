Set the uploaded cursive "G" monogram as the site favicon.

**Steps:**
1. Copy `user-uploads://942ff2642847435ca5c490bc94e3c5ee.jpg` → `public/favicon.png`.
2. Delete existing `public/favicon.ico` so it doesn't override.
3. Add `<link rel="icon" href="/favicon.png" type="image/png">` to `<head>` in `index.html`.