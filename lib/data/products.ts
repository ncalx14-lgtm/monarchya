import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'shirt-01',
    name: 'Camisa Feminina Manga Longa Branca',
    description:
      'Uma camisa feminina de manga longa em 100% algodão, branca. Cortada com caimento relaxado, pala clássica e punhos limpos. Uma peça atemporal que se layeriza sobre alfaiataria ou usa sozinha com a mesma presença.',
    category: 'tops',
    price: 240,
    catalogImage:
      'https://images.pexels.com/photos/8217365/pexels-photo-8217365.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/8217365/pexels-photo-8217365.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8217360/pexels-photo-8217360.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8217374/pexels-photo-8217374.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/tops/shirt-01.png',
    color: 'Branco',
    material: '100% algodão',
    editorial: true,
  },
  {
    id: 'coat-02',
    name: 'Casaco Alongado Bege',
    description:
      'Um casaco feminino alongado em lã batida, gola bege. Linha longa que cai abaixo do joelho, ombro estruturado e abotoamento discreto. Desenhado para envolver sem pesar.',
    category: 'tops',
    price: 890,
    catalogImage:
      'https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2010814/pexels-photo-2010814.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/tops/coat-02.png',
    color: 'Bege',
    material: 'Lã batida',
    editorial: true,
  },
  {
    id: 'knit-03',
    name: 'Suéter Gola Alta Azul Marinho',
    description:
      'Um suéter em merino com gola alta, azul marinho. Malha fina que respira por baixo de casacos mais pesados, punhos limpos e caimento próximo ao corpo.',
    category: 'tops',
    price: 290,
    catalogImage:
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/tops/knit-03.png',
    color: 'Azul Marinho',
    material: 'Merino',
  },
  {
    id: 'trouser-04',
    name: 'Calça Wide Leg',
    description:
      'Uma calça wide leg em lã com cintura alta e perna larga. Vinco prensado, barra longa que assenta sobre o calçado. Alfaiatada para o movimento, cortada para a quietude.',
    category: 'bottoms',
    price: 320,
    catalogImage:
      'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1755384/pexels-photo-1755384.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/bottoms/trouser-04.png',
    color: 'Pedra',
    material: 'Lã',
  },
  {
    id: 'skirt-05',
    name: 'Saia Midi em Viés',
    description:
      'Uma saia midi com detalhe em viés, cintura elástica e comprimento midi. Tecido fluido que segue a linha do corpo sem marcar. Sem fechos, sem excessos.',
    category: 'bottoms',
    price: 260,
    catalogImage:
      'https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/bottoms/skirt-05.png',
    color: 'Areia',
    material: 'Tecido fluido',
  },
  {
    id: 'denim-06',
    name: 'Calça Jeans Selvedge',
    description:
      'Uma calça jeans em denim selvedge japonês, cintura média e perna reta. Índigo não lavado que desbota com o uso, barra crua. Feita para envelhecer com quem a veste.',
    category: 'bottoms',
    price: 280,
    catalogImage:
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/bottoms/denim-06.png',
    color: 'Índigo',
    material: 'Denim selvedge japonês',
  },
  {
    id: 'dress-07',
    name: 'Vestido Slip Dress Preto',
    description:
      'Um vestido slip dress em cetim preto, alças finas e costas em cowl. Caimento fluido que segue a linha do corpo. Desenhado para layerizar sobre tricô ou usar sozinho.',
    category: 'dresses',
    price: 420,
    catalogImage:
      'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/dresses/dress-07.png',
    color: 'Preto',
    material: 'Cetim',
    editorial: true,
  },
  {
    id: 'dress-08',
    name: 'Vestido Camisa Longo',
    description:
      'Um vestido camisa longo em alfaiataria, pala de botões e cinto auto. Linha longa, ombro estruturado e tecido com corpo. Nítido, arquitetónico, atemporal.',
    category: 'dresses',
    price: 380,
    catalogImage:
      'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
    fittingRoomImage: '/images/fitting-room/dresses/dress-08.png',
    color: 'Marfim',
    material: 'Alfaiataria',
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getEditorialProducts = () =>
  products.filter((p) => p.editorial);
