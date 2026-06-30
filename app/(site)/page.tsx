'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { heroSlides } from '@/lib/data/hero';
import { products, getEditorialProducts } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import { ProductCard } from '@/components/site/product-card';
import { Reveal } from '@/components/site/reveal';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const featured = products.slice(0, 6);
  const editorial = getEditorialProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-ink">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[slide].image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/60" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-10 md:pb-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <p className="text-[11px] uppercase tracking-luxe text-cream/70">
                {heroSlides[slide].eyebrow}
              </p>
              <h1 className="mt-5 font-serif text-5xl font-light leading-[0.95] text-cream md:text-8xl">
                {heroSlides[slide].title}
              </h1>
              <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-cream/75 md:text-base">
                {heroSlides[slide].statement}
              </p>
              <Link
                href={heroSlides[slide].link}
                className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-cream"
              >
                <span className="border-b border-cream/40 pb-1 transition-colors group-hover:border-cream">
                  Descobrir
                </span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* slide indicators */}
        <div className="absolute bottom-10 right-6 z-10 flex gap-3 md:right-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className="h-px w-10 bg-cream/30 transition-all duration-500"
              style={{ backgroundColor: i === slide ? 'rgba(255,255,255,0.9)' : undefined, height: i === slide ? '2px' : undefined }}
            />
          ))}
        </div>
      </section>

      {/* Editorial statement */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              A Casa Monarchy
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-serif text-3xl font-light leading-[1.15] text-ink md:text-6xl text-balance">
              A roupa deve manter o seu próprio silêncio. Um casaco que não
              precisa de ser explicado. Um vestido que conhece a sua própria
              forma.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-10 max-w-xl font-sans text-sm leading-relaxed text-ink/55">
              Desenhamos para o corpo em quietude e em movimento. Cada peça é
              cortada uma vez, considerada, e feita para ser vestida durante
              anos em vez de estações.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-12 flex items-end justify-between md:mb-16">
              <div>
                <p className="text-[11px] uppercase tracking-luxe text-ink/40">
                  Seleção
                </p>
                <h2 className="mt-4 font-serif text-3xl font-light text-ink md:text-5xl">
                  Peças em Destaque
                </h2>
              </div>
              <Link
                href="/collection"
                className="group hidden items-center gap-3 text-[11px] uppercase tracking-luxe text-ink/60 hover:text-ink md:inline-flex"
              >
                Ver tudo
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-10 md:gap-y-20">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Campaign — full bleed */}
      <section className="relative h-[80svh] w-full overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/1973850/pexels-photo-1973850.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Campanha Forma e Sombra"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <Reveal>
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-luxe text-cream/70">
                A Campanha de Outono
              </p>
              <h2 className="mt-6 font-serif text-4xl font-light text-cream md:text-7xl">
                Forma &amp; Sombra
              </h2>
              <Link
                href="/editorial"
                className="group mt-10 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-cream"
              >
                <span className="border-b border-cream/40 pb-1 transition-colors group-hover:border-cream">
                  Ler o editorial
                </span>
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Virtual fitting room CTA */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-fog">
              <Image
                src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Provador virtual"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              O Provador Virtual
            </p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] text-ink md:text-6xl text-balance">
              Vestir sem tocar.
            </h2>
            <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-ink/60">
              Componha uma silhueta num avatar editorial. Layerize topos,
              fundos, vestidos, calçado e acessórios. Ajuste o corpo. Guarde
              o look. Regresse a ele mais tarde.
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
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-ink/10 px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <h2 className="mb-16 font-serif text-3xl font-light text-ink md:mb-24 md:text-5xl">
              Categorias
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
            {categories.map((cat, i) => (
              <Reveal key={cat.id} delay={(i % 2) * 0.1}>
                <Link
                  href={`/category/${cat.id}`}
                  className="group relative block aspect-[16/10] overflow-hidden bg-fog"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.018]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 md:p-10">
                    <p className="text-[11px] uppercase tracking-luxe text-cream/70">
                      {cat.tagline}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl font-light text-cream md:text-4xl">
                      {cat.name}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial preview */}
      <section className="border-t border-ink/10 px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="mb-16 flex items-end justify-between md:mb-24">
              <h2 className="font-serif text-3xl font-light text-ink md:text-5xl">
                Editorial
              </h2>
              <Link
                href="/editorial"
                className="group hidden items-center gap-3 text-[11px] uppercase tracking-luxe text-ink/60 hover:text-ink md:inline-flex"
              >
                Todas as histórias
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {editorial.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <Link href={`/product/${p.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-fog">
                    <Image
                      src={p.catalogImage}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-1200 ease-luxe group-hover:scale-[1.018]"
                    />
                  </div>
                  <p className="mt-5 text-[11px] uppercase tracking-luxe text-ink/40">
                    Editorial
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-ink">{p.name}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
