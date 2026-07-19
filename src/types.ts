export type Language = 'PT' | 'EN';

export interface RouteOption {
  id: string;
  origin: string;
  originPT: string;
  destination: string;
  destinationPT: string;
  distance: number; // km
  time: number; // hours
  corridor: string;
  corridorPT: string;
  baseRate: number; // USD per ton
}

export interface ServiceItem {
  id: string;
  titlePT: string;
  titleEN: string;
  descPT: string;
  descEN: string;
  iconName: string;
  specsPT: string[];
  specsEN: string[];
}

export interface FleetVehicle {
  id: string;
  plate: string;
  driver: string;
  route: string;
  status: 'transit' | 'border' | 'delivered' | 'loading';
  progress: number; // percentage 0-100
  cargo: string;
  cargoPT: string;
  lastUpdate: string;
  lastUpdatePT: string;
  coordX: number; // X offset on SVG SADC map
  coordY: number; // Y offset on SVG SADC map
}

export interface TranslationDictionary {
  brandName: string;
  tagline: string;
  heroTitle: string;
  heroSub: string;
  heroCTA: string;
  heroSecondary: string;
  servicesTitle: string;
  servicesSub: string;
  trackerTitle: string;
  trackerSub: string;
  calcTitle: string;
  calcSub: string;
  contactTitle: string;
  contactSub: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formOrigin: string;
  formDest: string;
  formCargo: string;
  formWeight: string;
  formSubmit: string;
  formSuccess: string;
  formSuccessDesc: string;
  statsVehicles: string;
  statsCountries: string;
  statsFreight: string;
  statsSatisfaction: string;
  investmentTitle: string;
  investmentSub: string;
  loading: string;
}
