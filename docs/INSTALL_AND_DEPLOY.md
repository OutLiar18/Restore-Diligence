# Install and Deploy — Exact Steps

## Safest Git workflow

From the existing Restore-Diligence project folder in VS Code:

```bash
git checkout main
git pull origin main
git checkout -b feature/samoosa-redesign
```

Back up any files you want to keep. Then copy the contents of this project into the
repository folder, replacing the old website files.

## Install and run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite and test:

- Home page
- Menu filters
- Order form opening WhatsApp
- Mobile navigation
- Christmas Giving Drive form
- Contact links
- Direct page refreshes

## Save the branch

```bash
git add .
git commit -m "redesign samoosa website and add Christmas giving drive"
git push -u origin feature/samoosa-redesign
```

## Merge after testing

Create a pull request on GitHub from `feature/samoosa-redesign` into `main`, review
the files, and merge it. Netlify should then deploy the updated `main` branch.

Terminal alternative:

```bash
git checkout main
git pull origin main
git merge feature/samoosa-redesign
git push origin main
```

## Netlify settings

For this React/Vite version, use:

- Branch: `main`
- Build command: `npm run build`
- Publish directory: `dist`
- Base directory: blank

The included `netlify.toml` already provides these settings and handles route refreshes.
