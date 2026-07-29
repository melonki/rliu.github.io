export interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  details?: string;
  doi: string;
  firstAuthor?: boolean;
  equalContribution?: boolean;
  featured?: boolean;
  note?: string;
}

export const publications: Publication[] = [
  {
    year: 2026,
    title: "Four-Decade (1980–2023) Surface Ozone Concentrations across the Contiguous United States: Fine-Resolution Estimates and Health Implications",
    authors: "Liu, R.; Chu, L.; Deziel, N. C.; Chen, K.",
    venue: "Environmental Science & Technology",
    doi: "https://doi.org/10.1021/acs.est.5c16412",
    firstAuthor: true,
    featured: true,
  },
  {
    year: 2026,
    title: "Interpretable machine learning for ambient air pollution modeling: A systemic review",
    authors: "Shao, Y.; Liu, R.; Huang, S.; Fang, W.; Yang, J.; Liu, M.; Ma, Z.; Bi, J.",
    venue: "Atmospheric Research",
    doi: "https://doi.org/10.1016/j.atmosres.2026.108869",
    equalContribution: true,
  },
  {
    year: 2025,
    title: "Effects of hypothetical PM2.5 intervention on the risk of hospitalization for cardiovascular diseases",
    authors: "Lin, C.; Chu, L.; Liu, R.; Gasparrini, A.; DeWan, A. T.; Forastiere, L.; Chen, K.",
    venue: "JAMA Network Open",
    doi: "https://doi.org/10.1001/jamanetworkopen.2025.39862",
  },
  {
    year: 2025,
    title: "Exploring homogeneous learnware market for PM2.5 prediction: A case study in the Yangtze River Delta region of China",
    authors: "Zhang, Y.; Shao, Y.; Liu, R.; Bi, J.; Ma, Z.",
    venue: "Atmospheric Pollution Research",
    doi: "https://doi.org/10.1016/j.apr.2025.102738",
  },
  {
    year: 2025,
    title: "Racial and Ethnic Disparities in Exposure to Short-Term NO2 Air Pollution in California during 1980–2022",
    authors: "Liu, R.; Chu, L.; Rogne, T.; Ma, X.; Chen, K.",
    venue: "Journal of Hazardous Materials",
    doi: "https://doi.org/10.1016/j.jhazmat.2025.139309",
    firstAuthor: true,
    featured: true,
  },
  {
    year: 2025,
    title: "Estimating the effects of hypothetical ambient PM2.5 interventions on the risk of dementia using the parametric g-formula in the UK Biobank cohort",
    authors: "Lin, C.; Liu, R.; Sutton, C.; DeWan, A. T.; Forastiere, L.; Chen, K.",
    venue: "Environmental Health Perspectives",
    doi: "https://doi.org/10.1289/EHP14723",
  },
  {
    year: 2024,
    title: "Long-term ambient ozone exposure and incident cardiovascular diseases: National cohort evidence in China",
    authors: "Zhu, L.; Fang, J.; Yao, Y.; Yang, Z.; Wu, J.; Ma, Z.; Liu, R.; Zhan, Y.; Ding, Z.; Zhang, Y.",
    venue: "Journal of Hazardous Materials",
    details: "471, 134158",
    doi: "https://doi.org/10.1016/j.jhazmat.2024.134158",
  },
  {
    year: 2023,
    title: "Integrating Augmented In Situ Measurements and a Spatiotemporal Machine Learning Model To Back Extrapolate Historical Particulate Matter Pollution over the United Kingdom: 1980–2019",
    authors: "Liu, R.; Ma, Z.; Gasparrini, A.; de la Cruz, A.; Bi, J.; Chen, K.",
    venue: "Environmental Science & Technology",
    details: "57(51), 21605–21615",
    doi: "https://doi.org/10.1021/acs.est.3c05424",
    firstAuthor: true,
    featured: true,
  },
  {
    year: 2023,
    title: "Long-Term Exposure to Fine Particulate Matter and Academic Performance Among Children in North Carolina",
    authors: "Lam, P. H.; Zang, E.; Chen, D.; Liu, R.; Chen, K.",
    venue: "JAMA Network Open",
    details: "6(10), e2340928",
    doi: "https://doi.org/10.1001/jamanetworkopen.2023.40928",
  },
  {
    year: 2023,
    title: "Ambient ozone exposure and depression among middle-aged and older adults: Nationwide longitudinal evidence in China",
    authors: "Yuan, Y.; Wang, K.; Wang, Z.; Zheng, H.; Ma, Z.; Liu, R.; Hu, K.; Yang, Z.; Zhang, Y.",
    venue: "International Journal of Hygiene and Environmental Health",
    details: "251, 114185",
    doi: "https://doi.org/10.1016/j.ijheh.2023.114185",
  },
  {
    year: 2023,
    title: "Estimation of daily NO2 with explainable machine learning model in China, 2007–2020",
    authors: "Shao, Y.; Zhao, W.; Liu, R.; Yang, J.; Liu, M.; Fang, W.; Hu, L.; Adams, M.; Bi, J.; Ma, Z.",
    venue: "Atmospheric Environment",
    details: "314, 120111",
    doi: "https://doi.org/10.1016/j.atmosenv.2023.120111",
  },
  {
    year: 2023,
    title: "Economic Growth Facilitates Household Fuel Use Transition to Reduce PM2.5-Related Deaths in China",
    authors: "Shao, Y.; Liu, R.; Yang, J.; Liu, M.; Fang, W.; Hu, L.; Bi, J.; Ma, Z.",
    venue: "Environmental Science & Technology",
    details: "57(34), 12663–12673",
    doi: "https://doi.org/10.1021/acs.est.3c03276",
  },
  {
    year: 2023,
    title: "A MISR-Based Method for the Estimation of Particle Size Distribution: Comparison with AERONET over China",
    authors: "Shao, Y.; Liu, R.; Li, W.; Bi, J.; Ma, Z.",
    venue: "Journal of Remote Sensing",
    details: "3, 0032",
    doi: "https://doi.org/10.34133/remotesensing.0032",
  },
  {
    year: 2023,
    title: "Long-term air pollution exposure accelerates ageing-associated degradation of lung function",
    authors: "Kuang, Z.; Wang, K.; Ma, Z.; Zhan, Y.; Liu, R.; Peng, M.; Yang, J.; Zhang, Y.",
    venue: "Atmospheric Pollution Research",
    details: "14(10), 101899",
    doi: "https://doi.org/10.1016/j.apr.2023.101899",
  },
  {
    year: 2022,
    title: "Long-term exposure to ambient NO2 and adult mortality: A nationwide cohort study in China",
    authors: "Zhang, Y.; Li, Z.; Wei, J.; Zhan, Y.; Liu, L.; Yang, Z.; Zhang, Y.; Liu, R.; Ma, Z.",
    venue: "Journal of Advanced Research",
    details: "41, 13–22",
    doi: "https://doi.org/10.1016/j.jare.2022.02.007",
  },
  {
    year: 2022,
    title: "Assessing the effects of ultraviolet radiation, residential greenness and air pollution on vitamin D levels: A longitudinal cohort study in China",
    authors: "Zhang, H.; Zhu, A.; Liu, L.; Zeng, Y.; Liu, R.; Ma, Z.; Liu, M.; Bi, J.; Ji, J. S.",
    venue: "Environment International",
    details: "169, 107523",
    doi: "https://doi.org/10.1016/j.envint.2022.107523",
  },
  {
    year: 2022,
    title: "A review of statistical methods used for developing large-scale and long-term PM2.5 models from satellite data",
    authors: "Ma, Z.; Dey, S.; Christopher, S.; Liu, R.; Bi, J.; Balyan, P.; Liu, Y.",
    venue: "Remote Sensing of Environment",
    details: "269, 112827",
    doi: "https://doi.org/10.1016/j.rse.2021.112827",
  },
  {
    year: 2022,
    title: "Associations between short-term ambient ozone exposure and cause-specific mortality in rural and urban areas of Jiangsu, China",
    authors: "Lin, C.; Ma, Y.; Liu, R.; Shao, Y.; Ma, Z.; Zhou, L.; Jing, Y.; Bell, M. L.; Chen, K.",
    venue: "Environmental Research",
    details: "211, 113098",
    doi: "https://doi.org/10.1016/j.envres.2022.113098",
  },
  {
    year: 2021,
    title: "Decrease in the chronic health effects from PM2.5 during the 13th Five-Year Plan in China: Impacts of air pollution control policies",
    authors: "Shi, W.; Bi, J.; Liu, R.; Liu, M.; Ma, Z.",
    venue: "Journal of Cleaner Production",
    details: "128433",
    doi: "https://doi.org/10.1016/j.jclepro.2021.128433",
  },
  {
    year: 2020,
    title: "Spatiotemporal distributions of surface ozone levels in China from 2005 to 2017: A machine learning approach",
    authors: "Liu, R.; Ma, Z.; Liu, Y.; Shao, Y.; Zhao, W.; Bi, J.",
    venue: "Environment International",
    details: "142, 105823",
    doi: "https://doi.org/10.1016/j.envint.2020.105823",
    firstAuthor: true,
  },
  {
    year: 2019,
    title: "How much will the Chinese public pay for air pollution mitigation? A nationwide empirical study based on a willingness-to-pay scenario and air purifier costs",
    authors: "Pu, S.; Shao, Z.; Yang, L.; Liu, R.; Bi, J.; Ma, Z.",
    venue: "Journal of Cleaner Production",
    details: "218, 51–60",
    doi: "https://doi.org/10.1016/j.jclepro.2019.01.270",
  },
  {
    year: 2019,
    title: "Spatial distribution of the public's risk perception for air pollution: A nationwide study in China",
    authors: "Pu, S.; Shao, Z.; Fang, M.; Yang, L.; Liu, R.; Bi, J.; Ma, Z.",
    venue: "Science of the Total Environment",
    details: "655, 454–462",
    doi: "https://doi.org/10.1016/j.scitotenv.2018.11.232",
  },
  {
    year: 2019,
    title: "Effects of air pollution control policies on PM2.5 pollution improvement in China from 2005 to 2017: A satellite-based perspective",
    authors: "Ma, Z.; Liu, R.; Liu, Y.; Bi, J.",
    venue: "Atmospheric Chemistry and Physics",
    details: "19(10), 6861–6877",
    doi: "https://doi.org/10.5194/acp-19-6861-2019",
    note: "ESI Highly Cited Paper",
  },
];

export const featuredPublications = publications.filter((publication) => publication.featured);

export const publicationsByYear = publications.reduce<Record<number, Publication[]>>(
  (groups, publication) => {
    (groups[publication.year] ??= []).push(publication);
    return groups;
  },
  {},
);
