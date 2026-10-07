# Nagaraj Gopalakrishnan — Portfolio

Personal portfolio built with Next.js (App Router, static export), React, TypeScript, Tailwind CSS and Framer Motion. Deployed on Netlify.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in out/
npm run lint
```

Pages live in `src/app/*/page.tsx` (each with its own SEO metadata); UI sections live in `src/components/`. `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.
