export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'software' | 'hardware' | 'media';
  link?: string;
  comingSoon?: boolean;
  features?: string[];
  tags?: string[];
}
