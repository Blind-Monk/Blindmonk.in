export interface ServiceGroup {
  id: string;
  title: string;
  icon: string;
  description?: string;
  services: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  highlights: string[];
}
