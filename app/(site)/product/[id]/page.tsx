import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { products, getProduct } from '@/lib/data/products';
import { getCategory } from '@/lib/data/categories';
import { ProductCard } from '@/components/site/product-card';
import { Reveal } from '@/components/site/reveal';
import { ProductActions } from './product-actions';
import { ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <section className="px-6 py-8 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm text-ink/40">
            <Link href="/collection" className="hover:text-ink">
              Coleção
            </Link>
            <span>/</span>
            <Link href={`/category/${product.category}`} className="hover:text-ink">
              {category?.name}
            </Link>
            <span>/</span>
            <span className="text-ink/70">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Main — gallery + sticky info */}
      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {product.gallery.map((img, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div
                    className={`relative overflow-hidden bg-fog ${
                      i === 0 ? 'aspect-[3/4] md:col-span-2' : 'aspect-[3/4]'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sticky info */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <Reveal>
                <p className="text-[11px] uppercase tracking-luxe text-ink/40">
                  {category?.name}
                </p>
                <h1 className="mt-4 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-6 font-sans text-lg text-ink/70">
                  €{product.price}
                </p>

                <div className="mt-10 space-y-6 border-t border-ink/10 pt-8">
                  <Detail label="Cor" value={product.color} />
                  <Detail label="Material" value={product.material} />
                  <Detail label="Referência" value={product.id.toUpperCase()} />
                </div>

                <p className="mt-10 font-sans text-sm leading-relaxed text-ink/60">
                  {product.description}
                </p>

                {/* Primary CTA — fitting room, no cart */}
                <ProductActions productId={product.id} />

                <div className="mt-10 border-t border-ink/10 pt-8">
                  <h3 className="text-[11px] uppercase tracking-luxe-sm text-ink/40">
                    Notas
                  </h3>
                  <ul className="mt-4 space-y-2 font-sans text-sm text-ink/60">
                    <li>— Desenhado em estúdio, feito em edições limitadas.</li>
                    <li>— Cortado para layerizar. Tamanho fiel.</li>
                    <li>— Sem carrinho, sem checkout. Experimente no provador.</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1600px]">
            <div className="mb-12 flex items-end justify-between md:mb-16">
              <h2 className="font-serif text-3xl font-light text-ink md:text-4xl">
                Também em {category?.name}
              </h2>
              <Link
                href={`/category/${product.category}`}
                className="group hidden items-center gap-3 text-[11px] uppercase tracking-luxe text-ink/60 hover:text-ink md:inline-flex"
              >
                Ver tudo
                <ArrowRight
                  size={14}
                  className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 md:gap-x-10 md:gap-y-20">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="text-[11px] uppercase tracking-luxe-sm text-ink/40">
        {label}
      </span>
      <span className="font-sans text-sm text-ink">{value}</span>
    </div>
  );
}
