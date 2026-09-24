export interface SiteConfig {
  siteUrl: string;
  name: string;
  legalEntity?: string;
  companyName: string;
  companyNumber: string;
  registeredOffice: string;
  legalLine: string;
  vatNumber?: string;
  email: string;
  phone?: string;
  phoneE164?: string;
  phoneDisplay?: string;
  whatsAppE164?: string;
  founder: {
    name: string;
    role: string;
    linkedin: string;
  };
  address: {
    street?: string;
    locality?: string;
    town: string;
    county: string;
    postcode?: string;
    country: string;
  };
  nap: {
    name: string;
    street: string;
    town: string;
    county: string;
    postcode: string;
    phone: string;
    phoneE164: string;
    email: string;
    companyNumber: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  openingHours: string;
  insurance?: {
    publicLiability?: string;
    professionalIndemnity?: string;
  };
  priceRange: string;
  pricing: {
    brochureFrom: string;
    b2bFrom: string;
    ecommerceFrom: string;
    carePlanFrom: string;
  };
  accreditations: string[];
  clientLogos: { name: string; logoUrl: string; alt: string }[];
}

export const site: SiteConfig = {
  siteUrl: 'https://www.lancashirewebdesigners.co.uk',
  name: 'Lancashire Web Designers',
  legalEntity: '[COMPANY NAME]',
  companyName: '[COMPANY NAME]',
  companyNumber: '[NUMBER]',
  registeredOffice: '[ADDRESS]',
  legalLine: 'Lancashire Web Designers is a trading name of [COMPANY NAME], registered in England & Wales, Company No. [NUMBER]. Registered office: [ADDRESS].',
  vatNumber: '',
  email: 'lancashirewebdesigners@gmail.com',
  phone: '07466 361298',
  phoneE164: '+447466361298',
  phoneDisplay: '07466 361298',
  whatsAppE164: '+447466361298',
  founder: {
    name: 'Mohsin Ali',
    role: 'founder and lead developer',
    linkedin: 'https://www.linkedin.com/in/iammohsinmughal/'
  },
  address: {
    street: 'Suite 3, Cathedral Quarter, Railway Road',
    locality: 'Cathedral Quarter',
    town: 'Blackburn',
    county: 'Lancashire',
    postcode: 'BB1 1EZ',
    country: 'United Kingdom'
  },
  nap: {
    name: 'Lancashire Web Designers',
    street: 'Suite 3, Cathedral Quarter, Railway Road',
    town: 'Blackburn',
    county: 'Lancashire',
    postcode: 'BB1 1EZ',
    phone: '07466 361298',
    phoneE164: '+447466361298',
    email: 'lancashirewebdesigners@gmail.com',
    companyNumber: '[NUMBER]'
  },
  geo: {
    lat: 53.7488,
    lng: -2.4818
  },
  openingHours: 'Mo-Fr 09:00-17:30',
  insurance: {
    publicLiability: '',
    professionalIndemnity: ''
  },
  priceRange: '££',
  pricing: {
    brochureFrom: '£150',
    b2bFrom: '£300',
    ecommerceFrom: '£350',
    carePlanFrom: '£49/month'
  },
  accreditations: [],
  clientLogos: []
};

export default site;
