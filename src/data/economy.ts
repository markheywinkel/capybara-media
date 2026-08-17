/**
 * Wirtschafts-Konstanten aus docs/capybara-media-wirtschaftsmodell.xlsx (Sheet "Annahmen").
 * Alle Werte sind Platzhalter aus dem Balance-Test, keine finalen Werte (s. Design-Dok Abschnitt 5).
 * Aktuell nur für die Text-Etage kalibriert.
 */
export const ECONOMY = {
  startMoney: 500,
  startReach: 100,
  startReputation: 50,
  startSubscribers: 20,

  pricePerSubscriber: 2,
  /** Werbepreis pro Reichweiten-Einheit bei Reputation = 100. */
  baseAdPricePerReach: 0.05,
  /** Anteil der Reichweite, der potenziell Abo wird, bei Reputation = 100. */
  conversionRateBase: 0.3,
  /** Trägheit: wie schnell sich die Abo-Zahl an ihr Ziel anpasst. */
  subscriberAdjustmentRate: 0.15,

  /** Anteil der Reichweite, der täglich ohne neue Story verloren geht. */
  reachDecayPerDay: 0.03,
  /** Zieht Reputation pro Tag leicht Richtung 50 zurück. */
  reputationMeanReversionRate: 0.05,

  /** Reichweitengewinn einer Durchschnitts-Story (Boulevard-Grad 3). */
  baseReachGainPerStory: 20,
  /** Wie stark Grad 5 vs. Grad 3 die Reichweite erhöht. */
  boulevardReachBonusFactor: 0.15,
  /** Reputationsverlust pro Grad-Punkt über 3. */
  boulevardReputationMalusFactor: 1.5,

  salaryPerSkillPointPerDay: 8,
  floorFixedCostPerDay: { text: 15 },
  reachInfraCostPerUnit: 0.01,

  /** Gleitender Durchschnitt der letzten N veröffentlichten Grade zur Monotonie-Messung. */
  varietyWindowDays: 5,
  varietyBonusFactorReach: 0.5,
  varietyBonusFactorReputation: 2.5,
  /** Erwartete "gesunde" Abweichung — darunter Monotonie-Malus, darüber Bonus. */
  varietyReferenceValue: 1,
} as const;

/** Basisdauer der Text-Etage bei Vollbesetzung, in Tagen. */
export const TEXT_FLOOR_BASE_DAYS = 1;
export const TEXT_FLOOR_SLOTS = 3;

/** Erste ENTRY_POOL_DAYS Spieltage: nur Pitches mit Aufwand 1-2 (verhindert Frühphasen-Frustration). */
export const ENTRY_POOL_DAYS = 7;

/**
 * Besetzungs-Multiplikator auf die Basisdauer (s. Design-Dok Abschnitt 2).
 * Exakte Werte laut Design-Dok: 3/3 ×1, 2/3 ×1,5, 1/3 ×2.
 */
export function staffingMultiplier(filledSlots: number, totalSlots: number): number {
  if (filledSlots >= totalSlots) return 1;
  if (filledSlots === 2) return 1.5;
  if (filledSlots === 1) return 2;
  return Infinity; // 0 besetzt: keine Produktion möglich
}

/**
 * Skill-Lücke-Multiplikator: +25% Dauer pro Skill-Punkt, den der Team-Durchschnitt
 * unter dem Aufwand der Pitch liegt. Wirkt nur auf Dauer, nicht auf Ergebnisstärke.
 */
export function skillGapMultiplier(avgSkill: number, effort: number): number {
  const gap = Math.max(0, effort - avgSkill);
  return 1 + 0.25 * gap;
}

export interface DailyEconomyInput {
  reach: number;
  reputation: number;
  subscribers: number;
  money: number;
  /** Boulevard-Grad der heute veröffentlichten Story, oder null wenn heute nichts veröffentlicht wurde. */
  publishedGrade: number | null;
  /** |heutiger Grad - gleitender Ø der letzten N Tage|, nur relevant wenn publishedGrade gesetzt ist. */
  variety: number;
  /** Gehalts-Summe für die heute besetzten Slots (Skill-Punkte × Gehalt/Skill-Punkt, aufsummiert). */
  totalSkillPoints: number;
  floorFixedCost: number;
}

export interface DailyEconomyOutput {
  reach: number;
  reputation: number;
  subscribers: number;
  adRevenue: number;
  subscriptionRevenue: number;
  costs: number;
  profit: number;
  money: number;
}

/**
 * Ein Simulationstag, direkt aus den Formeln im Sheet "Sim_*" übernommen.
 * Reichweiten-Zerfall, Reputations-Mean-Reversion und Erlöse/Kosten laufen jeden Tag;
 * der Boulevard-/Abwechslungs-Effekt einer Story wird nur an ihrem Veröffentlichungstag addiert.
 * (Das Excel-Modell ging von täglicher Veröffentlichung aus — echte Produktionsdauern können
 * mehrere Tage zwischen zwei Veröffentlichungen liegen lassen. Das ist der im Design-Dok als
 * offen markierte Abgleich "reale Pitch-Pools vs. Modell-Annahme"; diese Tick-Erweiterung auf
 * Nicht-Veröffentlichungstage ist eine Implementierungsannahme, kein Design-Beschluss.)
 */
export function simulateDay(input: DailyEconomyInput): DailyEconomyOutput {
  const e = ECONOMY;
  let reach = input.reach * (1 - e.reachDecayPerDay);
  let reputation = input.reputation - e.reputationMeanReversionRate * (input.reputation - 50);

  if (input.publishedGrade !== null) {
    const grade = input.publishedGrade;
    const gradeReachFactor = 1 + ((grade - 3) / 2) * e.boulevardReachBonusFactor;
    const varietyReachFactor = 1 + e.varietyBonusFactorReach * (input.variety - e.varietyReferenceValue);
    reach += e.baseReachGainPerStory * gradeReachFactor * varietyReachFactor;

    reputation -= e.boulevardReputationMalusFactor * (grade - 3);
    reputation += e.varietyBonusFactorReputation * (input.variety - e.varietyReferenceValue);
  }
  reputation = Math.min(100, Math.max(0, reputation));

  const targetSubscribers = reach * e.conversionRateBase * (reputation / 100);
  const subscribers = input.subscribers + e.subscriberAdjustmentRate * (targetSubscribers - input.subscribers);

  const adRevenue = reach * e.baseAdPricePerReach * (reputation / 100);
  const subscriptionRevenue = subscribers * e.pricePerSubscriber;
  const costs = e.salaryPerSkillPointPerDay * input.totalSkillPoints + input.floorFixedCost + reach * e.reachInfraCostPerUnit;
  const profit = adRevenue + subscriptionRevenue - costs;
  const money = input.money + profit;

  return { reach, reputation, subscribers, adRevenue, subscriptionRevenue, costs, profit, money };
}

/** |heutiger Grad - gleitender Ø der letzten `varietyWindowDays` veröffentlichten Grade|. */
export function computeVariety(gradeHistory: number[], todayGrade: number): number {
  if (gradeHistory.length === 0) return 0;
  const window = gradeHistory.slice(-ECONOMY.varietyWindowDays);
  const avg = window.reduce((sum, g) => sum + g, 0) / window.length;
  return Math.abs(todayGrade - avg);
}
