import type { DayResult } from '../game/engine';

interface Props {
  result: DayResult;
  nextDay: number;
  onContinue: () => void;
}

const fmt = (n: number) => Math.round(n * 10) / 10;
const fmtSigned = (n: number) => (n >= 0 ? `+${fmt(n)}` : `${fmt(n)}`);

const GRADE_LABELS: Record<number, string> = {
  1: 'investigativ',
  2: 'eher investigativ',
  3: 'ausgewogen',
  4: 'eher Boulevard',
  5: 'reiner Boulevard',
};

export function TagesErgebnisScreen({ result, nextDay, onContinue }: Props) {
  const reachDelta = result.reachAfter - result.reachBefore;
  const reputationDelta = result.reputationAfter - result.reputationBefore;

  return (
    <div className="screen">
      <div className="screen__title">Feedback-Beat — Tagesabschluss</div>

      <div className="box">
        <span className="label">Veröffentlicht</span>
        <div className="headline">&ldquo;{result.headline}&rdquo;</div>
        <span className="placeholder-text">
          → war Boulevard-Grad {result.boulevardGrade} ({GRADE_LABELS[result.boulevardGrade]}, jetzt aufgedeckt) · Aufwand {result.effort}
        </span>
      </div>

      <div className="row">
        <div className="box box--flex">
          <span className="label">Δ Reichweite</span>
          <b>{fmtSigned(reachDelta)}</b>{' '}
          <span className="placeholder-text">
            ({fmt(result.reachBefore)} → {fmt(result.reachAfter)})
          </span>
        </div>
        <div className="box box--flex">
          <span className="label">Δ Reputation</span>
          <b>{fmtSigned(reputationDelta)}</b>{' '}
          <span className="placeholder-text">
            ({fmt(result.reputationBefore)} → {fmt(result.reputationAfter)})
          </span>
        </div>
      </div>

      <div className="row">
        <div className="box box--flex">
          <span className="label">Δ Kontostand</span>
          <b>{fmtSigned(result.moneyDelta)} Münzen</b>
        </div>
        <div className="box box--flex">
          <span className="label">Kontostand gesamt</span>
          <b>{fmt(result.moneyAfter)} Münzen</b>
        </div>
      </div>

      <div className="box">
        <span className="label">Abwechslungs-Hinweis</span>
        <span className="placeholder-text">{result.varietyHint}</span>
      </div>

      <button className="btn btn--primary" onClick={onContinue}>
        Weiter zu Tag {nextDay}
      </button>
    </div>
  );
}
