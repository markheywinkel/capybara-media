import { useState } from 'react';
import './App.css';
import { useCapybaraGame } from './game/useCapybaraGame';
import { RedaktionskonferenzScreen } from './components/RedaktionskonferenzScreen';
import { ProduktionScreen } from './components/ProduktionScreen';
import { TagesErgebnisScreen } from './components/TagesErgebnisScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { PhaserOffice } from './phaser/PhaserOffice';
import { BACKGROUNDS, UI } from './assets/artwork';

function App() {
  const game = useCapybaraGame();
  const [showOffice, setShowOffice] = useState(false);
  const { state } = game;

  return (
    <div className="app">
      <header className="app__header" style={{ backgroundImage: `url(${BACKGROUNDS.hauptmenue})` }}>
        <div className="app__header-tint">
          <h1>Capybara Media</h1>
          <div className="app__stats">
            <span>
              <img className="inline-icon" src={UI.iconGeld} alt="" />
              Kontostand: {Math.round(state.money)}
            </span>
            <span>
              <img className="inline-icon" src={UI.iconReichweite} alt="" />
              Reichweite: {Math.round(state.reach)}
            </span>
            <span>
              <img className="inline-icon" src={UI.iconReputation} alt="" />
              Reputation: {Math.round(state.reputation)}
            </span>
            <span>Abonnenten: {Math.round(state.subscribers)}</span>
          </div>
          <button className="btn btn--ghost" onClick={() => setShowOffice((v) => !v)}>
            {showOffice ? 'Büro-Ansicht ausblenden' : 'Büro-Ansicht (Platzhalter)'}
          </button>
        </div>
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

      <footer className="app__footer">
        <p className="app__footer-title">Capybara Media – Manage dein Medienunternehmen!</p>
        <p>
          Ein Management-Testspiel von{' '}
          <a href="https://www.markheywinkel.de" target="_blank" rel="noopener noreferrer">
            Mark Heywinkel
          </a>
        </p>
        <p className="app__footer-note">
          <strong>Notiz:</strong> Das Management-Spiel »Capybara Media« ist vollständig KI-generiert.
          Es sind Claude für den Code sowie GPT für die Grafiken im Einsatz gewesen. Der Code liegt
          auf GitHub, Host ist Vercel.
        </p>
      </footer>
    </div>
  );
}

export default App;
