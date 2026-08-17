import type { BoulevardPitch, Employee, Pitch } from '../types';
import { ENTRY_POOL_DAYS, TEXT_FLOOR_BASE_DAYS, TEXT_FLOOR_SLOTS, computeVariety, simulateDay, skillGapMultiplier, staffingMultiplier } from '../data/economy';
import { INITIAL_TEXT_SLOTS } from '../data/cast';
import { ENTWICKLUNG_PITCHES, MULTIMEDIA_PITCHES, TEXT_PITCHES, entryPoolFilter } from '../data/pitches';
import { ShuffleBag } from './shuffleBag';

export type Phase = 'konferenz' | 'produktion' | 'ergebnis' | 'gameover';

export interface DayResult {
  headline: string;
  boulevardGrade: number;
  effort: number;
  reachBefore: number;
  reachAfter: number;
  reputationBefore: number;
  reputationAfter: number;
  moneyDelta: number;
  moneyAfter: number;
  varietyHint: string;
}

export interface ProductionState {
  pitch: BoulevardPitch;
  totalDays: number;
  remainingDays: number;
}

export interface GameState {
  day: number;
  chapter: number;
  money: number;
  reach: number;
  reputation: number;
  subscribers: number;
  /** Veröffentlichte Boulevard-Grade, chronologisch, für die Abwechslungsmechanik. */
  gradeHistory: number[];
  textEmployees: (Employee | null)[];
  phase: Phase;
  currentPitches: BoulevardPitch[] | null;
  production: ProductionState | null;
  lastResult: DayResult | null;
  /** Kontostand ist unter 0 gefallen — Bankrott wird nach dem aktuellen Ergebnis-Screen ausgelöst. */
  pendingGameOver: boolean;
}

// Nur die Text-Etage ist zu Spielbeginn verfügbar (s. Design-Dok Abschnitt 2).
// Multimedia/Entwicklung-Pools sind bereits als Daten vorhanden, aber noch nicht ins Spiel verdrahtet.
void MULTIMEDIA_PITCHES;
void ENTWICKLUNG_PITCHES;

const entryPool = TEXT_PITCHES.filter(entryPoolFilter);
const entryBag = new ShuffleBag(entryPool);
const fullBag = new ShuffleBag(TEXT_PITCHES);

function drawTextPitches(day: number): BoulevardPitch[] {
  const bag = day <= ENTRY_POOL_DAYS ? entryBag : fullBag;
  return bag.drawUnique(3);
}

export function createInitialState(): GameState {
  return {
    day: 1,
    chapter: 1,
    money: 500,
    reach: 100,
    reputation: 50,
    subscribers: 20,
    gradeHistory: [],
    textEmployees: [...INITIAL_TEXT_SLOTS],
    phase: 'konferenz',
    currentPitches: drawTextPitches(1),
    production: null,
    lastResult: null,
    pendingGameOver: false,
  };
}

function filledSlots(employees: (Employee | null)[]): Employee[] {
  return employees.filter((e): e is Employee => e !== null);
}

export function computeProductionDays(pitch: Pitch, employees: (Employee | null)[]): number {
  const filled = filledSlots(employees);
  const avgSkill = filled.length > 0 ? filled.reduce((sum, e) => sum + e.skill, 0) / filled.length : 0;
  const staffMult = staffingMultiplier(filled.length, TEXT_FLOOR_SLOTS);
  const skillMult = skillGapMultiplier(avgSkill, pitch.effort);
  // Bruchtage werden auf ganze Spieltage aufgerundet (diskreter Tages-Loop) — Implementierungsannahme,
  // im Design-Dok nicht festgelegt (Beispielrechnung dort ergibt 1,5 Tage ohne Rundungsregel).
  return Math.max(1, Math.ceil(TEXT_FLOOR_BASE_DAYS * staffMult * skillMult));
}

function buildVarietyHint(variety: number, historyLength: number): string {
  if (historyLength === 0) return 'Erster Bericht — noch keine Vergleichsbasis für die Abwechslungsmechanik.';
  if (variety < 0.5) return 'Deine letzten Berichte waren sehr ähnlich — die Leser:innen werden unruhig.';
  if (variety < 1) return 'Etwas mehr Abwechslung würde deinen Berichten gut tun.';
  return 'Schöne Mischung aus Boulevard und Investigativ — deine Leser:innen mögen den Wechsel.';
}

