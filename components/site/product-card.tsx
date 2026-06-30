'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/data/types';

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-fog">
          <Image
            src={product.catalogImage}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-1200 ease-luxe group-hover:scale-[1.018]"
          />
          {product.editorial && (
            <span className="absolute left-4 top-4 text-[10px] uppercase tracking-luxe-sm text-cream/90 mix-blend-difference">
              Editorial
            </span>
          )}
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-lg text-ink md:text-xl">{product.name}</h3>
          <span className="font-sans text-sm text-ink/60">€{product.price}</span>
        </div>
        <p className="mt-1 text-[11px] uppercase tracking-luxe-sm text-ink/40">
          {product.color} · {product.material}
        </p>
      </Link>
    </motion.div>
  );
}
