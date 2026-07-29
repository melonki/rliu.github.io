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
  researchGate: "https://www.researchgate.net/profile/Riyang-Liu",
  linkedin: "https://www.linkedin.com/in/riyang-liu-394aa184/",
};

export const navigation = [
  { label: "Home", href: "" },
  { label: "Research", href: "research/" },
  { label: "Publications", href: "publications/" },
  { label: "CV", href: "cv/" },
] as const;

export const professionalSummary = [
  "Riyang is a SCALES Postdoctoral Fellow at Duke University's Nicholas School of the Environment. His current work focuses on heat exposure and human health.",
  "His research uses geospatial and computational methods for environmental exposure modeling and assessment, including spatiotemporally resolved models of air pollution and climate-related exposures.",
  "He also studies environmental health and disparities by connecting environmental exposure estimates with population and health data.",
] as const;

export const researchSummary = [
  {
    title: "Environmental exposure modeling and assessment",
    text: professionalSummary[1],
  },
  {
    title: "Environmental health and disparity analysis",
    text: professionalSummary[2],
  },
  {
    title: "Heat exposure and human health",
    text: professionalSummary[0],
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
