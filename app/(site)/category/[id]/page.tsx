import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { categories, getCategory } from '@/lib/data/categories';
import { getProductsByCategory } from '@/lib/data/products';
import { ProductCard } from '@/components/site/product-card';
import { Reveal } from '@/components/site/reveal';
import { ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = getCategory(params.id);
  if (!category) notFound();

  const items = getProductsByCategory(params.id);

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero banner */}
      <section className="relative h-[60svh] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="relative z-10 flex h-full items-end px-6 pb-12 md:px-10 md:pb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-cream/70">
              {category.tagline}
            </p>
            <h1 className="mt-4 font-serif text-5xl font-light text-cream md:text-7xl">
              {category.name}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="font-serif text-2xl font-light leading-relaxed text-ink md:text-3xl text-balance">
              {category.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-10 md:gap-y-20">
            {items.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <h2 className="mb-12 font-serif text-2xl font-light text-ink md:mb-16 md:text-4xl">
            Outras Categorias
          </h2>
          <div className="no-scrollbar flex gap-6 overflow-x-auto md:grid md:grid-cols-4 md:gap-8">
            {categories
              .filter((c) => c.id !== category.id)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/category/${c.id}`}
                  className="group relative block aspect-[3/4] h-[420px] w-[300px] flex-shrink-0 overflow-hidden bg-fog md:h-auto md:w-auto"
                >
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 300px, 25vw"
                    className="object-cover transition-transform duration-1200 ease-luxe group-hover:scale-[1.018]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-serif text-2xl font-light text-cream">
                      {c.name}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe-sm text-cream/70">
                      Ver <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
