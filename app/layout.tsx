import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MONARCHY — Moda Editorial',
  description:
    'MONARCHY é uma plataforma digital de moda premium e uma experiência editorial centrada no provador virtual.',
  openGraph: {
    title: 'MONARCHY — Moda Editorial',
    description:
      'Uma experiência de moda digital premium centrada no provador virtual.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
