export interface SectorItem {
  id: string; // slug e.g. 'agriculture-forestry-fishing'
  title: string;
  icon: string;
  badge: string;
  shortDescription: string;
  overview: string;
  subsectors: string[];
  keyChallenges: string[];
  transformationOpportunities: string[];
  impactHighlights: {
    stat: string;
    label: string;
  }[];
  appliedServices: {
    serviceId: string;
    serviceName: string;
    icon: string;
    howItHelps: string;
    concreteUseCase: string;
  }[];
}
