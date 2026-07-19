import { RouteOption, ServiceItem, FleetVehicle, TranslationDictionary } from './types';

export const TRANSLATIONS: Record<'PT' | 'EN', TranslationDictionary> = {
  PT: {
    brandName: 'Mozambique Group Investments',
    tagline: 'MGI Lda. — Logística, Trânsito e Investimentos Industriais',
    heroTitle: 'CONECTANDO A ÁFRICA AUSTRAL COM MÁXIMA ENERGIA E PRECISÃO',
    heroSub: 'Operador logístico líder em Moçambique. Viabilizamos o trânsito transfronteiriço de alta capacidade através dos corredores de Maputo, Beira e Nacala com frotas modernas e monitoramento em tempo real.',
    heroCTA: 'Solicitar Cotação Industrial',
    heroSecondary: 'Ver Corredores de Trânsito',
    servicesTitle: 'Nossos Serviços Industriais',
    servicesSub: 'Soluções logísticas e aduaneiras integradas com rigor operacional, segurança e conformidade SADC.',
    trackerTitle: 'Painel de Rastreamento de Frota',
    trackerSub: 'Acompanhe a posição estimada das frotas da MGI nos principais corredores de trânsito em tempo real.',
    calcTitle: 'Simulador de Trânsito e Custos',
    calcSub: 'Calcule as distâncias, tempos previstos e taxas base estimadas para o transporte regional de cargas SADC.',
    contactTitle: 'Inicie Sua Operação Conosco',
    contactSub: 'Nossa equipe de especialistas em trânsito internacional está pronta para responder à sua solicitação em menos de 1 hora.',
    formName: 'Nome Completo / Empresa',
    formEmail: 'E-mail Corporativo',
    formPhone: 'Telefone / WhatsApp',
    formOrigin: 'Ponto de Partida (Porto)',
    formDest: 'Destino Regional (Hinterland)',
    formCargo: 'Tipo de Mercadoria',
    formWeight: 'Tonelagem Estimada (Tons)',
    formSubmit: 'Processar Requisição de Trânsito',
    formSuccess: 'Cotação Gerada com Sucesso!',
    formSuccessDesc: 'Obrigado por contactar a MGI. Um especialista em logística regional entrará em contacto com a proposta formalizada.',
    statsVehicles: 'Camiões Pesados Ativos',
    statsCountries: 'Países SADC Conectados',
    statsFreight: 'Toneladas Movimentadas/Ano',
    statsSatisfaction: 'Conformidade de Tempo (SLA)',
    investmentTitle: 'Portfólios de Investimento MGI',
    investmentSub: 'Além do transporte rodoviário pesado, investimos estrategicamente em infraestrutura crítica para a economia moçambicana.',
    loading: 'A carregar...',
  },
  EN: {
    brandName: 'Mozambique Group Investments',
    tagline: 'MGI Lda. — Logistics, Transit & Industrial Investments',
    heroTitle: 'CONNECTING SOUTHERN AFRICA WITH MAXIMUM ENERGY AND PRECISION',
    heroSub: 'Leading logistics operator in Mozambique. We enable high-capacity cross-border transit through the Maputo, Beira, and Nacala corridors with modern fleets and real-time monitoring.',
    heroCTA: 'Request Industrial Quote',
    heroSecondary: 'View Transit Corridors',
    servicesTitle: 'Our Industrial Services',
    servicesSub: 'Integrated logistics and customs solutions with operational rigor, safety, and SADC compliance.',
    trackerTitle: 'Fleet Tracking Dashboard',
    trackerSub: 'Track the estimated position of MGI fleets across major transit corridors in real time.',
    calcTitle: 'Transit & Cost Simulator',
    calcSub: 'Calculate distances, estimated transit times, and base rates for regional SADC freight transport.',
    contactTitle: 'Launch Your Operation With Us',
    contactSub: 'Our team of international transit specialists is ready to respond to your request in under 1 hour.',
    formName: 'Full Name / Company',
    formEmail: 'Corporate Email',
    formPhone: 'Phone / WhatsApp',
    formOrigin: 'Point of Origin (Port)',
    formDest: 'Regional Destination (Hinterland)',
    formCargo: 'Type of Cargo',
    formWeight: 'Estimated Tonnage (Tons)',
    formSubmit: 'Process Transit Request',
    formSuccess: 'Quote Generated Successfully!',
    formSuccessDesc: 'Thank you for contacting MGI. A regional logistics specialist will contact you with a formal proposal.',
    statsVehicles: 'Active Heavy-Duty Trucks',
    statsCountries: 'SADC Countries Connected',
    statsFreight: 'Tons Moved / Year',
    statsSatisfaction: 'On-Time Compliance (SLA)',
    investmentTitle: 'MGI Investment Portfolios',
    investmentSub: 'Beyond heavy road transport, we strategically invest in critical infrastructure for the Mozambican economy.',
    loading: 'Loading...',
  }
};

