import type { CategoryId } from './types';

export interface FittingGarment {
  id: string;
  name: string;
  category: CategoryId;
  /** PNG transparente utilizado no provador virtual */
  image: string;
  price: number;
}

export const fittingGarments: FittingGarment[] = [
  {
    id: 'fr-shirt-01',
    name: 'Camisa Feminina Manga Longa Branca',
    category: 'tops',
    image: '/images/fitting-room/tops/shirt-01.png',
    price: 240,
  },
  {
    id: 'fr-coat-02',
    name: 'Casaco Alongado Bege',
    category: 'tops',
    image: '/images/fitting-room/tops/coat-02.png',
    price: 890,
  },
  {
    id: 'fr-knit-03',
    name: 'Suéter Gola Alta Azul Marinho',
    category: 'tops',
    image: '/images/fitting-room/tops/knit-03.png',
    price: 290,
  },
  {
    id: 'fr-trouser-04',
    name: 'Calça Wide Leg',
    category: 'bottoms',
    image: '/images/fitting-room/bottoms/trouser-04.png',
    price: 320,
  },
  {
    id: 'fr-skirt-05',
    name: 'Saia Midi em Viés',
    category: 'bottoms',
    image: '/images/fitting-room/bottoms/skirt-05.png',
    price: 260,
  },
  {
    id: 'fr-denim-06',
    name: 'Calça Jeans Selvedge',
    category: 'bottoms',
    image: '/images/fitting-room/bottoms/denim-06.png',
    price: 280,
  },
  {
    id: 'fr-dress-07',
    name: 'Vestido Slip Dress Preto',
    category: 'dresses',
    image: '/images/fitting-room/dresses/dress-07.png',
    price: 420,
  },
  {
    id: 'fr-dress-08',
    name: 'Vestido Camisa Longo',
    category: 'dresses',
    image: '/images/fitting-room/dresses/dress-08.png',
    price: 380,
  },
];

export const getGarmentsByCategory = (category: CategoryId) =>
  fittingGarments.filter((g) => g.category === category);

export interface SkinTone {
  id: string;
  name: string;
  value: string;
}

export const skinTones: SkinTone[] = [
  { id: 'porcelain', name: 'Porcelana', value: '#f0d9c4' },
  { id: 'ivory', name: 'Marfim', value: '#e8c9a8' },
  { id: 'sand', name: 'Areia', value: '#d4a373' },
  { id: 'clay', name: 'Argila', value: '#b07d56' },
  { id: 'umber', name: 'Âmbar', value: '#8a5a3b' },
  { id: 'espresso', name: 'Espresso', value: '#5c3a26' },
];

export interface BodyType {
  id: string;
  name: string;
  description: string;
}

export const bodyTypes: BodyType[] = [
  { id: 'slender', name: 'Esguio', description: 'Estrutura estreita, leve' },
  { id: 'athletic', name: 'Atlético', description: 'Ombros definidos, magro' },
  { id: 'soft', name: 'Suave', description: 'Curvas suaves, relaxado' },
];
