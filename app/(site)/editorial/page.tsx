import Link from 'next/link';
import Image from 'next/image';
import { editorialStories } from '@/lib/data/editorial';
import { Reveal } from '@/components/site/reveal';
import { ArrowRight } from 'lucide-react';

export default function EditorialPage() {
  const [feature, ...rest] = editorialStories;

  return (
    <div className="pt-16 md:pt-20">
      {/* Header */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              O Diário Monarchy
            </p>
            <h1 className="mt-6 font-serif text-5xl font-light text-ink md:text-7xl">
              Editorial
            </h1>
            <p className="mt-8 max-w-xl font-sans text-sm leading-relaxed text-ink/55">
              Notas longas sobre tecido, forma e o corpo. Publicadas em
              edições limitadas, impressas em papel, arquivadas aqui.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature story */}
      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <Link href={`/editorial/${feature.id}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden bg-fog">
                <Image
                  src={feature.cover}
                  alt={feature.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-1400 ease-luxe group-hover:scale-[1.018]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-14">
                  <p className="text-[11px] uppercase tracking-luxe text-cream/70">
                    {feature.issue} · {feature.date}
                  </p>
                  <h2 className="mt-4 font-serif text-4xl font-light text-cream md:text-7xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 max-w-md font-sans text-sm text-cream/75">
                    {feature.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-cream">
                    Ler
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Story grid */}
      <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {rest.map((story, i) => (
              <Reveal key={story.id} delay={i * 0.1}>
                <Link href={`/editorial/${story.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-fog">
                    <Image
                      src={story.cover}
                      alt={story.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1200 ease-luxe group-hover:scale-[1.018]"
                    />
                  </div>
                  <p className="mt-6 text-[11px] uppercase tracking-luxe text-ink/40">
                    {story.issue} · {story.date}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl">
                    {story.title}
                  </h3>
                  <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-ink/55">
                    {story.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-luxe text-ink/60 group-hover:text-ink">
                    Ler
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
