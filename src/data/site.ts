export const profile = {
  name: "Riyang Liu",
  shortName: "Riyang",
  role: "SCALES Postdoctoral Fellow",
  appointment: "Postdoctoral Associate, Environmental Natural Sciences",
  institution: "Duke University",
  school: "Nicholas School of the Environment",
  email: "riyang.liu@duke.edu",
  scholar: "https://scholar.google.com/citations?user=Yt6f5LgAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0001-6520-3931",
  linkedin: "https://www.linkedin.com/in/riyang-liu-394aa184/",
};

export const navigation = [
  { label: "Home", href: "" },
  { label: "Research", href: "research/" },
  { label: "Publications", href: "publications/" },
  { label: "CV", href: "cv/" },
] as const;

export const professionalSummary = [
  "Riyang is a SCALES Postdoctoral Fellow at Duke University's Nicholas School of the Environment, where he works on the health impacts of climate change with a focus on heat exposure and human health.",
  "His background is in geospatial and computational methods for environmental exposure assessment. At the Yale School of Public Health, he developed spatiotemporally resolved models for estimating population-level exposure to air pollutants and climate stressors, integrating remote sensing, big data, and atmospheric science knowledge. His work has been published in journals including Environmental Science & Technology, Remote Sensing of Environment, and Environment International.",
  "At Duke, he is expanding into the heat and health space, particularly the link between environmental heat and physiological outcomes at the individual level. He is interested in building high-resolution heat exposure models and connecting them to health data to better understand how a warming climate translates into real human harm.",
] as const;

export const researchSummary = [
  {
    title: "Health impacts of climate change",
    text: professionalSummary[0],
  },
  {
    title: "Environmental exposure assessment",
    text: professionalSummary[1],
  },
  {
    title: "Heat exposure and human health",
    text: professionalSummary[2],
  },
] as const;

export const datasets = [
  {
    pollutant: "O3",
    title: "Daily Surface Ozone (O3) MDA8 Concentrations across the Contiguous United States (0.01° × 0.01°), 1980–2023",
    year: "2026",
    doi: "https://doi.org/10.60600/YU/M1WT9R",
  },
  {
    pollutant: "NO2",
    title: "Daily 24-hour Average Nitrogen Dioxide (NO2) Concentrations over California (0.01° × 0.01°), 1980–2022",
    year: "2025",
    doi: "https://doi.org/10.60600/YU/EIVOUY",
  },
  {
    pollutant: "PM2.5",
    title: "Daily 1 km Fine Particles (PM2.5) Concentrations across the United Kingdom, 1980–2019",
    year: "2025",
    doi: "https://doi.org/10.60600/YU/JE6TUZ",
  },
] as const;

export const appointments = [
  {
    institution: "Duke University",
    location: "Durham, North Carolina",
    title: "Postdoctoral Associate, Environmental Natural Sciences",
    dates: "Jul. 2026–current",
    context: "Mentors: Drs. Nishad Jayasundar, Mercedes Bravo, Liyin He, Heather Stapleton, and Christina Wyatt",
  },
  {
    institution: "Yale University",
    location: "New Haven, Connecticut",
    title: "Postdoctoral Associate, Environmental Health Sciences",
    dates: "April 2024–June 2026",
    context: "Advisor: Dr. Kai Chen",
  },
  {
    institution: "Yale University",
    location: "New Haven, Connecticut",
    title: "Postgraduate Fellow, Environmental Health Sciences",
    dates: "February 2022–July 2022",
    context: "Advisor: Dr. Kai Chen",
  },
] as const;

export const education = [
  {
    institution: "Nanjing University",
    degree: "Ph.D., Environmental Science and Engineering",
    dates: "Sep. 2019–Mar. 2024",
    context: "Advisors: Drs. Jun Bi & Zongwei Ma",
  },
  {
    institution: "Nanjing University",
    degree: "Master of Engineering, Environmental Management",
    dates: "Aug. 2016–Jun. 2019",
    context: undefined,
  },
  {
    institution: "Xiamen University",
    degree: "Bachelor of Science, Environmental Science",
    dates: "Sep. 2012–Jul. 2016",
    context: undefined,
  },
] as const;

export const conferencePresentations = [
  {
    title: "Reconstructing Gridded Historical PM2.5 Over Six Decades: A Deep Learning Approach",
    event: "Yale FDS Workshop: AI for Social Science Research Methods",
    location: "New Haven, USA",
    date: "May 2026",
    format: "Poster presentation",
    url: undefined,
  },
  {
    title: "Four-decade (1980–2023) Surface Ozone Concentrations across the Contiguous United States: Fine-Resolution Estimates and Health Implications",
    event: "2026 AGU–AMS GeoHealth Showcase",
    location: "Virtual",
    date: "Apr. 2026",
    format: "Invited lightning talk",
    url: undefined,
  },
  {
    title: "Four-decade (1980–2023) Surface Ozone Concentrations across the Contiguous United States: Fine-Resolution Estimates and Health Implications",
    event: "AGU25 Annual Meeting",
    location: "New Orleans, USA",
    date: "Dec. 2025",
    format: "Oral presentation",
    url: undefined,
  },
  {
    title: "Racial and Ethnic Disparities in Exposure to Short-Term NO2 Air Pollution in California During 1980–2022",
    event: "AGU24 Annual Meeting",
    location: "Washington, D.C., USA",
    date: "Dec. 2024",
    format: "Oral presentation",
    url: undefined,
  },
  {
    title: "Spatiotemporal patterns of ground ozone levels in China from 2005 to 2019: a machine learning approach",
    event: "Interdisciplinary Innovation Forum for Doctoral Students of Nanjing University",
    location: "Nanjing, China",
    date: "May 2021",
    format: "Oral presentation, first prize",
    url: undefined,
  },
  {
    title: "Spatiotemporal distribution of ground ozone levels in China from 2005 to 2016: a machine learning approach",
    event: "13th National Environmental Conference for Doctoral Students",
    location: "Beijing, China",
    date: "Oct. 2019",
    format: "Poster presentation",
    url: undefined,
  },
] as const;
