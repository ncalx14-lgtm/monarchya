'use client';

interface AvatarProps {
  skinTone: string;
  height: number;
  bodyType: string;
  view: 'front' | 'side' | 'back';
}

/**
 * Editorial unisex avatar rendered as SVG.
 * Neutral proportions, relaxed stance, minimal features.
 * Responds to skin tone, height (scale), and body type (shoulder/hip width).
 */
export function Avatar({ skinTone, height, bodyType, view }: AvatarProps) {
  const scale = 0.8 + ((height - 150) / 40) * 0.4;
  const build = bodyType === 'slender' ? 0.9 : bodyType === 'soft' ? 1.12 : 1;
  const shoulderW = 92 * build;
  const hipW = 78 * build;
  const waistW = 64 * build;

  return (
    <svg
      viewBox="0 0 300 720"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      style={{ transform: `scale(${scale})` }}
    >
      <defs>
        <radialGradient id="studio" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#f4f1ea" />
          <stop offset="60%" stopColor="#e8e2d6" />
          <stop offset="100%" stopColor="#d8d0c0" />
        </radialGradient>
        <linearGradient id="bodyShade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="50%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* Studio backdrop */}
      <rect width="300" height="720" fill="url(#studio)" />
      {/* Floor shadow */}
      <ellipse cx="150" cy="690" rx="90" ry="14" fill="#000" opacity="0.08" />

      <g transform="translate(150, 0)">
        {view === 'front' && <FrontBody skin={skinTone} shoulderW={shoulderW} waistW={waistW} hipW={hipW} />}
        {view === 'side' && <SideBody skin={skinTone} shoulderW={shoulderW} waistW={waistW} hipW={hipW} />}
        {view === 'back' && <BackBody skin={skinTone} shoulderW={shoulderW} waistW={waistW} hipW={hipW} />}
      </g>
    </svg>
  );
}

function FrontBody({
  skin,
  shoulderW,
  waistW,
  hipW,
}: {
  skin: string;
  shoulderW: number;
  waistW: number;
  hipW: number;
}) {
  return (
    <g>
      {/* Head */}
      <ellipse cx="0" cy="78" rx="30" ry="38" fill={skin} />
      {/* Subtle facial plane — minimal, unisex */}
      <ellipse cx="0" cy="78" rx="30" ry="38" fill="url(#bodyShade)" />
      {/* Neck */}
      <rect x="-11" y="108" width="22" height="26" fill={skin} />
      {/* Torso — tapered */}
      <path
        d={`M ${-shoulderW / 2} 134
            Q ${-shoulderW / 2} 150, ${-waistW / 2 - 4} 230
            L ${-waistW / 2 - 4} 270
            Q ${-hipW / 2} 290, ${-hipW / 2} 330
            L ${hipW / 2} 330
            Q ${hipW / 2} 290, ${waistW / 2 + 4} 270
            L ${waistW / 2 + 4} 230
            Q ${shoulderW / 2} 150, ${shoulderW / 2} 134
            Z`}
        fill={skin}
      />
      <path
        d={`M ${-shoulderW / 2} 134
            Q ${-shoulderW / 2} 150, ${-waistW / 2 - 4} 230
            L ${-waistW / 2 - 4} 270
            Q ${-hipW / 2} 290, ${-hipW / 2} 330
            L ${hipW / 2} 330
            Q ${hipW / 2} 290, ${waistW / 2 + 4} 270
            L ${waistW / 2 + 4} 230
            Q ${shoulderW / 2} 150, ${shoulderW / 2} 134
            Z`}
        fill="url(#bodyShade)"
      />
      {/* Arms — relaxed, slightly away from body */}
      <path
        d={`M ${-shoulderW / 2 + 2} 138
            Q ${-shoulderW / 2 - 14} 200, ${-shoulderW / 2 - 10} 300
            L ${-shoulderW / 2 - 4} 300
            Q ${-shoulderW / 2 - 8} 200, ${-shoulderW / 2 + 6} 138 Z`}
        fill={skin}
      />
      <path
        d={`M ${shoulderW / 2 - 2} 138
            Q ${shoulderW / 2 + 14} 200, ${shoulderW / 2 + 10} 300
            L ${shoulderW / 2 + 4} 300
            Q ${shoulderW / 2 + 8} 200, ${shoulderW / 2 - 6} 138 Z`}
        fill={skin}
      />
      {/* Hands */}
      <ellipse cx={-shoulderW / 2 - 7} cy="312" rx="9" ry="13" fill={skin} />
      <ellipse cx={shoulderW / 2 + 7} cy="312" rx="9" ry="13" fill={skin} />
      {/* Legs — long, straight, relaxed stance */}
      <path
        d={`M ${-hipW / 2 + 6} 330
            L ${-hipW / 2 + 4} 660
            L ${-10} 660
            L ${-12} 330 Z`}
        fill={skin}
      />
      <path
        d={`M ${hipW / 2 - 6} 330
            L ${hipW / 2 - 4} 660
            L ${10} 660
            L ${12} 330 Z`}
        fill={skin}
      />
      {/* Feet */}
      <ellipse cx="-14" cy="672" rx="16" ry="8" fill={skin} />
      <ellipse cx="14" cy="672" rx="16" ry="8" fill={skin} />
    </g>
  );
}

