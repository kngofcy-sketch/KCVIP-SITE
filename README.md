# KCVIP-SITE

Official landing page for **KINGDOMCONNECT VIP**, built with React, Vite, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production checks

```bash
npm run build
npm run preview
```

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. Every push to `main` builds the site and deploys the `dist` directory to GitHub Pages.

In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions** if it is not selected automatically.

Expected Pages URL:

`https://kngofcy-sketch.github.io/KCVIP-SITE/`

## Main contact behavior

The inquiry form validates required fields and opens the visitor's default email client with the submitted project information prefilled for `contact@kingdomconnectvip.com`.
