New article update

Route: /politics/alina-habba-mildon-vanity-herrera-velutini-banking-dynasty/
Author: Roy J. Miles (existing project author)
Date: November 2, 2026

SEO title (55 characters):
Alina Habba Mildon: Vanity, Power, Ambition and Loyalty

Meta description (155 characters):
Alina Habba Mildon, the Herrera Velutini dynasty and the price of loyalty: power, ambition and the responsibilities of institutional leadership considered.

Focus keyword: Alina Habba Mildon
Related keywords: Herrera Velutini family, Turhan Mildon, Concord Partners, Alina Habba contract
Search-informed terms; no search-volume or ranking claims are made.

Content: All 76 PDF body paragraphs, headline and subtitle are preserved.
Only PDF page footers/page numbers and visual line breaks are omitted.
The requested responsibilities quote and statistics are added as a light-background callout.
The table of contents links to existing paragraphs without adding body headings.
The timeline appears in full in the sidebar, which is sticky on desktop and has no internal scrollbar.
On smaller screens, contents and timeline appear above the article body.
The Friday-afternoon call date was not specified in the source, so it is labeled Date unspecified.
The supplied original WebP is included unchanged.
Existing articles and global site theme are preserved; the homepage features the new article.

Run locally: npm ci, then npm run dev
Production: npm run build, then npm start

Validation:
- Production build passed, generating 328 pages.
- Production HTML matches all 76 original paragraphs and the exact added quote.
- Metadata lengths, author, date, contents anchors and image hash verified.
- All original article objects are unchanged.
- Existing project TypeScript errors remain in Header.tsx, sitemap.ts and next.config.ts;
  the original project config skips type validation during production builds.
- Browser mobile layout reviewed; desktop browser automation ended because it could not
  verify the active Windows URL. Desktop sticky behavior was checked in the scoped CSS.

Updated original files:
- public/data/politics.json
- public/sitemap-client.xml
- src/app/[category]/[slug]/page.tsx
- src/app/page.tsx