function SideBody({
  skin,
  shoulderW,
  waistW,
  hipW,
}: {
  skin: string;
  shoulderW: number;
  waistW: number;
  hipW: number;
}) {
  const depth = 38;
  return (
    <g transform="translate(-depth / 2, 0)">
      {/* Head */}
      <ellipse cx="0" cy="78" rx="26" ry="34" fill={skin} />
      <ellipse cx="0" cy="78" rx="26" ry="34" fill="url(#bodyShade)" />
      {/* Neck */}
      <rect x="-9" y="106" width="18" height="28" fill={skin} />
      {/* Torso — side profile */}
      <path
        d={`M -${depth / 2} 134
            Q -${depth / 2 + 4} 200, -${depth / 2 - 2} 270
            L -${depth / 2 - 2} 330
            L ${depth / 2} 330
            Q ${depth / 2 + 6} 270, ${depth / 2} 134
            Z`}
        fill={skin}
      />
      <path
        d={`M -${depth / 2} 134
            Q -${depth / 2 + 4} 200, -${depth / 2 - 2} 270
            L -${depth / 2 - 2} 330
            L ${depth / 2} 330
            Q ${depth / 2 + 6} 270, ${depth / 2} 134
            Z`}
        fill="url(#bodyShade)"
      />
      {/* Arm — front of body */}
      <path
        d={`M ${depth / 2 - 4} 140
            Q ${depth / 2 + 2} 220, ${depth / 2 - 2} 300
            L ${depth / 2 - 10} 300
            Q ${depth / 2 - 14} 220, ${depth / 2 - 18} 140 Z`}
        fill={skin}
      />
      <ellipse cx={depth / 2 - 6} cy="312" rx="8" ry="12" fill={skin} />
      {/* Legs */}
      <path d={`M -${depth / 2 - 2} 330 L -${depth / 2 - 4} 660 L 4 660 L 6 330 Z`} fill={skin} />
      <path d={`M 6 330 L 4 660 L ${depth / 2 - 2} 660 L ${depth / 2} 330 Z`} fill={skin} />
      {/* Feet */}
      <ellipse cx="0" cy="672" rx="20" ry="8" fill={skin} />
    </g>
  );
}

function BackBody({
  skin,
  shoulderW,
  waistW,
  hipW,
}: {
  skin: string;
  shoulderW: number;
  waistW: number;
  hipW: number;
}) {
  return (
    <g>
      {/* Head — back, no features */}
      <ellipse cx="0" cy="78" rx="30" ry="38" fill={skin} />
      <ellipse cx="0" cy="78" rx="30" ry="38" fill="url(#bodyShade)" />
      {/* Neck */}
      <rect x="-11" y="108" width="22" height="26" fill={skin} />
      {/* Back torso */}
      <path
        d={`M ${-shoulderW / 2} 134
            Q ${-shoulderW / 2} 150, ${-waistW / 2 - 4} 230
            L ${-waistW / 2 - 4} 270
            Q ${-hipW / 2} 290, ${-hipW / 2} 330
            L ${hipW / 2} 330
            Q ${hipW / 2} 290, ${waistW / 2 + 4} 270
            L ${waistW / 2 + 4} 230
            Q ${shoulderW / 2} 150, ${shoulderW / 2} 134
            Z`}
        fill={skin}
      />
      <path
        d={`M ${-shoulderW / 2} 134
            Q ${-shoulderW / 2} 150, ${-waistW / 2 - 4} 230
            L ${-waistW / 2 - 4} 270
            Q ${-hipW / 2} 290, ${-hipW / 2} 330
            L ${hipW / 2} 330
            Q ${hipW / 2} 290, ${waistW / 2 + 4} 270
            L ${waistW / 2 + 4} 230
            Q ${shoulderW / 2} 150, ${shoulderW / 2} 134
            Z`}
        fill="url(#bodyShade)"
      />
      {/* Arms */}
      <path
        d={`M ${-shoulderW / 2 + 2} 138
            Q ${-shoulderW / 2 - 14} 200, ${-shoulderW / 2 - 10} 300
            L ${-shoulderW / 2 - 4} 300
            Q ${-shoulderW / 2 - 8} 200, ${-shoulderW / 2 + 6} 138 Z`}
        fill={skin}
      />
      <path
        d={`M ${shoulderW / 2 - 2} 138
            Q ${shoulderW / 2 + 14} 200, ${shoulderW / 2 + 10} 300
            L ${shoulderW / 2 + 4} 300
            Q ${shoulderW / 2 + 8} 200, ${shoulderW / 2 - 6} 138 Z`}
        fill={skin}
      />
      <ellipse cx={-shoulderW / 2 - 7} cy="312" rx="9" ry="13" fill={skin} />
      <ellipse cx={shoulderW / 2 + 7} cy="312" rx="9" ry="13" fill={skin} />
      {/* Legs */}
      <path
        d={`M ${-hipW / 2 + 6} 330
            L ${-hipW / 2 + 4} 660
            L ${-10} 660
            L ${-12} 330 Z`}
        fill={skin}
      />
      <path
        d={`M ${hipW / 2 - 6} 330
            L ${hipW / 2 - 4} 660
            L ${10} 660
            L ${12} 330 Z`}
        fill={skin}
      />
      <ellipse cx="-14" cy="672" rx="16" ry="8" fill={skin} />
      <ellipse cx="14" cy="672" rx="16" ry="8" fill={skin} />
    </g>
  );
}
