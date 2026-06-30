import type { EditorialStory } from './types';

export const editorialStories: EditorialStory[] = [
  {
    id: 'quiet-power',
    title: 'Poder Silencioso',
    subtitle: 'Um estudo em contenção',
    excerpt:
      'Numa época definida pelo ruído, regressamos à peça como objeto — o seu peso, a sua queda, o seu silêncio.',
    issue: 'Edição 04',
    date: 'Novembro 2026',
    cover:
      'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=2000',
    body: [
      'Há um tipo de luxo que não se anuncia. Encontra-se no peso de um casaco de lã seguro entre dois dedos, na forma como uma coluna de seda cai sem instrução, no som suave de uma bota de couro num chão de pedra.',
      'Para o Outono / Inverno, a MONARCHY regressa aos primeiros princípios. Retirámos o ornamento, o logótipo e o excesso. O que resta é a forma — e o corpo que lhe dá propósito.',
      'A coleção constrói-se em torno de uma única ideia: a roupa deve manter o seu próprio silêncio. Um casaco que não precisa de ser explicado. Uma calça que cai como a água cai. Um vestido que conhece a sua própria forma.',
      'Fotografadas numa única tarde num estúdio emprestado, com luz natural e sem retoque, estas imagens são um registo honesto do tecido, da luz e do corpo entre eles.',
    ],
  },
  {
    id: 'form-and-shadow',
    title: 'Forma e Sombra',
    subtitle: 'Alfaiataria esculpida',
    excerpt:
      'A alfaiataria não é decoração. É arquitetura para o corpo, desenhada em tecido.',
    issue: 'Edição 03',
    date: 'Setembro 2026',
    cover:
      'https://images.pexels.com/photos/1973850/pexels-photo-1973850.jpeg?auto=compress&cs=tinysrgb&w=2000',
    body: [
      'Um casaco é uma estrutura antes de ser uma peça. O ombro é uma viga; a pala é uma parede; a gola é uma linha desenhada em relevo.',
      'Nesta edição examinamos o esqueleto da alfaiataria — as camadas internas que dão postura a um casaco, a prensagem que dá vinco a uma calça, a costura à mão que permite a uma manga mover.',
      'Cada peça é fotografada contra uma única fonte de luz, para que a sombra se torne parte do design. A peça não é separada do espaço que ocupa.',
    ],
  },
  {
    id: 'the-second-skin',
    title: 'A Segunda Pele',
    subtitle: 'Tricô em primeiro plano',
    excerpt:
      'O tricô é a camada mais íntima. É a peça que toca o corpo primeiro.',
    issue: 'Edição 02',
    date: 'Julho 2026',
    cover:
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=2000',
    body: [
      'Um tricô de malha fina é uma segunda pele. Regista a temperatura do corpo, o movimento do braço, a forma do ombro que o usou ontem.',
      'Trabalhamos com fiação no norte de Itália que fia lã há quatro gerações. O merino desta coleção é rastreável até um único rebanho.',
      'Usado junto, um bom tricô desaparece. Esquece-se que lá está. Esse é o ponto.',
    ],
  },
];

export const getEditorialStory = (id: string) =>
  editorialStories.find((s) => s.id === id);
