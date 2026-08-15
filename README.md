# Developer Portfolio Template

A premium, dark-first personal portfolio template for developers, built with
React, Vite, Tailwind CSS, and Framer Motion. Every piece of content — name,
projects, skills, certifications, resume, and social links — lives in
`src/data/`, so you can make it yours without touching any component code.

The visual identity is a code-editor motif: the hero renders as a typed-out
`profile.js` file, and the navigation bar behaves like a row of open editor
tabs (`about.jsx`, `projects.jsx`, ...).

## Features

- Sticky, blur-on-scroll navbar styled as an editor tab bar with an active-section indicator
- Animated hero that types out your profile object, terminal-style
- About, Skills, Resume/experience timeline, Projects, Certifications, and Contact sections
- Animated project filtering by category, with a details modal
- Certificate viewer that opens PDFs in a new tab and images in a zoomable fullscreen preview
- Contact form with validation, loading/success/error states, mailto fallback, and optional Formspree integration
- Dark/light theme toggle with system-preference detection and localStorage persistence
- Fully responsive, from 375px up to 1920px
- Accessible: semantic HTML, keyboard navigation, focus states, ARIA labels, `prefers-reduced-motion` support
- Optional sections you can toggle on/off from a single config file
- No fake stats, no fake testimonials, no invented content — every placeholder is obvious and safe to search-and-replace

## Tech Stack

- React 18 + Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Folder Structure

```text
src/
├── components/       UI components — no personal data lives here
├── data/              All editable content (profile, projects, skills, ...)
├── hooks/             useTheme, useActiveSection
├── App.jsx
├── main.jsx
└── index.css

public/
├── assets/
│   ├── resume/        resume.pdf
│   ├── certificates/  certificate PDFs or images
│   ├── projects/      project screenshots
│   └── images/        profile photo, certificate logos
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Adding Profile Information

Edit `src/data/profile.js`. Every field is a plain string — replace the
`YOUR_...` placeholders. Leave `github`, `linkedin`, `twitter`, `instagram`,
or `youtube` as an empty string `""` to hide that button automatically.

```js
export const profile = {
  name: "Jane Doe",
  title: "Frontend Developer",
  // ...
};
```

## Adding Projects

Edit `src/data/projects.js` and add one object per project to the `projects`
array. Leave `github` or `liveDemo` as `""` to hide that button — the UI
never shows a dead link. `category` must match one of `projectCategories` (or
add a new category to that list).

## Adding Certificates

1. Drop your certificate file into `public/assets/certificates/` (PDF, PNG, JPG, or JPEG).
2. Add an entry to `src/data/certifications.js` pointing `certificateUrl` at that file.
3. PDFs open in a new tab; images open in a zoomable fullscreen preview automatically — no extra config needed.
4. Leave `credentialUrl` as `""` to hide the "Verify Credential" button.

## Adding Resume

Place your PDF at `public/assets/resume/resume.pdf` (or update the path in
`profile.resume`). If `profile.resume` is empty, the Resume section shows a
placeholder instead of broken buttons.

## Adding Social Links

All social buttons (navbar, hero, footer, contact) pull from
`src/data/profile.js` and hide automatically when a URL is empty — you only
need to edit that one file.

## Customizing Theme

Colors are CSS variables defined in `src/index.css` under `:root` (dark) and
`.light` (light mode override). Change the hex values there — everything
else (Tailwind classes) references these variables, so the whole site
updates consistently. Fonts are set in `tailwind.config.js` and loaded via
Google Fonts in `index.html`.

## Toggling Optional Sections

Edit `src/data/sections.js`:

```js
export const sections = {
  highlights: true,
  skills: true,
  experience: true,
  resume: true,
  certifications: true,
};
```

## Optional: Real Contact Form Submissions

By default the contact form falls back to opening the visitor's email
client. To receive submissions directly:

1. Create a form at [Formspree](https://formspree.io) and copy your endpoint.
2. Copy `.env.example` to `.env` and set `VITE_FORMSPREE_ENDPOINT`.
3. Restart the dev server.

## Build Instructions

```bash
npm run build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deployment

### Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Add `VITE_FORMSPREE_ENDPOINT` under Environment Variables if you're using Formspree.

### Netlify

1. Push this repo to GitHub.
2. Import it at [app.netlify.com/start](https://app.netlify.com/start).
3. Build command: `npm run build`. Publish directory: `dist`.
4. Add `VITE_FORMSPREE_ENDPOINT` under Site settings → Environment variables if needed.

### GitHub Pages

1. Set `base: "/your-repo-name/"` in `vite.config.js`.
2. Run `npm run build`.
3. Deploy the `dist/` folder with a tool like [`gh-pages`](https://www.npmjs.com/package/gh-pages) or GitHub Actions.

## Final Testing Checklist

- [ ] Replace every `YOUR_...` placeholder in `src/data/` and `index.html`
- [ ] Add real project screenshots and confirm broken-image fallbacks aren't showing
- [ ] Add your resume PDF and confirm the buttons work
- [ ] Add certificates and confirm PDF vs. image viewing both work
- [ ] Set a real `og:image` at `/assets/images/og-image.png`
- [ ] Test the contact form (mailto fallback or Formspree)
- [ ] Test dark/light toggle and confirm it persists on reload
- [ ] Test on mobile widths (375px) — no horizontal scroll
- [ ] Run `npm run build` and confirm it completes with no errors
- [ ] Update `robots.txt` and `sitemap.xml` with your real site URL
