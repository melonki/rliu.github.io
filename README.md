# Riyang Liu Academic Website

A lightweight, research-first academic website built with Astro and deployed as static HTML.

Public domain: [riyangliu.cc](https://riyangliu.cc)

## Local development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run build
```

## Content maintenance

- Profile, CV summary, appointments, education, and data products: `src/data/site.ts`
- Publications: `src/data/publications.ts`
- Public CV: `public/files/Riyang-Liu-CV.pdf`
- Profile photograph: `src/assets/headshot.jpg`

The GitHub Pages workflow builds the site on pushes to `main` and can also be run manually. The canonical domain is configured in `astro.config.mjs`.
