// Seleção de publicações, a partir do Currículo Lattes (lista completa no Lattes).
// `authors` em formato curto; o nome do Orlewilson ("Maia, O. B.") é destacado na página.

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
}

export const journalArticles: Publication[] = [
  {
    title: 'A fuzzing-based test-creation approach for evaluating digital TV receivers via transport streams',
    authors: 'Izumi, F.; de Lima Filho, E. B.; Cordeiro, L. C.; Maia, O. B. et al.',
    venue: 'Software Testing, Verification and Reliability',
    year: 2022,
  },
  {
    title: 'A concise review of the quality of experience assessment for video streaming',
    authors: 'Maia, O. B.; Yehia, H. C.; de Errico, L.',
    venue: 'Computer Communications, v. 57, p. 1–12',
    year: 2015,
  },
  {
    title: 'Designing an extension API for bridging Ginga iDTV applications and home services',
    authors: 'de Lucena, V.; Viana, N.; Maia, O. B.; Chaves Filho, J.; da Silva, W.',
    venue: 'IEEE Transactions on Consumer Electronics, v. 58, p. 1077–1085',
    year: 2012,
  },
  {
    title:
      'An Infrastructure for Managing Residential Devices through the Declarative Environment of the Brazilian iDTV Middleware',
    authors: 'Maia, O. B.; Viana, N.; da Silva, W.; de Lucena, V.',
    venue: 'Revista IEEE América Latina, v. 9, p. 622–629',
    year: 2011,
  },
  {
    title: 'A Home Automation Proposal Built on the Ginga Digital TV Middleware and the OSGi Framework',
    authors: 'de Lucena, V.; Chaves Filho, J. E.; Viana, N.; Maia, O. B.',
    venue: 'IEEE Transactions on Consumer Electronics, v. 55, p. 1254–1262',
    year: 2009,
  },
];

export const conferencePapers: Publication[] = [
  {
    title: 'Automated Evaluation of Digital TV Middleware: Using Fuzzing and Pairwise for Test Generation',
    authors: 'Oliveira, S. B.; de Lima Filho, E. B.; Maia, O. B.; Cordeiro, L. C.',
    venue: 'IEEE International Conference on Consumer Electronics (ICCE), Las Vegas',
    year: 2025,
  },
  {
    title:
      'A Plugin-Based Testing Tool in an Adaptive Automated Testing Infrastructure for Consumer Electronics Devices',
    authors: 'Guedes, A. L.; Queiroz, A. R.; da Silva, E. F. T.; Maia, O. B. et al.',
    venue: 'IEEE International Conference on Consumer Electronics (ICCE), Las Vegas',
    year: 2025,
  },
  {
    title:
      'An Automated Testing Methodology to Evaluate Multimedia Processing Stacks Running on Digital TV Receivers',
    authors: 'da Silva, A. K. O.; Amorim, L. C.; Maia, O. B.; de Lima Filho, E. B. et al.',
    venue: 'IEEE International Conference on Consumer Electronics (ICCE)',
    year: 2024,
  },
  {
    title: 'A Real-Time Analyzer for Testing DTV Play',
    authors: 'Maia, O. B.; da Silva Conceição, A. R.; de Souza Junior, M. J.; Izumi, F. et al.',
    venue: 'IEEE International Conference on Consumer Electronics (ICCE), Las Vegas',
    year: 2022,
  },
  {
    title: 'A Framework for Automatic Field Evaluation of DTV Receivers',
    authors: 'de Souza, M. J.; Maia, O. B.; Leite, S. C.; de Lima Filho, E. B. et al.',
    venue: 'IEEE International Conference on Consumer Electronics (ICCE), Las Vegas',
    year: 2021,
  },
  {
    title: 'A Communication Infrastructure between the Brazilian Interactive Digital TV and Residential Devices',
    authors: 'Maia, O. B.; de Lucena, V. et al.',
    venue: '7th European Interactive TV Conference (EuroITV)',
    year: 2009,
  },
];
