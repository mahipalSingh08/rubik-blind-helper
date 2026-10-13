export interface FiveStyleAlgDef {
  sequence?: string;
  short?: string;
  expand?: string;
  algorithm: string;
  buffer?: string;
  htm?: number;
  moves?: number;
  commutator?: string;
  basealgo?: string;
  setupmove?: string;
  inverse?: string;
  letters?: string[];
}

export interface FiveStyleAlgItem {
  sequence: string;
  commutator?: string;
  algorithm: string;
  moves: number;
  basealgo?: string;
  setupmove?: string;
  inverse?: string;
  letters?: string[];
}

// 5-Style database is powered by FastAPI + MongoDB backend due to massive size (194,760+ cases).
export const DEFAULT_5STYLE_CORNERS: Record<string, FiveStyleAlgDef> = {};
export const DEFAULT_5STYLE_EDGES: Record<string, FiveStyleAlgDef> = {};
