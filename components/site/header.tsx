'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const nav = [
  { label: 'Coleção', href: '/collection' },
  { label: 'Editorial', href: '/editorial' },
  { label: 'Provador', href: '/fitting-room' },
  { label: 'Sobre', href: '/about' },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe',
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-ink/10'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-10">
        <nav className="hidden flex-1 items-center gap-8 md:flex">
          {nav.slice(0, 2).map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href || pathname.startsWith(item.href + '/')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          href="/"
          className="font-serif text-2xl tracking-luxe-sm text-ink md:text-3xl"
          aria-label="MONARCHY"
        >
          MONARCHY
        </Link>

        <nav className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {nav.slice(2).map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              active={pathname === item.href || pathname.startsWith(item.href + '/')}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            href="/saved"
            className="text-[11px] uppercase tracking-luxe-sm text-ink/70 transition-colors hover:text-ink"
          >
            Guardados
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <nav className="flex flex-col px-6 py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 font-serif text-xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/saved" className="py-3 font-serif text-xl text-ink">
              Guardados
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'relative text-[11px] uppercase tracking-luxe-sm transition-colors duration-300',
        active ? 'text-ink' : 'text-ink/55 hover:text-ink'
      )}
    >
      {children}
      <span
        className={cn(
          'absolute -bottom-1 left-0 h-px bg-ink transition-all duration-500 ease-luxe',
          active ? 'w-full' : 'w-0'
        )}
      />
    </Link>
  );
}
