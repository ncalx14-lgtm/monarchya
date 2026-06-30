import Link from 'next/link';

const footerNav = [
  {
    title: 'Explorar',
    links: [
      { label: 'Coleção', href: '/collection' },
      { label: 'Editorial', href: '/editorial' },
      { label: 'Provador', href: '/fitting-room' },
      { label: 'Looks Guardados', href: '/saved' },
    ],
  },
  {
    title: 'Casa',
    links: [
      { label: 'Sobre', href: '/about' },
      { label: 'Atelier', href: '/about' },
      { label: 'Sustentabilidade', href: '/about' },
      { label: 'Contacto', href: '/about' },
    ],
  },
  {
    title: 'Apoio',
    links: [
      { label: 'Envios', href: '/about' },
      { label: 'Devoluções', href: '/about' },
      { label: 'Guia de Tamanhos', href: '/fitting-room' },
      { label: 'Perguntas', href: '/about' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-serif text-3xl tracking-luxe-sm text-ink md:text-4xl"
            >
              MONARCHY
            </Link>
            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-ink/60">
              Uma plataforma digital de moda premium. Uma experiência editorial
              centrada no provador virtual.
            </p>
            <p className="mt-8 text-[11px] uppercase tracking-luxe-sm text-ink/40">
              Outono / Inverno 2026
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] uppercase tracking-luxe-sm text-ink/40">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm text-ink/70 transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-luxe-sm text-ink/40">
            © 2026 Monarchy. Todos os direitos reservados.
          </p>
          <p className="text-[11px] uppercase tracking-luxe-sm text-ink/40">
            Desenhado em estúdio. Feito para ser vestido.
          </p>
        </div>
      </div>
    </footer>
  );
}
