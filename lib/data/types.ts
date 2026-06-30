export type CategoryId =
  | 'tops'
  | 'bottoms'
  | 'dresses'
  | 'shoes'
  | 'accessories';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: CategoryId;
  price: number;
  /** Imagem original do catálogo (fotografia editorial da peça) */
  catalogImage: string;
  /** Galeria de imagens do catálogo */
  gallery: string[];
  /** PNG transparente utilizado no provador virtual */
  fittingRoomImage: string;
  color: string;
  material: string;
  editorial?: boolean;
}

export interface EditorialStory {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  issue: string;
  date: string;
  cover: string;
  body: string[];
}

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  statement: string;
  image: string;
  link: string;
}