export const ROUTES: RouteOption[] = [
  {
    id: 'rt-1',
    origin: 'Port of Maputo (MZ)',
    originPT: 'Porto de Maputo (MZ)',
    destination: 'Johannesburg (ZA)',
    destinationPT: 'Joanesburgo (ZA)',
    distance: 430,
    time: 8,
    corridor: 'Maputo Development Corridor',
    corridorPT: 'Corredor de Desenvolvimento de Maputo',
    baseRate: 45
  },
  {
    id: 'rt-2',
    origin: 'Port of Beira (MZ)',
    originPT: 'Porto da Beira (MZ)',
    destination: 'Harare (ZW)',
    destinationPT: 'Harare (ZW)',
    distance: 560,
    time: 11,
    corridor: 'Beira Transit Corridor',
    corridorPT: 'Corredor de Trânsito da Beira',
    baseRate: 58
  },
  {
    id: 'rt-3',
    origin: 'Port of Beira (MZ)',
    originPT: 'Porto da Beira (MZ)',
    destination: 'Lusaka (ZM)',
    destinationPT: 'Lusaka (ZM)',
    distance: 1050,
    time: 22,
    corridor: 'Beira-Lusaka Corridor',
    corridorPT: 'Corredor Beira-Lusaka',
    baseRate: 85
  },
  {
    id: 'rt-4',
    origin: 'Port of Nacala (MZ)',
    originPT: 'Porto de Nacala (MZ)',
    destination: 'Lilongwe (MW)',
    destinationPT: 'Lilongwe (MW)',
    distance: 980,
    time: 20,
    corridor: 'Nacala Logistics Corridor',
    corridorPT: 'Corredor Logístico de Nacala',
    baseRate: 78
  },
  {
    id: 'rt-5',
    origin: 'Port of Maputo (MZ)',
    originPT: 'Porto de Maputo (MZ)',
    destination: 'Mbabane (SZ)',
    destinationPT: 'Mbabane (SZ)',
    distance: 150,
    time: 3,
    corridor: 'Goba / Mhlumeni Corridor',
    corridorPT: 'Corredor de Goba / Mhlumeni',
    baseRate: 30
  },
  {
    id: 'rt-6',
    origin: 'Port of Maputo (MZ)',
    originPT: 'Porto de Maputo (MZ)',
    destination: 'Gaborone (BW)',
    destinationPT: 'Gaborone (BW)',
    distance: 780,
    time: 14,
    corridor: 'Trans-Kalahari Connector',
    corridorPT: 'Conector Trans-Kalahari',
    baseRate: 65
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    titlePT: 'Transporte de Cargas Anormais',
    titleEN: 'Abnormal & Oversized Loads',
    descPT: 'Especialistas em logística pesada e sobredimensionada com frotas dedicadas e atrelados especiais de grande porte (Lowbeds).',
    descEN: 'Specialists in heavy and oversized logistics with dedicated heavy-duty fleets and specialized modular lowbeds.',
    iconName: 'Truck',
    specsPT: ['Escolta e batedores oficiais certificados', 'Planeamento de rota e pontes especiais SADC', 'Capacidade de transporte até 85 toneladas'],
    specsEN: ['Certified official escort and patrol vehicles', 'Advanced SADC route and bridge feasibility planning', 'Heavy haulage capacity up to 85 tons']
  },
  {
    id: 'srv-2',
    titlePT: 'Carga Geral e Combustíveis',
    titleEN: 'General Cargo & Fuel Transport',
    descPT: 'Distribuição segura de mercadorias diversas, contentores e granéis líquidos/combustíveis pelos principais eixos rodoviários.',
    descEN: 'Secure distribution of diverse general goods, containers, and liquid bulk/fuels across the major regional road corridors.',
    iconName: 'ShieldCheck',
    specsPT: ['Cisternas de inox AISI 316 e alumínio', 'Lonas reforçadas com cabos de aço anti-corte', 'Monitorização de travas por satélite 24/7'],
    specsEN: ['AISI 316 stainless steel and aluminum tanker units', 'Steel-reinforced slash-proof tautliners', '24/7 satellite tracked electronic cargo seals']
  },
  {
    id: 'srv-3',
    titlePT: 'Aluguer de Máquinas e Terraplanagem',
    titleEN: 'Machine Rental & Earthworks',
    descPT: 'Soluções robustas e frotas de suporte para projetos de construção civil, mineração e desenvolvimento de infraestruturas.',
    descEN: 'Robust machinery solutions and support fleets for civil construction, mining, and infrastructure developments.',
    iconName: 'Settings',
    specsPT: ['Escavadoras, cilindros e bulldozers modernos', 'Operadores experientes e devidamente certificados', 'Assistência e manutenção mecânica ativa no local'],
    specsEN: ['Modern excavators, rollers, and heavy bulldozers', 'Highly experienced, certified operators', 'On-site proactive technical and mechanical support']
  }
];

