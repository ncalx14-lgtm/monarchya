'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CategoryId } from '@/lib/data/types';
import type { FittingGarment } from '@/lib/data/fitting-room';

export interface SavedOutfit {
  id: string;
  name: string;
  createdAt: number;
  garments: Partial<Record<CategoryId, FittingGarment>>;
  skinTone: string;
  height: number;
  bodyType: string;
}

interface OutfitState {
  selected: Partial<Record<CategoryId, FittingGarment>>;
  skinTone: string;
  height: number;
  bodyType: string;
  view: 'front' | 'side' | 'back';
  zoom: number;
  savedOutfits: SavedOutfit[];
  selectGarment: (garment: FittingGarment) => void;
  removeGarment: (category: CategoryId) => void;
  clearOutfit: () => void;
  setSkinTone: (tone: string) => void;
  setHeight: (h: number) => void;
  setBodyType: (b: string) => void;
  setView: (v: 'front' | 'side' | 'back') => void;
  setZoom: (z: number) => void;
  saveOutfit: (name: string) => void;
  deleteOutfit: (id: string) => void;
  loadOutfit: (id: string) => void;
}

export const useOutfitStore = create<OutfitState>()(
  persist(
    (set, get) => ({
      selected: {},
      skinTone: 'sand',
      height: 170,
      bodyType: 'athletic',
      view: 'front',
      zoom: 1,
      savedOutfits: [],
      selectGarment: (garment) =>
        set((state) => ({
          selected: { ...state.selected, [garment.category]: garment },
        })),
      removeGarment: (category) =>
        set((state) => {
          const next = { ...state.selected };
          delete next[category];
          return { selected: next };
        }),
      clearOutfit: () => set({ selected: {} }),
      setSkinTone: (tone) => set({ skinTone: tone }),
      setHeight: (h) => set({ height: h }),
      setBodyType: (b) => set({ bodyType: b }),
      setView: (v) => set({ view: v }),
      setZoom: (z) => set({ zoom: Math.min(1.6, Math.max(0.7, z)) }),
      saveOutfit: (name) => {
        const state = get();
        const outfit: SavedOutfit = {
          id: `outfit-${Date.now()}`,
          name: name || `Outfit ${state.savedOutfits.length + 1}`,
          createdAt: Date.now(),
          garments: { ...state.selected },
          skinTone: state.skinTone,
          height: state.height,
          bodyType: state.bodyType,
        };
        set({ savedOutfits: [outfit, ...state.savedOutfits] });
      },
      deleteOutfit: (id) =>
        set((state) => ({
          savedOutfits: state.savedOutfits.filter((o) => o.id !== id),
        })),
      loadOutfit: (id) => {
        const outfit = get().savedOutfits.find((o) => o.id === id);
        if (!outfit) return;
        set({
          selected: outfit.garments,
          skinTone: outfit.skinTone,
          height: outfit.height,
          bodyType: outfit.bodyType,
        });
      },
    }),
    {
      name: 'monarchy-outfit',
    }
  )
);
