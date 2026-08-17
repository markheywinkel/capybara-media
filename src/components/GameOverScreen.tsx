interface Props {
  day: number;
  onRestart: () => void;
}

export function GameOverScreen({ day, onRestart }: Props) {
  return (
    <div className="screen">
      <div className="screen__title">Bankrott</div>
      <div className="box">
        <p>Der Kontostand ist unter 0 gefallen. Capybara Media musste an Tag {day} schließen.</p>
      </div>
      <button className="btn btn--primary" onClick={onRestart}>
        Neu starten
      </button>
    </div>
  );
}
