import corner5 from './corner5.json';
import edge5 from './edge5.json';

export interface FiveStyleAlgDef {
  short?: string;
  expand?: string;
  algorithm: string;
  buffer: string;
  htm?: number;
}

export const DEFAULT_5STYLE_CORNERS: Record<string, FiveStyleAlgDef> = corner5 as unknown as Record<string, FiveStyleAlgDef>;
export const DEFAULT_5STYLE_EDGES: Record<string, FiveStyleAlgDef> = edge5 as unknown as Record<string, FiveStyleAlgDef>;
