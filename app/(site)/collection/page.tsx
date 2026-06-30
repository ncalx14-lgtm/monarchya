'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { products } from '@/lib/data/products';
import { categories } from '@/lib/data/categories';
import { ProductCard } from '@/components/site/product-card';
import { Reveal } from '@/components/site/reveal';
import type { CategoryId } from '@/lib/data/types';
import { cn } from '@/lib/utils';

type Filter = 'all' | CategoryId;
type Sort = 'curated' | 'price-asc' | 'price-desc';

export default function CollectionPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<Sort>('curated');

  const list = useMemo(() => {
    let l = filter === 'all' ? products : products.filter((p) => p.category === filter);
    if (sort === 'price-asc') l = [...l].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') l = [...l].sort((a, b) => b.price - a.price);
    return l;
  }, [filter, sort]);

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              Outono / Inverno 2026
            </p>
            <h1 className="mt-6 font-serif text-5xl font-light text-ink md:text-7xl">
              A Coleção
            </h1>
            <p className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-ink/55">
              Doze peças, cortadas uma vez. Cada peça é desenhada para ser
              layerizada, vivida e à qual se regressa. Não há aqui estação —
              apenas tecido, forma e o corpo entre eles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 border-y border-ink/10 bg-cream/85 backdrop-blur-md md:top-20">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="no-scrollbar flex gap-6 overflow-x-auto">
            <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>
              Tudo
            </FilterButton>
            {categories.map((c) => (
              <FilterButton
                key={c.id}
                active={filter === c.id}
                onClick={() => setFilter(c.id)}
              >
                {c.name}
              </FilterButton>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-luxe-sm text-ink/40">
              Ordenar
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="border-b border-ink/20 bg-transparent pb-1 text-[11px] uppercase tracking-luxe-sm text-ink focus:outline-none"
            >
              <option value="curated">Curadoria</option>
              <option value="price-asc">Preço — Baixo</option>
              <option value="price-desc">Preço — Alto</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-10 md:gap-y-20">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          {list.length === 0 && (
            <p className="py-20 text-center font-serif text-2xl text-ink/40">
              Sem peças nesta categoria ainda.
            </p>
          )}
        </div>
      </section>

      {/* Fitting room CTA */}
      <section className="border-t border-ink/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-light text-ink md:text-5xl text-balance">
              Veja estas peças no corpo.
            </h2>
            <Link
              href="/fitting-room"
              className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-2 text-[11px] uppercase tracking-luxe text-ink"
            >
              Entrar no provador
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'whitespace-nowrap pb-1 text-[11px] uppercase tracking-luxe-sm transition-colors',
        active ? 'text-ink border-b border-ink' : 'text-ink/45 hover:text-ink'
      )}
    >
      {children}
    </button>
  );
}
