export type Floor = 'text' | 'multimedia' | 'entwicklung';

export type BonusSize = 'klein' | 'mittel' | 'groß';

export interface BoulevardPitch {
  id: string;
  floor: 'text' | 'multimedia';
  headline: string;
  /** 1 (investigativ) – 5 (Boulevard). Verdeckt im Spiel, erst nach Veröffentlichung sichtbar. */
  boulevardGrade: number;
  /** 1–5, benötigtes Skill-Level der zuständigen Rolle. Immer sichtbar. */
  effort: number;
}

export interface EntwicklungPitch {
  id: string;
  floor: 'entwicklung';
  headline: string;
  bonusSize: BonusSize;
  effort: number;
}

export type Pitch = BoulevardPitch | EntwicklungPitch;

export interface Employee {
  id: string;
  name: string;
  species: string;
  /** 1–5, einheitlicher Skill-Wert. */
  skill: number;
}
