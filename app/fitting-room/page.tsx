'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useOutfitStore } from '@/lib/store/outfit-store';
import {
  fittingGarments,
  getGarmentsByCategory,
  skinTones,
  bodyTypes,
} from '@/lib/data/fitting-room';
import { categories } from '@/lib/data/categories';
import type { CategoryId } from '@/lib/data/types';
import { Avatar } from '@/components/fitting-room/avatar';
import { GarmentLayer } from '@/components/fitting-room/garment-layer';
import { cn } from '@/lib/utils';
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Maximize2,
  X,
  Check,
  Save,
  Trash2,
  Sparkles,
} from 'lucide-react';

export default function FittingRoomPage() {
  const {
    selected,
    selectGarment,
    removeGarment,
    clearOutfit,
    skinTone,
    setSkinTone,
    height,
    setHeight,
    bodyType,
    setBodyType,
    view,
    setView,
    zoom,
    setZoom,
    saveOutfit,
  } = useOutfitStore();

  const [activeCat, setActiveCat] = useState<CategoryId>('tops');
  const [fullscreen, setFullscreen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const garments = getGarmentsByCategory(activeCat);
  const totalPrice = Object.values(selected).reduce(
    (sum, g) => (g ? sum + g.price : sum),
    0
  );
  const skinValue = skinTones.find((s) => s.id === skinTone)?.value ?? '#d4a373';

  const handleSave = () => {
    saveOutfit(`Outfit ${new Date().toLocaleDateString()}`);
    setSaved(true);
    setTimeout(() => setSaved(false), 2400);
  };

  const handleSuggest = () => {
    const ids = ['fr-shirt-01', 'fr-trouser-04', 'fr-coat-02'];
    ids.forEach((id) => {
      const g = fittingGarments.find((x) => x.id === id);
      if (g) selectGarment(g);
    });
    setSuggestion('O Look de Estúdio — camisa, calça, casaco.');
    setTimeout(() => setSuggestion(null), 4000);
  };

  return (
    <div className="h-[100svh] w-full overflow-hidden bg-cream pt-16 md:pt-20">
      <div className="grid h-[calc(100svh-4rem)] grid-cols-1 md:grid-cols-[280px_1fr_320px] md:pt-0">
        {/* LEFT — categories, garments, outfit */}
        <aside className="no-scrollbar hidden flex-col overflow-y-auto border-r border-ink/10 md:flex">
          <div className="border-b border-ink/10 px-6 py-5">
            <p className="text-[11px] uppercase tracking-luxe text-ink/40">
              Provador Virtual
            </p>
            <h1 className="mt-2 font-serif text-2xl font-light text-ink">
              O Provador
            </h1>
          </div>

          {/* Category tabs */}
          <div className="no-scrollbar flex gap-1 overflow-x-auto border-b border-ink/10 px-4 py-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={cn(
                  'whitespace-nowrap px-3 py-1.5 text-[10px] uppercase tracking-luxe-sm transition-colors',
                  activeCat === c.id
                    ? 'bg-ink text-cream'
                    : 'text-ink/50 hover:text-ink'
                )}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Garment list */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="space-y-2">
              {garments.map((g) => {
                const isSelected = selected[g.category]?.id === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => selectGarment(g)}
                    className={cn(
                      'group flex w-full items-center gap-3 border px-3 py-2.5 text-left transition-all',
                      isSelected
                        ? 'border-ink bg-ink/5'
                        : 'border-transparent hover:border-ink/20 hover:bg-ink/[0.03]'
                    )}
                  >
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden bg-fog">
                      <GarmentThumb id={g.id} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-sans text-xs text-ink">
                        {g.name}
                      </p>
                      <p className="font-sans text-[10px] text-ink/45">
                        €{g.price}
                      </p>
                    </div>
                    {isSelected && <Check size={14} className="text-ink" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected outfit summary */}
          <div className="border-t border-ink/10 px-5 py-4">
            <p className="text-[10px] uppercase tracking-luxe-sm text-ink/40">
              Look Atual
            </p>
            <div className="mt-3 space-y-1.5">
              {Object.values(selected).length === 0 && (
                <p className="font-sans text-xs text-ink/40">
                  Nenhuma peça selecionada.
                </p>
              )}
              {Object.entries(selected).map(([cat, g]) => (
                <div
                  key={cat}
                  className="flex items-center justify-between gap-2 text-xs"
                >
                  <span className="truncate font-sans text-ink/70">
                    {g?.name}
                  </span>
                  <button
                    onClick={() => removeGarment(cat as CategoryId)}
                    className="text-ink/30 hover:text-ink"
                    aria-label="Remover"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
            {Object.values(selected).length > 0 && (
              <button
                onClick={clearOutfit}
                className="mt-3 text-[10px] uppercase tracking-luxe-sm text-ink/40 hover:text-ink"
              >
                Limpar tudo
              </button>
            )}
          </div>
        </aside>

        {/* CENTER — avatar stage */}
        <section className="relative flex flex-col bg-gradient-to-b from-cream to-sand/40">
          {/* Mobile category bar */}
          <div className="no-scrollbar flex gap-1 overflow-x-auto border-b border-ink/10 px-4 py-3 md:hidden">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className={cn(
                  'whitespace-nowrap px-3 py-1.5 text-[10px] uppercase tracking-luxe-sm',
                  activeCat === c.id ? 'bg-ink text-cream' : 'text-ink/50'
                )}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Mobile garment scroller */}
          <div className="no-scrollbar flex gap-2 overflow-x-auto border-b border-ink/10 px-4 py-3 md:hidden">
            {garments.map((g) => (
              <button
                key={g.id}
                onClick={() => selectGarment(g)}
                className={cn(
                  'flex h-14 w-14 flex-shrink-0 items-center justify-center border bg-cream',
                  selected[g.category]?.id === g.id
                    ? 'border-ink'
                    : 'border-ink/15'
                )}
              >
                <GarmentThumb id={g.id} />
              </button>
            ))}
          </div>

          {/* Stage */}
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ scale: zoom }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-full w-full max-w-[420px]">
                <Avatar
                  skinTone={skinValue}
                  height={height}
                  bodyType={bodyType}
                  view={view}
                />
                {/* Garment layers, stacked by category order */}
                {(['accessories', 'dresses', 'bottoms', 'tops', 'shoes'] as CategoryId[]).map(
                  (cat) => (
                    <GarmentLayer
                      key={cat}
                      garment={selected[cat]}
                      view={view}
                    />
                  )
                )}
              </div>
            </motion.div>

            {/* View toggle */}
            <div className="absolute left-1/2 top-6 z-10 flex -translate-x-1/2 gap-1 rounded-full border border-ink/10 bg-cream/80 px-1 py-1 backdrop-blur-md">
              {(['front', 'side', 'back'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={cn(
                    'rounded-full px-4 py-1.5 text-[10px] uppercase tracking-luxe-sm transition-colors',
                    view === v ? 'bg-ink text-cream' : 'text-ink/50 hover:text-ink'
                  )}
                >
                  {v === 'front' ? 'Frente' : v === 'side' ? 'Lado' : 'Costas'}
                </button>
              ))}
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-1 rounded-full border border-ink/10 bg-cream/80 px-1 py-1 backdrop-blur-md">
              <button
                onClick={() => setZoom(zoom + 0.1)}
                className="p-2 text-ink/60 hover:text-ink"
                aria-label="Ampliar"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={() => setZoom(zoom - 0.1)}
                className="p-2 text-ink/60 hover:text-ink"
                aria-label="Reduzir"
              >
                <ZoomOut size={16} />
              </button>
              <button
                onClick={() => setView(view === 'front' ? 'side' : view === 'side' ? 'back' : 'front')}
                className="p-2 text-ink/60 hover:text-ink"
                aria-label="Rodar"
              >
                <RotateCw size={16} />
              </button>
              <button
                onClick={() => setFullscreen(true)}
                className="p-2 text-ink/60 hover:text-ink"
                aria-label="Ecrã inteiro"
              >
                <Maximize2 size={16} />
              </button>
            </div>

            {/* Suggestion toast */}
            <AnimatePresence>
              {suggestion && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 right-6 z-10 max-w-xs border border-ink/15 bg-cream/90 px-4 py-3 backdrop-blur-md"
                >
                  <p className="font-sans text-xs text-ink">{suggestion}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* RIGHT — outfit summary, customization */}
        <aside className="no-scrollbar hidden flex-col overflow-y-auto border-l border-ink/10 md:flex">
          <div className="border-b border-ink/10 px-6 py-5">
            <p className="text-[10px] uppercase tracking-luxe-sm text-ink/40">
              Resumo do Look
            </p>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="font-serif text-3xl font-light text-ink">
                €{totalPrice}
              </span>
              <span className="text-[10px] uppercase tracking-luxe-sm text-ink/40">
                {Object.values(selected).length} peças
              </span>
            </div>
          </div>

          {/* Save outfit */}
          <div className="border-b border-ink/10 px-6 py-5">
            <button
              onClick={handleSave}
              className="group flex w-full items-center justify-center gap-2 border-y border-ink py-3 text-[10px] uppercase tracking-luxe text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {saved ? <Check size={14} /> : <Save size={14} />}
              {saved ? 'Guardado' : 'Guardar Look'}
            </button>
            <Link
              href="/saved"
              className="mt-3 block text-center text-[10px] uppercase tracking-luxe-sm text-ink/45 hover:text-ink"
            >
              Ver looks guardados
            </Link>
          </div>

          {/* Body customization */}
          <div className="border-b border-ink/10 px-6 py-5">
            <p className="text-[10px] uppercase tracking-luxe-sm text-ink/40">
              Corpo
            </p>

            {/* Skin tone */}
            <div className="mt-4">
              <p className="text-[10px] uppercase tracking-luxe-sm text-ink/50">
                Tom de Pele
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skinTones.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSkinTone(t.id)}
                    className={cn(
                      'h-8 w-8 rounded-full border transition-all',
                      skinTone === t.id
                        ? 'border-ink ring-1 ring-ink'
                        : 'border-ink/15'
                    )}
                    style={{ backgroundColor: t.value }}
                    aria-label={t.name}
                  />
                ))}
              </div>
            </div>

            {/* Height */}
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-luxe-sm text-ink/50">
                  Altura
                </p>
                <span className="font-sans text-xs text-ink/70">{height} cm</span>
              </div>
              <input
                type="range"
                min={150}
                max={190}
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="mt-2 w-full accent-ink"
              />
            </div>

            {/* Body type */}
            <div className="mt-5">
              <p className="text-[10px] uppercase tracking-luxe-sm text-ink/50">
                Tipo de Corpo
              </p>
              <div className="mt-2 space-y-1.5">
                {bodyTypes.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBodyType(b.id)}
                    className={cn(
                      'flex w-full items-center justify-between border px-3 py-2 text-left transition-all',
                      bodyType === b.id
                        ? 'border-ink bg-ink/5'
                        : 'border-ink/10 hover:border-ink/30'
                    )}
                  >
                    <span className="font-sans text-xs text-ink">{b.name}</span>
                    <span className="font-sans text-[10px] text-ink/40">
                      {b.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Style suggestions */}
          <div className="px-6 py-5">
            <p className="text-[10px] uppercase tracking-luxe-sm text-ink/40">
              Sugestões de Estilo
            </p>
            <button
              onClick={handleSuggest}
              className="group mt-3 flex w-full items-center gap-3 border border-ink/15 px-3 py-3 text-left transition-colors hover:border-ink"
            >
              <Sparkles size={14} className="text-ink/60" />
              <div>
                <p className="font-sans text-xs text-ink">O Look de Estúdio</p>
                <p className="font-sans text-[10px] text-ink/45">
                  Camisa · Calça · Casaco
                </p>
              </div>
            </button>
            <button
              onClick={() => {
                ['fr-dress-07', 'fr-knit-03'].forEach((id) => {
                  const g = fittingGarments.find((x) => x.id === id);
                  if (g) selectGarment(g);
                });
                setSuggestion('O Look de Noite — vestido slip, suéter.');
                setTimeout(() => setSuggestion(null), 4000);
              }}
              className="group mt-2 flex w-full items-center gap-3 border border-ink/15 px-3 py-3 text-left transition-colors hover:border-ink"
            >
              <Sparkles size={14} className="text-ink/60" />
              <div>
                <p className="font-sans text-xs text-ink">O Look de Noite</p>
                <p className="font-sans text-[10px] text-ink/45">
                  Vestido slip · Suéter
                </p>
              </div>
            </button>
          </div>
        </aside>
      </div>

      {/* Fullscreen mode */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-ink"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <p className="text-[11px] uppercase tracking-luxe text-cream/70">
                Ecrã inteiro
              </p>
              <button
                onClick={() => setFullscreen(false)}
                className="text-cream/70 hover:text-cream"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative flex-1">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: zoom }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-full w-full max-w-[600px]">
                  <Avatar
                    skinTone={skinValue}
                    height={height}
                    bodyType={bodyType}
                    view={view}
                  />
                  {(['accessories', 'dresses', 'bottoms', 'tops', 'shoes'] as CategoryId[]).map(
                    (cat) => (
                      <GarmentLayer key={cat} garment={selected[cat]} view={view} />
                    )
                  )}
                </div>
              </motion.div>
              <div className="absolute left-1/2 top-8 z-10 flex -translate-x-1/2 gap-1 rounded-full border border-cream/15 bg-ink/60 px-1 py-1 backdrop-blur-md">
                {(['front', 'side', 'back'] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={cn(
                      'rounded-full px-5 py-1.5 text-[10px] uppercase tracking-luxe-sm',
                      view === v ? 'bg-cream text-ink' : 'text-cream/60'
                    )}
                  >
                    {v === 'front' ? 'Frente' : v === 'side' ? 'Lado' : 'Costas'}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GarmentThumb({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 60 60" className="h-full w-full">
      <ThumbShape id={id} />
    </svg>
  );
}

function ThumbShape({ id }: { id: string }) {
  const map: Record<string, React.ReactNode> = {
    'fr-shirt-01': <rect x="14" y="14" width="32" height="34" fill="#e8e2d4" />,
    'fr-coat-02': <rect x="12" y="12" width="36" height="40" fill="#a98466" />,
    'fr-knit-03': <rect x="15" y="12" width="30" height="36" fill="#1a2740" />,
    'fr-trouser-04': (
      <>
        <rect x="22" y="14" width="7" height="34" fill="#9a9388" />
        <rect x="31" y="14" width="7" height="34" fill="#9a9388" />
      </>
    ),
    'fr-skirt-05': <path d="M 18 16 L 12 48 L 48 48 L 42 16 Z" fill="#d4c4a8" />,
    'fr-denim-06': (
      <>
        <rect x="22" y="14" width="7" height="34" fill="#2a3450" />
        <rect x="31" y="14" width="7" height="34" fill="#2a3450" />
      </>
    ),
    'fr-dress-07': <path d="M 20 14 L 14 48 L 46 48 L 40 14 Z" fill="#1c1a17" />,
    'fr-dress-08': <path d="M 18 14 L 12 48 L 48 48 L 42 14 Z" fill="#e8e2d4" />,
  };
  return <>{map[id] ?? null}</>;
}
