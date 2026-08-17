import type { GameState } from '../game/engine';

interface Props {
  state: GameState;
  onAdvanceDay: () => void;
}

export function ProduktionScreen({ state, onAdvanceDay }: Props) {
  const production = state.production;
  if (!production) return null;

  const daysDone = production.totalDays - production.remainingDays;

  return (
    <div className="screen">
      <div className="screen__title">Text-Redaktion produziert</div>
      <div className="box">
        <span className="label">Tag-Zähler</span>
        Tag {state.day} / Kapitel {state.chapter}
      </div>
      <div className="box">
        <span className="label">In Arbeit</span>
        <div className="headline">&ldquo;{production.pitch.headline}&rdquo;</div>
        <span className="placeholder-text">
          Aufwand {production.pitch.effort} · Tag {daysDone} von {production.totalDays}
        </span>
      </div>
      <p className="placeholder-text">
        Die Text-Etage ist noch mit dieser Story beschäftigt (Besetzung/Skill-Lücke verlangsamen die Produktion).
        Andere Etagen liefen hier unabhängig weiter, sobald sie gebaut sind.
      </p>
      <button className="btn btn--primary" onClick={onAdvanceDay}>
        Nächster Tag
      </button>
    </div>
  );
}
