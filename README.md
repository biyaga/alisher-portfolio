# Alisher Abdullamitov: portfolio

Law Student / AI Engineer. A minimal, techy one-page portfolio with a pixel balance scale,
dark/light themes and an English / Karakalpak language switch.

Built with Next.js 15 (App Router, TypeScript) + Tailwind CSS 3, exported as a static site.

## Run it on your computer

You need Node.js 18.18 or newer (https://nodejs.org).

```bash
npm install      # once, downloads dependencies
npm run dev      # open http://localhost:3000
```

## Build and publish

```bash
npm run build    # creates the finished website in ./out
npm start        # optional: preview ./out locally
```

Free hosting options:

- **Vercel**: push this folder to GitHub, then "Import project" on vercel.com. No settings needed.
- **Netlify**: drag the `out` folder onto app.netlify.com/drop.
- **GitHub Pages**: upload the contents of `out` to a `<username>.github.io` repository.

## Where to edit

| What | File |
| --- | --- |
| Project links, Telegram, email | `lib/content.ts` |
| English text | `lib/i18n/en.ts` |
| Karakalpak text (please proofread) | `lib/i18n/qq.ts` |
| Colors (dark and light) | `app/globals.css` (top of file) |
| The pixel balance scale | `lib/pixelScale.ts` |
| Page title and description | `app/layout.tsx` |
| Favicon | `app/icon.svg` |

To add a Writing or Reading entry, add an item to the `writing` or `reading` list in
`lib/content.ts`; the "Soon" box disappears automatically.

The phone number is intentionally not published.
