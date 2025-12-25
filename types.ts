
export interface Pen {
  id: number;
  name: string;
  price: number;
  category: 'Ballpoint' | 'Gel' | 'Fountain' | 'Rollerball' | 'Premium';
  image: string;
  description: string;
}

export type ThemeType = 'classic' | 'modern' | 'minimal';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  feedback: string;
}

export enum Section {
  HOME = 'home',
  PRODUCTS = 'products',
  ABOUT = 'about',
  CONTACT = 'contact'
}
