'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useOutfitStore } from '@/lib/store/outfit-store';
import { Reveal } from '@/components/site/reveal';
import { Trash2, ArrowRight } from 'lucide-react';

export default function SavedOutfitsPage() {
  const router = useRouter();
  const { savedOutfits, deleteOutfit, loadOutfit } = useOutfitStore();

  const handleLoad = (id: string) => {
    loadOutfit(id);
    router.push('/fitting-room');
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              O Guarda-Roupa
            </p>
            <h1 className="mt-6 font-serif text-5xl font-light text-ink md:text-7xl">
              Looks Guardados
            </h1>
            <p className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-ink/55">
              Looks que compôs no provador. Regresse a qualquer um deles,
              carregue-o de volta no provador ou remova-o.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1600px]">
          {savedOutfits.length === 0 ? (
            <Reveal>
              <div className="border border-ink/10 px-6 py-24 text-center">
                <p className="font-serif text-2xl font-light text-ink/50">
                  Sem looks guardados ainda.
                </p>
                <p className="mt-4 font-sans text-sm text-ink/45">
                  Componha um look no provador e guarde-o para o ver aqui.
                </p>
                <Link
                  href="/fitting-room"
                  className="group mt-10 inline-flex items-center gap-3 border-b border-ink pb-2 text-[11px] uppercase tracking-luxe text-ink"
                >
                  Entrar no provador
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              {savedOutfits.map((outfit, i) => {
                const total = Object.values(outfit.garments).reduce(
                  (s, g) => (g ? s + g.price : s),
                  0
                );
                return (
                  <Reveal key={outfit.id} delay={i * 0.06}>
                    <div className="group border border-ink/10 bg-cream p-6 transition-colors hover:border-ink/25 md:p-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-2xl font-light text-ink">
                            {outfit.name}
                          </h3>
                          <p className="mt-1 text-[10px] uppercase tracking-luxe-sm text-ink/40">
                            {new Date(outfit.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteOutfit(outfit.id)}
                          className="text-ink/30 transition-colors hover:text-ink"
                          aria-label="Eliminar look"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-6 space-y-2">
                        {Object.entries(outfit.garments).map(([cat, g]) => (
                          <div
                            key={cat}
                            className="flex items-center justify-between border-b border-ink/5 pb-2 text-sm"
                          >
                            <span className="font-sans text-ink/70">
                              {g?.name}
                            </span>
                            <span className="font-sans text-xs text-ink/45">
                              €{g?.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="font-serif text-xl text-ink">
                          €{total}
                        </span>
                        <button
                          onClick={() => handleLoad(outfit.id)}
                          className="group/btn inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe-sm text-ink"
                        >
                          Carregar no provador
                          <ArrowRight
                            size={12}
                            className="transition-transform duration-500 ease-luxe group-hover/btn:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
