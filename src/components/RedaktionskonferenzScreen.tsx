import type { Employee } from '../types';
import type { GameState } from '../game/engine';

interface Props {
  state: GameState;
  onSelectPitch: (pitchId: string) => void;
}

function StaffSlot({ employee }: { employee: Employee | null }) {
  if (!employee) {
    return (
      <div className="avatar avatar--empty">
        <span>leer</span>
      </div>
    );
  }
  return (
    <div className="avatar">
      <span>{employee.name}</span>
      <span className="avatar__skill">SK{employee.skill}</span>
    </div>
  );
}

export function RedaktionskonferenzScreen({ state, onSelectPitch }: Props) {
  const filled = state.textEmployees.filter((e): e is Employee => e !== null).length;

  return (
    <div className="screen">
      <div className="screen__title">Redaktionskonferenz — Pitch-Auswahl</div>

      <div className="row">
        <div className="box box--flex">
          <span className="label">Tag-Zähler</span>
          Tag {state.day} / Kapitel {state.chapter}
        </div>
        <div className="box box--flex">
          <span className="label">Etage</span>
          Text-Redaktion
        </div>
      </div>

      <span className="label">Besetzung ({filled}/3 Slots)</span>
      <div className="row row--avatars">
        {state.textEmployees.map((e, i) => (
          <StaffSlot key={e?.id ?? `empty-${i}`} employee={e} />
        ))}
      </div>

      <span className="label">Pitches (3 Optionen, 1 wählen)</span>
      {state.currentPitches?.map((pitch) => (
        <div key={pitch.id} className="pitch-card">
          <div className="row row--between">
            <span className="tag">Aufwand {pitch.effort}</span>
            <span className="placeholder-text">Boulevard-Grad verdeckt</span>
          </div>
          <div className="headline">&ldquo;{pitch.headline}&rdquo;</div>
          <button className="btn btn--primary" onClick={() => onSelectPitch(pitch.id)}>
            Auswählen
          </button>
        </div>
      ))}
    </div>
  );
}
