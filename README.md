# Contact Instruments

A website for Contact Instruments, a weighing equipment business in Duttawadi, Nagpur. The art direction is an editorial industrial treatment: graphite, warm ivory, and a restrained amber, with real photographs of weighing equipment.

The home page is only the introduction. Products, services, applications, about, and contact are separate pages. `/products` and `/products/:slug` read the catalogue from `public/data/products.json`. The host must serve `index.html` for those routes.

The site is a static Vite + React + TypeScript app. There is no form, login, database, or backend. Contact actions are direct links: telephone, and, once you add them, email and WhatsApp.

## Setup

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run lint
npm run build
npm run preview
```

`npm run build` type-checks the project and writes the static site to `dist/`. Deploy the contents of `dist/`, not the repository root. The source `index.html` points at `/src/main.tsx`, which a static host will not run. The built `dist/index.html` points at a compiled JavaScript file.

## Netlify

`netlify.toml` sets the build command to `npm run build` and the publish directory to `dist`. In the Netlify UI, the publish directory must not be left as the repository root, or the next deploy will still serve the unbuilt source. Trigger a new deploy after that file is on the branch Netlify builds.

`public/_redirects` is copied into `dist` so routes such as `/products` and `/about` open the app instead of a 404.

## Edit the business details

All public facts live in `src/config/business.ts`.

| Field | What to do |
| --- | --- |
| `phone` | The number currently shown is the one on the Google Business Profile. Confirm it, then set `phone.verified` to `true`. |
| `email.address` | Leave `null` until you have a verified business email. A `mailto:` link appears only after an address containing `@` is set. |
| `whatsapp.number` | Digits only, country code included, no `+` and no spaces. Example: `918999560442`. Do not copy the voice number unless the client confirms it receives WhatsApp. |
| `hours` | Leave `null` until opening hours are confirmed. Then set an array of `{ days, hours }`. |
| `social` | Add `{ label, href }` only for profiles the client actually uses. |
| `googleProfileUrl` | The Google share link for the business profile. The reviews section uses this address. |
| `siteUrl` | Production origin, no trailing slash. After you set it, add the matching canonical and absolute `og:url` / `og:image` URLs in `index.html`. |

The page title, meta description, and LocalBusiness structured data are in `index.html`. Update those when the name, address, or phone changes. Structured data deliberately omits a star rating, opening hours, and email until those are confirmed.

Equipment categories, applications, and questions are in `src/data/content.ts`.

## Products

The products page reads only from `public/data/products.json`. Edit that file to add, remove, or correct a product. Each product needs a unique `slug`, `name`, `category`, `summary`, `priceLabel`, `priceInr` (a number, or `null` when the price is on request), `specs`, and `images`. Do not hardcode a second product list in a component.

The current entries are the products published on the Contact Instruments Exporters India listing. Prices and specifications there can be stale. Confirm them before you treat the page as a live catalogue.

The Google profile link supplied for this site is stored as `googleProfileUrl` in `src/config/business.ts`.

## Replace the photographs

Images are in `public/images/`. They are reference photographs of weighing equipment and one warehouse interior. They are not photographs of this business, and the page says so.

| File | Used for |
| --- | --- |
| `weighbridge-system.jpg` | Opening photograph |
| `weighbridge-jemera.jpg` | Weighbridges |
| `load-cell-tank.jpg` | Industrial weighing |
| `platform-scale.jpg` | Platform scales, and the selection section |
| `load-cell-detail.jpg` | Load cells |
| `warehouse.jpg` | Applications |

To swap an image, replace the file or point `src`, `width`, `height`, `alt`, and `credit` in `src/data/content.ts` at the new file. Keep width and height accurate so the layout does not jump. Use photographs you have the right to publish. Update the credit line: several of the current files are Creative Commons and require attribution, which the footer prints.

The wordmark and favicon (`public/favicon.svg`) are drawn from the business name. Replace `public/favicon.svg` if the client supplies an official logo, and update `Wordmark` in `src/components/Wordmark.tsx`.

## Before launch, confirm with the client

- Telephone `089995 60442` / `+91 89995 60442`, as shown on the Google Business Profile.
- The address from that profile: Old Samrat Talkies, Amravati Road, near Ashok Car Glass and Asha Hospital, Duttawadi, Nagpur, Maharashtra 440023. Some public directories list a different Duttawadi address. Use only the address the client confirms.
- Whether email and WhatsApp should be published, and the exact values.
- Opening hours, if they should appear.
- The exact equipment range. The page describes weighing machines, platform scales, weighbridges, indicators, and load cells as categories to enquire about. It does not claim stocked models.
- Whether installation, calibration, or maintenance is actually offered.
- The live Google rating and review count. They are not printed on the page, because they change. Do not paste review quotations unless they are copied from the current profile.
- The official Google Business Profile URL, the production domain, and any social profiles.
- Replacement of the reference photographs with the client’s own equipment photos, if they have them.
