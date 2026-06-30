import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/site/reveal';
import { ArrowRight } from 'lucide-react';

const principles = [
  {
    n: '01',
    title: 'Contenção',
    body: 'Removemos antes de adicionar. Uma peça está acabada quando nada mais pode ser retirado.',
  },
  {
    n: '02',
    title: 'Material',
    body: 'Começamos pelo tecido. Lã do norte de Itália, algodão da Anatólia, couro curtido lentamente.',
  },
  {
    n: '03',
    title: 'Permanência',
    body: 'Desenhamos contra a estação. Um casaco deve sobreviver à tendência que o nomeou.',
  },
  {
    n: '04',
    title: 'O Corpo',
    body: 'Cada peça é cortada para um corpo em movimento — e para a quietude que se segue.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[70svh] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="O atelier Monarchy"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex h-full items-end px-6 pb-14 md:px-10 md:pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-cream/70">
              A Casa
            </p>
            <h1 className="mt-5 font-serif text-5xl font-light text-cream md:text-8xl">
              Sobre a Monarchy
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="font-serif text-3xl font-light leading-[1.2] text-ink md:text-5xl text-balance">
              A Monarchy é uma plataforma digital de moda premium. Não somos
              um retalhista. Somos uma experiência editorial centrada no
              provador virtual — um lugar para compor, considerar e ao qual
              regressar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <h2 className="mb-16 font-serif text-3xl font-light text-ink md:mb-24 md:text-5xl">
              Quatro Princípios
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="h-full bg-cream p-10 md:p-14">
                  <span className="font-serif text-2xl text-ink/30">{p.n}</span>
                  <h3 className="mt-6 font-serif text-2xl font-light text-ink md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-ink/60">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier image */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden bg-fog">
              <Image
                src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=2000"
                alt="Atelier"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The fitting room */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              O Provador Virtual
            </p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] text-ink md:text-6xl text-balance">
              Uma nova forma de vestir.
            </h2>
            <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-ink/60">
              Construímos o provador porque a roupa deve ser considerada
              antes de ser possuída. Componha uma silhueta num avatar editorial
              unissexo. Layerize, ajuste, guarde. Regresse ao look quando
              estiver pronto. Não há carrinho nem checkout — apenas o ato de
              vestir.
            </p>
            <Link
              href="/fitting-room"
              className="group mt-12 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-[11px] uppercase tracking-luxe text-ink"
            >
              Entrar no provador
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden bg-fog">
              <Image
                src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Fitting room"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-ink/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              Contacto
            </p>
            <h2 className="mt-6 font-serif text-3xl font-light text-ink md:text-5xl">
              studio@monarchy.fashion
            </h2>
            <p className="mt-6 font-sans text-sm text-ink/55">
              Para imprensa, colaborações e visitas ao atelier.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
