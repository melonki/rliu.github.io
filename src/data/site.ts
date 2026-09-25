export const profile = {
  name: "Riyang Liu",
  shortName: "Riyang",
  role: "SCALES Postdoctoral Fellow",
  scalesUrl: "https://sustainability.duke.edu/research/scales/2026-scales-fellows/",
  appointment: "Postdoctoral Associate, Environmental Natural Sciences",
  institution: "Duke University",
  school: "Nicholas School of the Environment",
  email: "riyang.liu@duke.edu",
  scholar: "https://scholar.google.com/citations?user=Yt6f5LgAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0001-6520-3931",
  researchGate: "https://www.researchgate.net/profile/Riyang-Liu",
  linkedin: "https://www.linkedin.com/in/riyang-liu-394aa184/",
};

export const cvFile = "files/Riyang%20Liu_CV_Sep242026.pdf";

export const navigation = [
  { label: "Home", href: "" },
  { label: "Research", href: "research/" },
  { label: "Publications", href: "publications/" },
  { label: "CV", href: "cv/" },
] as const;

export const approvedBio = "Riyang Liu is a SCALES Postdoctoral Fellow at Duke University’s Nicholas School of the Environment, where he investigates how climate-related environmental exposures affect human health, with a particular focus on heat and cardio-kidney outcomes. He earned his Ph.D. in Environmental Science and Engineering from Nanjing University and subsequently worked as a Postdoctoral Associate at the Yale School of Public Health. His research applies geospatial and computational methods to integrate satellite remote sensing, atmospheric reanalysis, ground monitoring, and machine learning into high-resolution environmental exposure datasets. At Duke, he is extending this work from population-level exposure modeling toward linking ambient and personal heat exposure with physiological measurements and health outcomes. His broader goal is to develop evidence and tools that clarify how a warming climate translates into health risks and support practical adaptation.";

const datasetDoi = {
  usOzone: "https://doi.org/10.60600/YU/M1WT9R",
  californiaNo2: "https://doi.org/10.60600/YU/EIVOUY",
  ukPm25: "https://doi.org/10.60600/YU/JE6TUZ",
} as const;

export const researchIntroduction = [
  "Riyang Liu studies how environmental exposures are measured, distributed, and related to human health.",
  "His work connects three questions: How can we reconstruct exposure when observations are limited? What do finer estimates reveal about risks across populations and places? How can that evidence help address health risks in a warming climate?",
] as const;

export const researchSummary = [
  {
    title: "Environmental exposure modeling and assessment",
    paragraphs: [
      "Health studies need pollution data that capture short-term fluctuations as well as long-term trends. Monitoring networks have gaps, and reconstructing exposure back to the 1980s is especially difficult because many historical inputs, including satellite observations, are unavailable. Riyang combines ground monitoring, geospatial predictors, machine learning, spatial and temporal feature design, and comprehensive model assessment to address these limitations.",
      "His work on PM2.5, O3, and NO2 spans China, the United Kingdom, and the United States. Across these settings, he emphasizes careful combinations of methods, model tuning, and validation to develop exposure estimates for health research.",
    ],
  },
  {
    title: "Environmental health and disparity analysis",
    paragraphs: [
      "Finer exposure estimates can be matched more closely to where people live, supporting comparisons that monitoring locations or coarse grids may miss. Riyang uses these estimates to examine how exposure varies across places and populations, including measures that capture the intensity and frequency of high-exposure days, not only annual averages.",
      "This work includes analyses of rural and urban ozone exposure and mortality burden in the United States and racial and ethnic disparities in short-term NO2 exposure in California. Related collaborative studies in China have examined associations between ozone exposure and cardiovascular disease, depression, and cause-specific mortality. Together, these studies move from estimating environmental conditions toward understanding whom they affect and how those patterns change over time.",
    ],
  },
  {
    title: "Heat exposure and human health",
    paragraphs: [
      "At Duke, Riyang is extending this exposure-to-health approach to heat. Working with the multidisciplinary Environmental Exposure and Kidney Health group, he is exploring how ambient and personal heat exposure can be linked with physiological measurements and cardio-kidney-metabolic health. As this work develops, his longer-term aim is to generate evidence that can inform practical heat adaptation for vulnerable populations.",
    ],
  },
] as const;

const people = {
  nishadJayasundara: {
    name: "Nishad Jayasundara",
    url: "https://scholars.duke.edu/person/Nishad.Jayasundara",
  },
  mercedesBravo: {
    name: "Mercedes Bravo",
    url: "https://globalhealth.duke.edu/people/bravo-mercedes",
  },
  liyinHe: {
    name: "Liyin He",
    url: "https://scholars.duke.edu/person/liyin.he",
  },
  heatherStapleton: {
    name: "Heather Stapleton",
    url: "https://scholars.duke.edu/person/heather.stapleton",
  },
  christinaWyatt: {
    name: "Christina Wyatt",
    url: "https://scholars.duke.edu/person/Christina.Wyatt",
  },
  kaiChen: {
    name: "Kai Chen",
    url: "https://ysph.yale.edu/superfund-research-center/profile/kai-chen/",
  },
  junBi: {
    name: "Jun Bi",
    url: "https://hjxy.nju.edu.cn/szdw/hjghyglx/js/20210604/i201770.html",
  },
  zongweiMa: {
    name: "Zongwei Ma",
    url: "https://hjxy.nju.edu.cn/szdw/hjghyglx/fjs/20210604/i201813.html",
  },
} as const;

