'use client';

import { useRouter } from 'next/navigation';
import { useOutfitStore } from '@/lib/store/outfit-store';
import { fittingGarments } from '@/lib/data/fitting-room';
import { ArrowRight } from 'lucide-react';

export function ProductActions({ productId }: { productId: string }) {
  const router = useRouter();
  const selectGarment = useOutfitStore((s) => s.selectGarment);

  const handleTry = () => {
    const garment = fittingGarments.find((g) => g.id === `fr-${productId}`);
    if (garment) selectGarment(garment);
    router.push('/fitting-room');
  };

  return (
    <div className="mt-10">
      <button
        onClick={handleTry}
        className="group flex w-full items-center justify-between border-y border-ink py-5 text-[11px] uppercase tracking-luxe text-ink transition-colors hover:bg-ink hover:text-cream"
      >
        <span>Experimentar no Provador</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
        />
      </button>
      <p className="mt-4 text-center text-[11px] uppercase tracking-luxe-sm text-ink/40">
        Sem carrinho. Sem checkout. Apenas o provador.
      </p>
    </div>
  );
}
