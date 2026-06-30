import type { Category } from './types';

export const categories: Category[] = [
  {
    id: 'tops',
    name: 'Topos',
    tagline: 'Camisas, tricô, casacos',
    description:
      'Camadas pensadas em algodão, merino e lã batida. Cortadas perto do corpo, nunca apertadas.',
    image:
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'bottoms',
    name: 'Fundos',
    tagline: 'Calças, saias, denim',
    description:
      'Linhas arquitetónicas e volumes generosos. Calças que caem sem esforço.',
    image:
      'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'dresses',
    name: 'Vestidos',
    tagline: 'Slip, camisa, alfaiataria',
    description:
      'Slip dresses fluidos e vestidos camisa estruturados. Desenhados para mover com quem os usa.',
    image:
      'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'shoes',
    name: 'Calçado',
    tagline: 'Botas, loafers, mules',
    description:
      'Silhuetas assentes em couro e camurça. Peso silencioso por baixo da barra.',
    image:
      'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'accessories',
    name: 'Acessórios',
    tagline: 'Bolsas, cintos, objetos',
    description:
      'Escultura funcional. Peças que completam uma silhueta sem se anunciar.',
    image:
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export const getCategory = (id: string) =>
  categories.find((c) => c.id === id);
