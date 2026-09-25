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

- Profile, Home bio, Research narrative, appointments, education, and data products: `src/data/site.ts`
- Publications: `src/data/publications.ts`
- Public CV: `public/files/Riyang Liu_CV_Sep242026.pdf` (download path configured in `src/data/site.ts`)
- Profile photograph: `src/assets/headshot.jpg`

The GitHub Pages workflow builds the site on pushes to `main` and can also be run manually. The canonical domain is configured in `astro.config.mjs`.

## Approved bio

> Riyang Liu is a SCALES Postdoctoral Fellow at Duke University’s Nicholas School of the Environment, where he investigates how climate-related environmental exposures affect human health, with a particular focus on heat and cardio-kidney outcomes. He earned his Ph.D. in Environmental Science and Engineering from Nanjing University and subsequently worked as a Postdoctoral Associate at the Yale School of Public Health. His research applies geospatial and computational methods to integrate satellite remote sensing, atmospheric reanalysis, ground monitoring, and machine learning into high-resolution environmental exposure datasets. At Duke, he is extending this work from population-level exposure modeling toward linking ambient and personal heat exposure with physiological measurements and health outcomes. His broader goal is to develop evidence and tools that clarify how a warming climate translates into health risks and support practical adaptation.

## Deferred design direction

For a future visual upgrade, refer to the [Hurricane Mobility Tracker](https://hurricane-mobility.fly.dev/) as an example of a warm technical-dashboard or research-instrument style. Potentially reusable elements include:

- a warm off-white canvas with subtle paper-like texture;
- academic sans-serif typography with restrained monospace labels and metadata;
- thin neutral borders, compact uppercase captions, minimal shadows, and muted colors;
- asymmetric editorial arrangements of authentic research maps and figures;
- a quiet “research atlas” treatment for research outputs and data products.

Do not reproduce its dense control panels, tiny body text, dashboard navigation, or terminal-like interface across the personal website. Any adoption should preserve the current site’s academic readability and use visual material from Riyang Liu’s actual research. No change is scheduled until the next design upgrade.