function resolveDay(state: GameState, publishedPitch: BoulevardPitch | null): GameState {
  const variety = publishedPitch ? computeVariety(state.gradeHistory, publishedPitch.boulevardGrade) : 0;
  const totalSkillPoints = filledSlots(state.textEmployees).reduce((sum, e) => sum + e.skill, 0);

  const result = simulateDay({
    reach: state.reach,
    reputation: state.reputation,
    subscribers: state.subscribers,
    money: state.money,
    publishedGrade: publishedPitch ? publishedPitch.boulevardGrade : null,
    variety,
    totalSkillPoints,
    floorFixedCost: 15, // Etagen-Fixkosten Text pro Tag (s. Wirtschaftsmodell)
  });

  const nextGradeHistory = publishedPitch ? [...state.gradeHistory, publishedPitch.boulevardGrade] : state.gradeHistory;

  const lastResult: DayResult | null = publishedPitch
    ? {
        headline: publishedPitch.headline,
        boulevardGrade: publishedPitch.boulevardGrade,
        effort: publishedPitch.effort,
        reachBefore: state.reach,
        reachAfter: result.reach,
        reputationBefore: state.reputation,
        reputationAfter: result.reputation,
        moneyDelta: result.profit,
        moneyAfter: result.money,
        varietyHint: buildVarietyHint(variety, state.gradeHistory.length),
      }
    : state.lastResult;

  const nextDay = state.day + 1;
  const isGameOver = result.money < 0;
  // Bei Bankrott an einem Tag ohne Veröffentlichung gibt es keinen Ergebnis-Screen zu zeigen,
  // also direkt zu 'gameover'. War heute eine Story fällig, zeigt der Ergebnis-Screen erst
  // noch das letzte Tagesergebnis; der Wechsel zu 'gameover' passiert dann beim Weiterklicken.
  const phase: Phase = !publishedPitch && isGameOver ? 'gameover' : publishedPitch ? 'ergebnis' : 'produktion';

  return {
    ...state,
    day: nextDay,
    money: result.money,
    reach: result.reach,
    reputation: result.reputation,
    subscribers: result.subscribers,
    gradeHistory: nextGradeHistory,
    lastResult,
    phase,
    production: publishedPitch ? null : state.production,
    pendingGameOver: isGameOver,
  };
}

/** Spieler wählt eine Pitch in der Redaktionskonferenz aus. Startet Produktion und verbraucht den heutigen Tag. */
export function selectPitch(state: GameState, pitchId: string): GameState {
  if (state.phase !== 'konferenz' || !state.currentPitches) return state;
  const pitch = state.currentPitches.find((p) => p.id === pitchId);
  if (!pitch) return state;

  const totalDays = computeProductionDays(pitch, state.textEmployees);
  const remainingAfterToday = totalDays - 1;

  const withProduction: GameState = {
    ...state,
    currentPitches: null,
    production: { pitch, totalDays, remainingDays: remainingAfterToday },
  };

  return resolveDay(withProduction, remainingAfterToday <= 0 ? pitch : null);
}

/** Ein weiterer Produktionstag vergeht (Etage ist noch mit der gewählten Pitch beschäftigt). */
export function advanceProductionDay(state: GameState): GameState {
  if (state.phase !== 'produktion' || !state.production) return state;
  const remaining = state.production.remainingDays - 1;
  const production = { ...state.production, remainingDays: remaining };
  return resolveDay({ ...state, production }, remaining <= 0 ? production.pitch : null);
}

/** Vom Tages-Ergebnis zurück zur nächsten Redaktionskonferenz (oder zu Game Over bei Bankrott). */
export function continueToNextDay(state: GameState): GameState {
  if (state.phase !== 'ergebnis') return state;
  if (state.pendingGameOver) {
    return { ...state, phase: 'gameover' };
  }
  return {
    ...state,
    phase: 'konferenz',
    currentPitches: drawTextPitches(state.day),
  };
}