export const datasets = [
  {
    pollutant: "O3",
    title: "Daily Surface Ozone (O3) MDA8 Concentrations across the Contiguous United States (0.01° × 0.01°), 1980–2023",
    year: "2026",
    doi: datasetDoi.usOzone,
  },
  {
    pollutant: "NO2",
    title: "Daily 24-hour Average Nitrogen Dioxide (NO2) Concentrations over California (0.01° × 0.01°), 1980–2022",
    year: "2025",
    doi: datasetDoi.californiaNo2,
  },
  {
    pollutant: "PM2.5",
    title: "Daily 1 km Fine Particles (PM2.5) Concentrations across the United Kingdom, 1980–2019",
    year: "2025",
    doi: datasetDoi.ukPm25,
  },
] as const;

export const appointments = [
  {
    institution: "Duke University",
    location: "Durham, North Carolina",
    title: "Postdoctoral Associate, Environmental Natural Sciences",
    dates: "Jul. 2026–current",
    relationships: {
      label: "Mentors",
      people: [
        people.nishadJayasundara,
        people.mercedesBravo,
        people.liyinHe,
        people.heatherStapleton,
        people.christinaWyatt,
      ],
    },
  },
  {
    institution: "Yale University",
    location: "New Haven, Connecticut",
    title: "Postdoctoral Associate, Environmental Health Sciences",
    dates: "April 2024–June 2026",
    relationships: {
      label: "Advisor",
      people: [people.kaiChen],
    },
  },
  {
    institution: "Yale University",
    location: "New Haven, Connecticut",
    title: "Postgraduate Fellow, Environmental Health Sciences",
    dates: "February 2022–July 2022",
    relationships: {
      label: "Advisor",
      people: [people.kaiChen],
    },
  },
] as const;

export const education = [
  {
    institution: "Nanjing University",
    degree: "Ph.D., Environmental Science and Engineering",
    dates: "Sep. 2019–Mar. 2024",
    relationships: {
      label: "Advisors",
      people: [people.junBi, people.zongweiMa],
    },
  },
  {
    institution: "Nanjing University",
    degree: "Master of Engineering, Environmental Management",
    dates: "Aug. 2016–Jun. 2019",
    relationships: undefined,
  },
  {
    institution: "Xiamen University",
    degree: "Bachelor of Science, Environmental Science",
    dates: "Sep. 2012–Jul. 2016",
    relationships: undefined,
  },
] as const;

export const reviewingJournals = [
  "Science Advances",
  "Nature Communications",
  "Journal of Hazardous Materials",
  "Science of the Total Environment",
  "Sustainable Cities and Society",
  "GeoHealth",
  "Journal of Exposure Science & Environmental Epidemiology",
  "Environmental Pollution",
  "Environmental Research",
  "Urban Climate",
  "Atmospheric Environment",
  "Transportation Research Part D",
] as const;

export const conferencePresentations = [
  {
    title: "Reconstructing Gridded Historical PM2.5 Over Six Decades: A Deep Learning Approach",
    event: "Yale FDS Workshop: AI for Social Science Research Methods",
    location: "New Haven, USA",
    date: "May 2026",
    format: "Poster presentation",
    material: undefined,
  },
  {
    title: "Four-decade (1980–2023) Surface Ozone Concentrations across the Contiguous United States: Fine-Resolution Estimates and Health Implications",
    event: "2026 AGU–AMS GeoHealth Showcase",
    location: "Virtual",
    date: "Apr. 2026",
    format: "Invited lightning talk",
    material: {
      label: "Watch recording",
      url: "https://www.youtube.com/watch?v=8YcUBxY3kv8&t=18015s",
    },
  },
  {
    title: "Four-decade (1980–2023) Surface Ozone Concentrations across the Contiguous United States: Fine-Resolution Estimates and Health Implications",
    event: "AGU25 Annual Meeting",
    location: "New Orleans, USA",
    date: "Dec. 2025",
    format: "Oral presentation",
    material: undefined,
  },
  {
    title: "Racial and Ethnic Disparities in Exposure to Short-Term NO2 Air Pollution in California During 1980–2022",
    event: "AGU24 Annual Meeting",
    location: "Washington, D.C., USA",
    date: "Dec. 2024",
    format: "Oral presentation",
    material: undefined,
  },
  {
    title: "Spatiotemporal patterns of ground ozone levels in China from 2005 to 2019: a machine learning approach",
    event: "Interdisciplinary Innovation Forum for Doctoral Students of Nanjing University",
    location: "Nanjing, China",
    date: "May 2021",
    format: "Oral presentation, first prize",
    material: undefined,
  },
  {
    title: "Spatiotemporal distribution of ground ozone levels in China from 2005 to 2016: a machine learning approach",
    event: "13th National Environmental Conference for Doctoral Students",
    location: "Beijing, China",
    date: "Oct. 2019",
    format: "Poster presentation",
    material: undefined,
  },
] as const;
