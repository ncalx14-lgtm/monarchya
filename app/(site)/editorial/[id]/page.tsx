import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { editorialStories, getEditorialStory } from '@/lib/data/editorial';
import { Reveal } from '@/components/site/reveal';
import { ArrowRight } from 'lucide-react';

export function generateStaticParams() {
  return editorialStories.map((s) => ({ id: s.id }));
}

export default function EditorialStoryPage({
  params,
}: {
  params: { id: string };
}) {
  const story = getEditorialStory(params.id);
  if (!story) notFound();

  return (
    <div className="pt-16 md:pt-20">
      {/* Cover */}
      <section className="relative h-[70svh] w-full overflow-hidden">
        <Image
          src={story.cover}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="relative z-10 flex h-full items-end px-6 pb-14 md:px-10 md:pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-cream/70">
              {story.issue} · {story.date}
            </p>
            <h1 className="mt-5 font-serif text-5xl font-light text-cream md:text-8xl">
              {story.title}
            </h1>
            <p className="mt-5 max-w-lg font-sans text-sm text-cream/75">
              {story.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 py-20 md:px-10 md:py-32">
        <article className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-serif text-2xl font-light leading-relaxed text-ink md:text-3xl text-balance">
              {story.excerpt}
            </p>
          </Reveal>

          <div className="mt-16 space-y-8">
            {story.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="font-sans text-base leading-[1.8] text-ink/75 md:text-lg">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 border-t border-ink/10 pt-10">
            <Link
              href="/editorial"
              className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-ink/60 hover:text-ink"
            >
              <ArrowRight
                size={14}
                className="rotate-180 transition-transform duration-500 ease-luxe group-hover:-translate-x-1"
              />
              Voltar ao Editorial
            </Link>
          </div>
        </article>
      </section>

      {/* Fitting room CTA */}
      <section className="border-t border-ink/10 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-light text-ink md:text-5xl text-balance">
              Experimente as peças desta história.
            </h2>
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
          </Reveal>
        </div>
      </section>
    </div>
  );
}
