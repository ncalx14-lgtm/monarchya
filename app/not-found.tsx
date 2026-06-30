import Link from 'next/link';
import { SiteHeader } from '@/components/site/header';
import { SiteFooter } from '@/components/site/footer';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-luxe text-ink/40">
            Erro 404
          </p>
          <h1 className="mt-6 font-serif text-6xl font-light text-ink md:text-9xl">
            Não Encontrado
          </h1>
          <p className="mx-auto mt-8 max-w-md font-sans text-sm leading-relaxed text-ink/55">
            A página que procura foi movida, removida ou nunca existiu.
            Regresse à coleção ou entre no provador.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 border-b border-ink pb-2 text-[11px] uppercase tracking-luxe text-ink"
            >
              Voltar ao início
              <ArrowRight
                size={14}
                className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/fitting-room"
              className="text-[11px] uppercase tracking-luxe text-ink/50 hover:text-ink"
            >
              Provador
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
