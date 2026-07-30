# Restore Diligence — Samoosa Website

A mobile-first React/Vite website for a homemade samoosa and savouries business.
It reuses the strongest engineering patterns from the supplied JACP project while
rebuilding the design, content and calls to action around food ordering.

## Included pages

- Home
- Menu with category filters
- WhatsApp order builder
- About
- Christmas Giving Drive
- Contact
- Privacy Policy
- Custom 404 page

## Important: dummy content

The phone number, email address, service area, prices, products, opening hours,
Christmas-drive dates and beneficiary details are placeholders. Replace them before
publishing the site as a real business website.

The fastest place to update business details is:

```text
src/config/site.js
```

Menu items and prices are stored in:

```text
src/data/menuItems.js
```

## Run locally

1. Open the folder in VS Code.
2. Open the terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in the terminal.

## Build for production

```bash
npm run build
```

The deployable files will be created in `dist`.

## Netlify deployment

The included `netlify.toml` is ready for a GitHub-connected Netlify site:

- Build command: `npm run build`
- Publish directory: `dist`
- Production branch: `main`

The SPA redirect is included so direct links such as `/christmas-drive` work after
refreshing the browser.

## Recommended first replacements

1. Real phone number and WhatsApp URL.
2. Real menu and prices.
3. Original food photography.
4. Real owner story and portrait.
5. Confirmed ordering lead time and collection/delivery area.
6. Verified Christmas-drive beneficiary, dates, accepted items and drop-off point.
7. Correct Netlify URL in `siteConfig`, `robots.txt` and `sitemap.xml`.

## Image placeholders

The draft uses remote stock photographs solely to make the layout presentable during
development. Replace them with original business photography before the final launch.

Suggested original photographs:

- Hero: landscape 3:2 image of a generous samoosa platter.
- Product cards: square or 4:3 close-ups, photographed consistently.
- Owner: vertical 4:5 natural kitchen portrait.
- Giving drive: landscape 3:2 image of organised donation boxes or volunteers,
  with recipient dignity protected.
