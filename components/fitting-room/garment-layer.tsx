'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { FittingGarment } from '@/lib/data/fitting-room';

interface GarmentLayerProps {
  garment: FittingGarment | undefined;
  view: 'front' | 'side' | 'back';
}

/**
 * Renders a garment as an SVG overlay on the avatar.
 * Each garment ID maps to a drawn silhouette. Garment data (image path,
 * name, price) comes from the centralized data file — to swap a garment's
 * visual, update its entry in lib/data/fitting-room.ts.
 */
export function GarmentLayer({ garment, view }: GarmentLayerProps) {
  return (
    <AnimatePresence mode="popLayout">
      {garment && (
        <motion.div
          key={garment.id + view}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 300 720"
            className="h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <GarmentShape id={garment.id} view={view} />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GarmentShape({ id, view }: { id: string; view: 'front' | 'side' | 'back' }) {
  const map: Record<string, React.ReactNode> = {
    'fr-shirt-01': <Shirt view={view} />,
    'fr-coat-02': <Coat view={view} />,
    'fr-knit-03': <Knit view={view} />,
    'fr-trouser-04': <Trouser view={view} />,
    'fr-skirt-05': <Skirt view={view} />,
    'fr-denim-06': <Denim view={view} />,
    'fr-dress-07': <SlipDress view={view} />,
    'fr-dress-08': <ShirtDress view={view} />,
  };
  return <>{map[id] ?? null}</>;
}

const bone = '#e8e2d4';
const ink = '#1c1a17';
const charcoal = '#3a3833';
const camel = '#a98466';
const stone = '#9a9388';
const indigo = '#2a3450';
const cognac = '#7a4a28';
const tan = '#b8916a';

function Shirt({ view }: { view: 'front' | 'side' | 'back' }) {
  if (view === 'back') {
    return (
      <g transform="translate(150,0)">
        <path d="M -48 134 Q -48 150 -40 230 L -40 270 L 40 270 L 40 230 Q 48 150 48 134 Z" fill={bone} />
        <line x1="0" y1="138" x2="0" y2="268" stroke={ink} strokeOpacity="0.08" strokeWidth="1" />
      </g>
    );
  }
  return (
    <g transform="translate(150,0)">
      <path d="M -48 134 Q -48 150 -40 230 L -40 270 L 40 270 L 40 230 Q 48 150 48 134 Z" fill={bone} />
      <path d="M -48 134 Q -48 150 -40 230 L -40 270 L 40 270 L 40 230 Q 48 150 48 134 Z" fill="#000" opacity="0.05" />
      {/* Collar */}
      <path d="M -14 134 L 0 150 L 14 134 Z" fill={bone} stroke={ink} strokeOpacity="0.1" />
      {/* Placket */}
      <line x1="0" y1="150" x2="0" y2="268" stroke={ink} strokeOpacity="0.12" strokeWidth="1.5" />
      {/* Cuffs */}
      <rect x="-52" y="296" width="14" height="20" fill={bone} stroke={ink} strokeOpacity="0.1" />
      <rect x="38" y="296" width="14" height="20" fill={bone} stroke={ink} strokeOpacity="0.1" />
    </g>
  );
}

function Knit({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <path d="M -46 134 Q -46 150 -38 220 L -38 270 L 38 270 L 38 220 Q 46 150 46 134 Z" fill={charcoal} />
      <path d="M -46 134 Q -46 150 -38 220 L -38 270 L 38 270 L 38 220 Q 46 150 46 134 Z" fill="#000" opacity="0.08" />
      {/* Roll neck */}
      <rect x="-16" y="112" width="32" height="24" rx="4" fill={charcoal} />
      <rect x="-16" y="112" width="32" height="6" fill="#000" opacity="0.1" />
      {/* Cuffs */}
      <rect x="-50" y="296" width="12" height="18" fill={charcoal} />
      <rect x="38" y="296" width="12" height="18" fill={charcoal} />
      {view === 'front' && (
        <line x1="0" y1="140" x2="0" y2="266" stroke="#000" strokeOpacity="0.06" strokeWidth="1" />
      )}
    </g>
  );
}

function Coat({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <path d="M -52 130 Q -56 160 -50 240 L -54 470 L 54 470 L 50 240 Q 56 160 52 130 Z" fill={camel} />
      <path d="M -52 130 Q -56 160 -50 240 L -54 470 L 54 470 L 50 240 Q 56 160 52 130 Z" fill="#000" opacity="0.1" />
      {/* Lapels */}
      <path d="M -16 130 L -4 200 L 0 470 L -20 470 L -28 200 Z" fill={camel} stroke={ink} strokeOpacity="0.12" />
      <path d="M 16 130 L 4 200 L 0 470 L 20 470 L 28 200 Z" fill={camel} stroke={ink} strokeOpacity="0.12" />
      {view === 'front' && (
        <>
          <line x1="0" y1="200" x2="0" y2="470" stroke={ink} strokeOpacity="0.15" strokeWidth="1" />
          <circle cx="0" cy="240" r="1.5" fill={ink} />
          <circle cx="0" cy="300" r="1.5" fill={ink} />
          <circle cx="0" cy="360" r="1.5" fill={ink} />
        </>
      )}
      {/* Sleeves */}
      <path d="M -52 134 Q -64 220 -56 320 L -44 320 Q -50 220 -40 138 Z" fill={camel} />
      <path d="M 52 134 Q 64 220 56 320 L 44 320 Q 50 220 40 138 Z" fill={camel} />
    </g>
  );
}

function Trouser({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <path d="M -40 270 L -36 660 L -8 660 L -4 270 Z" fill={stone} />
      <path d="M 40 270 L 36 660 L 8 660 L 4 270 Z" fill={stone} />
      <path d="M -40 270 L -36 660 L -8 660 L -4 270 Z" fill="#000" opacity="0.06" />
      {view === 'front' && (
        <>
          <line x1="0" y1="270" x2="0" y2="660" stroke={ink} strokeOpacity="0.1" strokeWidth="1" />
          <line x1="-8" y1="300" x2="-8" y2="650" stroke={ink} strokeOpacity="0.08" strokeWidth="0.5" />
          <line x1="8" y1="300" x2="8" y2="650" stroke={ink} strokeOpacity="0.08" strokeWidth="0.5" />
        </>
      )}
    </g>
  );
}

function Skirt({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <path d="M -40 270 L -56 470 L 56 470 L 40 270 Z" fill={ink} />
      <path d="M -40 270 L -56 470 L 56 470 L 40 270 Z" fill="#000" opacity="0.12" />
      {view === 'front' && <line x1="0" y1="276" x2="0" y2="466" stroke="#fff" strokeOpacity="0.06" strokeWidth="1" />}
    </g>
  );
}

function Denim({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <path d="M -40 270 L -36 660 L -8 660 L -4 270 Z" fill={indigo} />
      <path d="M 40 270 L 36 660 L 8 660 L 4 270 Z" fill={indigo} />
      <path d="M -40 270 L -36 660 L -8 660 L -4 270 Z" fill="#000" opacity="0.1" />
      {view === 'front' && (
        <>
          <line x1="0" y1="270" x2="0" y2="660" stroke={ink} strokeOpacity="0.25" strokeWidth="1" />
          <rect x="-12" y="270" width="24" height="6" fill={indigo} stroke={ink} strokeOpacity="0.2" />
        </>
      )}
    </g>
  );
}

function SlipDress({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      {/* Straps */}
      <rect x="-18" y="120" width="4" height="20" fill={ink} />
      <rect x="14" y="120" width="4" height="20" fill={ink} />
      {/* Column */}
      <path d="M -34 140 Q -38 200 -30 280 L -42 540 L 42 540 L 30 280 Q 38 200 34 140 Z" fill={ink} />
      <path d="M -34 140 Q -38 200 -30 280 L -42 540 L 42 540 L 30 280 Q 38 200 34 140 Z" fill="#000" opacity="0.15" />
      {view === 'back' && <path d="M -30 140 Q 0 170 30 140 L 30 280 L -30 280 Z" fill={ink} fillOpacity="0.6" />}
    </g>
  );
}

function ShirtDress({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <path d="M -46 134 Q -46 150 -40 220 L -48 540 L 48 540 L 40 220 Q 46 150 46 134 Z" fill={bone} />
      <path d="M -46 134 Q -46 150 -40 220 L -48 540 L 48 540 L 40 220 Q 46 150 46 134 Z" fill="#000" opacity="0.05" />
      {view === 'front' && (
        <>
          <path d="M -14 134 L 0 150 L 14 134 Z" fill={bone} stroke={ink} strokeOpacity="0.1" />
          <line x1="0" y1="150" x2="0" y2="538" stroke={ink} strokeOpacity="0.12" strokeWidth="1.5" />
          {/* Tie belt */}
          <rect x="-30" y="280" width="60" height="8" fill={bone} stroke={ink} strokeOpacity="0.15" />
        </>
      )}
    </g>
  );
}

function Boot({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <path d="M -22 640 L -22 686 L -2 686 L -2 640 Z" fill={ink} />
      <path d="M 2 640 L 2 686 L 22 686 L 22 640 Z" fill={ink} />
      <ellipse cx="-12" cy="690" rx="14" ry="6" fill={ink} />
      <ellipse cx="12" cy="690" rx="14" ry="6" fill={ink} />
      {view === 'side' && <rect x="-22" y="676" width="44" height="10" fill={ink} />}
    </g>
  );
}

function Loafer({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <ellipse cx="-14" cy="678" rx="16" ry="10" fill={cognac} />
      <ellipse cx="14" cy="678" rx="16" ry="10" fill={cognac} />
      <ellipse cx="-14" cy="678" rx="16" ry="10" fill="#000" opacity="0.08" />
      <ellipse cx="14" cy="678" rx="16" ry="10" fill="#000" opacity="0.08" />
      {view === 'front' && (
        <>
          <rect x="-20" y="672" width="12" height="3" fill={ink} opacity="0.3" />
          <rect x="8" y="672" width="12" height="3" fill={ink} opacity="0.3" />
        </>
      )}
    </g>
  );
}

function Bag({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      {/* Held at the side */}
      <rect x="40" y="300" width="34" height="44" rx="2" fill={tan} />
      <rect x="40" y="300" width="34" height="44" rx="2" fill="#000" opacity="0.08" />
      <path d="M 46 300 Q 60 286 74 300" stroke={tan} strokeWidth="2" fill="none" />
    </g>
  );
}

function Belt({ view }: { view: 'front' | 'side' | 'back' }) {
  return (
    <g transform="translate(150,0)">
      <rect x="-44" y="266" width="88" height="10" fill={ink} />
      <rect x="-4" y="266" width="8" height="10" fill="#c9a96a" />
    </g>
  );
}
