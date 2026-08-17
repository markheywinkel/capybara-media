import { useState } from 'react';
import './App.css';
import { useCapybaraGame } from './game/useCapybaraGame';
import { RedaktionskonferenzScreen } from './components/RedaktionskonferenzScreen';
import { ProduktionScreen } from './components/ProduktionScreen';
import { TagesErgebnisScreen } from './components/TagesErgebnisScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { PhaserOffice } from './phaser/PhaserOffice';

function App() {
  const game = useCapybaraGame();
  const [showOffice, setShowOffice] = useState(false);
  const { state } = game;

  return (
    <div className="app">
      <header className="app__header">
        <h1>Capybara Media</h1>
        <div className="app__stats">
          <span>Kontostand: {Math.round(state.money)}</span>
          <span>Reichweite: {Math.round(state.reach)}</span>
          <span>Reputation: {Math.round(state.reputation)}</span>
          <span>Abonnenten: {Math.round(state.subscribers)}</span>
        </div>
        <button className="btn btn--ghost" onClick={() => setShowOffice((v) => !v)}>
          {showOffice ? 'Büro-Ansicht ausblenden' : 'Büro-Ansicht (Platzhalter)'}
        </button>
      </header>

      {showOffice && (
        <div className="app__office">
          <PhaserOffice />
        </div>
      )}

      <main className="app__main">
        {state.phase === 'konferenz' && (
          <RedaktionskonferenzScreen state={state} onSelectPitch={game.selectPitch} />
        )}
        {state.phase === 'produktion' && (
          <ProduktionScreen state={state} onAdvanceDay={game.advanceProductionDay} />
        )}
        {state.phase === 'ergebnis' && state.lastResult && (
          <TagesErgebnisScreen result={state.lastResult} nextDay={state.day} onContinue={game.continueToNextDay} />
        )}
        {state.phase === 'gameover' && (
          <GameOverScreen day={state.day} onRestart={() => window.location.reload()} />
        )}
      </main>
    </div>
  );
}

export default App;
