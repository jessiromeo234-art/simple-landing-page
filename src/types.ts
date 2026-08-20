export type ProductCategory = 'all' | 'seeds-soil' | 'tools' | 'watering' | 'care-compost';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'seeds-soil' | 'tools' | 'watering' | 'care-compost';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery?: string[];
  badges: string[];
  ecoBenefit: string;
  impactMetric: {
    label: string;
    value: string;
  };
  materials: string[];
  endOfLife: string;
  description: string;
  features: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  productName: string;
  gardenerType: string;
  verified: boolean;
  date: string;
}

export interface SignupData {
  email: string;
  name: string;
  gardenType: 'balcony' | 'raised-bed' | 'backyard' | 'indoor' | 'allotment';
  interests: string[];
  optedInForGuide: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
