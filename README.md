# My Money

A simple, local-first mobile expense tracker. It distinguishes cash and online money for both income and expenses, works offline after installation, and stores entries in the phone browser's IndexedDB database.

## Use it locally

Open `index.html` in a modern browser. For offline installation and the install prompt, serve the folder through a local web server or deploy it to HTTPS hosting.

## Free deployment

This is a static app: it has no server, accounts, or paid database. Deploy all files to Cloudflare Pages, Netlify, or Vercel's free static hosting.

For Cloudflare Pages:

1. Create a GitHub repository and push these files.
2. In Cloudflare Pages, select **Create a project** and connect that repository.
3. Use **No framework**; leave the build command empty and set the output directory to `/`.
4. Deploy. Open the provided HTTPS URL on the phone and select **Add to Home Screen** in the browser menu.

## Backup guidance

Use **Download backup** each week and before changing or resetting a phone. Store the downloaded JSON file in Google Drive, OneDrive, or another safe location. **Restore backup** replaces the app's current entries with the selected backup; download a new backup first if the current entries matter.