export const FLEETS: FleetVehicle[] = [
  {
    id: 'flt-101',
    plate: 'MGI-948-MC',
    driver: 'António Nhaca',
    route: 'Porto de Maputo → Joanesburgo',
    status: 'transit',
    progress: 65,
    cargo: 'Minério de Crómio (Bulk)',
    cargoPT: 'Minério de Crómio (Granel)',
    lastUpdate: '20 mins ago - Witbank (N4 Highway)',
    lastUpdatePT: 'Há 20 min - Witbank (Autoestrada N4)',
    coordX: 340,
    coordY: 345
  },
  {
    id: 'flt-204',
    plate: 'MGI-032-SF',
    driver: 'Mateus Beira',
    route: 'Porto da Beira → Harare',
    status: 'border',
    progress: 48,
    cargo: 'Fertilizantes Agrícolas',
    cargoPT: 'Fertilizantes Agrícolas',
    lastUpdate: '5 mins ago - Machipanda Border Post',
    lastUpdatePT: 'Há 5 min - Posto Fronteiriço de Machipanda',
    coordX: 420,
    coordY: 220
  },
  {
    id: 'flt-309',
    plate: 'MGI-811-NL',
    driver: 'Chico Maputo',
    route: 'Porto de Nacala → Lilongwe',
    status: 'delivered',
    progress: 100,
    cargo: 'Equipamento de Energia Solar',
    cargoPT: 'Equipamento de Energia Solar',
    lastUpdate: 'Just now - Delivered to Lilongwe Hub',
    lastUpdatePT: 'Agora mesmo - Entregue no Hub de Lilongwe',
    coordX: 495,
    coordY: 95
  },
  {
    id: 'flt-105',
    plate: 'MGI-556-MC',
    driver: 'Sérgio Tembe',
    route: 'Porto de Maputo → Mbabane',
    status: 'loading',
    progress: 5,
    cargo: 'Produtos Siderúrgicos',
    cargoPT: 'Produtos Siderúrgicos',
    lastUpdate: '45 mins ago - Loading at Maputo Port Terminal',
    lastUpdatePT: 'Há 45 min - Carregamento no Terminal de Maputo',
    coordX: 350,
    coordY: 375
  },
  {
    id: 'flt-401',
    plate: 'MGI-772-BC',
    driver: 'Damião Chimoio',
    route: 'Porto da Beira → Lusaka',
    status: 'transit',
    progress: 32,
    cargo: 'Cobre Catódico',
    cargoPT: 'Cobre Catódico',
    lastUpdate: '1 hour ago - Chinhoyi Pass (Zimbabwe)',
    lastUpdatePT: 'Há 1 hora - Desfiladeiro de Chinhoyi (Zimbabué)',
    coordX: 290,
    coordY: 190
  }
];

export const PORTFOLIOS = [
  {
    id: 'p1',
    titlePT: 'Zona Logística Industrial (Maputo-N4)',
    titleEN: 'Industrial Logistics Zone (Maputo-N4)',
    areaPT: 'Armazéns Classe A & Pátio de Contentores',
    areaEN: 'Class A Warehouses & Container Yard',
    size: '45,000 m²',
    statusPT: 'Fase I & II Operacionais',
    statusEN: 'Phase I & II Operational',
    highlightPT: 'Acesso direto à Autoestrada N4, ideal para transbordo transfronteiriço.',
    highlightEN: 'Direct access to N4 Highway, ideal for cross-border transshipment.'
  },
  {
    id: 'p2',
    titlePT: 'Expansão da Frota de Graneis SADC',
    titleEN: 'SADC Bulk Fleet Expansion',
    areaPT: 'Basculantes Interlink & Carretas de Cortina',
    areaEN: 'Interlink Tippers & Tautliners',
    size: '120+ Unidades',
    statusPT: 'Concluído em 2026',
    statusEN: 'Completed in 2026',
    highlightPT: 'Equipados com telemetria via satélite dupla-frequência integrada.',
    highlightEN: 'Equipped with integrated dual-frequency satellite telemetry.'
  },
  {
    id: 'p3',
    titlePT: 'Terminal Intermodal Seco de Chimoio',
    titleEN: 'Chimoio Intermodal Inland Dry Port',
    areaPT: 'Hub de Consolidação do Corredor da Beira',
    areaEN: 'Beira Corridor Consolidation Hub',
    size: '22,000 m²',
    statusPT: 'Em Operação / Fase III Licenciamento',
    statusEN: 'In Operation / Phase III Licensing',
    highlightPT: 'Permite desembaraço pré-fronteiriço e consolidação de graneis minerais.',
    highlightEN: 'Enables pre-border clearance and consolidation of mineral bulks.'
  }
];

export const STATS = [
  { value: '140+', labelKey: 'statsVehicles' },
  { value: '6', labelKey: 'statsCountries' },
  { value: '450,000 T', labelKey: 'statsFreight' },
  { value: '98.6%', labelKey: 'statsSatisfaction' }
];
