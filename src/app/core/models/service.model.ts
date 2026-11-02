export interface ServiceGroup {
  id: string;
  title: string;
  icon: string;
  description?: string;
  services: ServiceLinkItem[];
  link?: string;
  linkText?: string;
}

export interface ServiceLinkItem {
  slug: string;
  name: string;
  shortDesc?: string;
}

export interface ServiceArticle {
  slug: string;
  title: string;
  category: string;
  icon: string;
  badge: string;
  readingTime: string;
  metaDescription: string;
  tagline: string;
  whyNeeded: string;
  howImproved: string;
  importance: string;
  whyBlindmonk: string;
  keyTakeaways: string[];
  techStackOrMethodology: string[];
  sectorImpacts: {
    sectorId: string;
    sectorTitle: string;
    icon: string;
    impactSummary: string;
    exampleUseCases: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}
