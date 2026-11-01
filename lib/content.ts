export interface NetworkTab {
  id: string;
  number: string;
  tabTitle: string;
  category: string;
  heading: string;
  copy: string;
  points: string[];
  image: string;
  objectPosition: string;
  alt: string;
}

export const NETWORK_TABS: NetworkTab[] = [
  {
    id: 'stock',
    number: '01',
    tabTitle: 'Stock your shelves',
    category: 'Supply that comes to you',
    heading: 'Fuller shelves. Fewer market trips.',
    copy: 'A shared supply network brings everyday essentials to your doorstep, so you can spend more of the day doing what you do best: running your store.',
    points: ['Central sourcing', 'Storefront replenishment', 'Everyday essentials'],
    image: '/images/shared-supply.webp',
    objectPosition: 'center',
    alt: 'Shared supply warehouse and replenishment team at Hello Stores',
  },
  {
    id: 'simplify',
    number: '02',
    tabTitle: 'Simplify your day',
    category: 'A smarter everyday store',
    heading: 'A familiar store, with a fresh start.',
    copy: 'Welcoming shelves, useful variety and simple billing and stock tools. The Hello model connects everyday sales to replenishment, keeping your next delivery in view.',
    points: ['Organised shelves', 'Connected billing', 'Stock visibility'],
    image: '/images/store-technology.webp',
    objectPosition: 'center',
    alt: 'Organised shelves and modern billing counter at Hello Store',
  },
  {
    id: 'online',
    number: '03',
    tabTitle: 'Go online',
    category: 'Your shop, now online',
    heading: 'The local shop. On their phone.',
    copy: 'Bring the neighbourhood relationship online. Customers can discover their nearby Hello Store and browse everyday essentials, with orders picked at the store they already know.',
    points: ['Local discovery', 'Online ordering', 'Store-based picking'],
    image: '/images/order-online.webp',
    objectPosition: '34% center',
    alt: 'Customer browsing and ordering from neighbourhood Hello Store on smartphone',
  },
  {
    id: 'deliver',
    number: '04',
    tabTitle: 'Deliver locally',
    category: 'The neighbourhood, delivered',
    heading: 'From your counter to their doorstep.',
    copy: 'Make your store a nearby delivery point. Local orders stay connected to your shop, bringing the convenience of delivery to the personal touch of neighbourhood retail.',
    points: ['Nearby orders', 'Local fulfilment', 'Familiar faces'],
    image: '/images/local-delivery.webp',
    objectPosition: 'center',
    alt: 'Hello Stores neighbourhood delivery rider on motorcycle',
  },
];

export interface OwnerPrinciple {
  number: string;
  title: string;
  description: string;
  icon: 'store' | 'package' | 'phone';
}

export const OWNER_PRINCIPLES: OwnerPrinciple[] = [
  {
    number: '01',
    title: 'Stay the familiar face.',
    description: 'Your relationships and local knowledge are what make your store special. They stay at the heart of it.',
    icon: 'store',
  },
  {
    number: '02',
    title: 'Get more behind you.',
    description: 'Explore shared supply, a welcoming store identity, and simpler tools for billing and stock.',
    icon: 'package',
  },
  {
    number: '03',
    title: 'Open another door.',
    description: 'Bring your store to nearby customers’ phones, with orders picked and fulfilled locally.',
    icon: 'phone',
  },
];

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'What is Hello Stores?',
    answer: 'Hello Stores is a neighbourhood retail network being built around locally run kirana stores. The model brings branding, shared supply, simple store technology and local online shopping together, while keeping the store owner at the centre.',
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'Can my existing kirana store join?',
    answer: 'Yes. Upgrading existing kiranas is part of the Hello Stores plan. Register your interest with your store name and city so the team can explore your location, store needs and the next steps with you.',
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'Who runs a Hello Store?',
    answer: 'Local entrepreneurs run their stores. Hello Stores is designed to support them with a connected brand, supply network and store systems, while they continue to serve the neighbourhood they know.',
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Where is Hello Stores launching?',
    answer: 'The first chapter is planned for Kochi, with showcase stores demonstrating the connected experience. You can also register interest from another city as the network develops.',
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'What are the investment and partnership terms?',
    answer: 'Investment, store requirements, commercial terms and timelines will be discussed directly with interested partners. This website does not promise a fixed investment, return or launch date.',
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'Can brands and suppliers work with Hello Stores?',
    answer: 'Yes. Brands, staples producers and suppliers can register interest in the shared supply network. Choose “Brand or supplier” in the enquiry form and add your business name.',
  },
];

export const PARTNERSHIP_ROLES = [
  {
    id: 'store-owner',
    title: 'I own a kirana',
    selectLabel: 'Existing store owner',
    icon: 'store',
  },
  {
    id: 'new-store',
    title: 'I’m planning a new store',
    selectLabel: 'New store entrepreneur',
    icon: 'sparkles',
  },
  {
    id: 'supplier',
    title: 'I’m a brand or supplier',
    selectLabel: 'Brand or supplier',
    icon: 'truck',
  },
] as const;

export type PartnershipRoleId = typeof PARTNERSHIP_ROLES[number]['id'];

export const NAV_LINKS = [
  { href: '#our-story', label: 'Our story' },
  { href: '#network', label: 'The Hello way' },
  { href: '#for-store-owners', label: 'For store owners' },
  { href: '#questions', label: 'FAQs' },
];
