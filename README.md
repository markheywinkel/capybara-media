# Capybara Media

Browser-Spiel (Arbeitstitel ursprünglich "The Papers"): Als Capybara-Chefredakteur Quentin
baust du "Capybara Media" auf — Pitches auswählen, Boulevard gegen Investigativ abwägen,
Redaktion aufbauen, nicht pleitegehen.

Design-Quelle der Wahrheit: [`docs/capybara-media-design-stand.md`](docs/capybara-media-design-stand.md).
Weitere Dokumente in `docs/`: Pitch-Inhalte, Story-Skripte, Wirtschaftsmodell (Excel),
Interface-Wireframes, Asset-Liste.

## Stand dieser Iteration

Funktionsfähiger Klick-Durchlauf der Kernschleife für die Text-Etage (Screens 1+2 der
Wireframes: Redaktionskonferenz + Tages-Ergebnis), noch ohne finale Grafik — nur Platzhalter.
Phaser ist eingebunden (Button "Büro-Ansicht" zeigt eine Platzhalter-Szene), aber die
eigentliche Büro-Navigation (Screen 4) ist noch nicht gebaut. Multimedia- und
Entwicklungs-Etage, Personal-Einstellung/Fortbildung und Handlungsstränge sind noch nicht
verdrahtet — Pitch-Daten dafür liegen aber schon in `src/data/pitches.ts` bereit.

## Entwicklung

```bash
npm install
npm run dev
```

## Tech-Stack

Vite + React + TypeScript, Phaser für die spätere Büro-Navigation. Speicherstand vorerst nur
im Browser-Zustand (noch kein LocalStorage-Persist). Deploy: Vercel, verbunden mit diesem
GitHub-Repo.

## Projektstruktur

```
src/
  types.ts              Pitch/Employee-Typen
  data/
    pitches.ts           Pitch-Pools Text/Multimedia/Entwicklung (aus docs/ zusammengeführt)
    cast.ts               Startbesetzung Text-Etage (Gwen, Lizzy)
    economy.ts             Konstanten + Formeln aus dem Wirtschaftsmodell (Annahmen-Sheet)
  game/
    shuffleBag.ts          Shuffle-Bag-Ziehmechanik für Pitch-Pools
    engine.ts               Reiner Tages-Loop (Zustand, Produktionsdauer, Tages-Tick)
    useCapybaraGame.ts        React-Hook um engine.ts
  components/              Redaktionskonferenz-, Produktions-, Ergebnis-, GameOver-Screen
  phaser/                   Minimaler Phaser-Einbettungs-Nachweis (Platzhalter-Büro-Szene)
```

## Bekannte Annahmen / offene Punkte

Details dazu stehen als Kommentare direkt im Code (`src/data/economy.ts`, `src/game/engine.ts`).
Kurzfassung:

- Produktionsdauer wird auf ganze Spieltage aufgerundet (im Design-Dok nicht festgelegt).
- Die Wirtschaftsformeln aus dem Excel-Modell gingen von täglicher Veröffentlichung aus; hier
  laufen Zerfall/Erlöse/Kosten weiterhin täglich, der Boulevard-/Abwechslungs-Effekt einer
  Story wird nur an ihrem Veröffentlichungstag addiert — im Design-Dok als offener
  Abgleichspunkt vermerkt.
- Der Text zum Abwechslungs-Hinweis auf dem Ergebnis-Screen ist Platzhalter-Copy (die genaue
  Feedback-Beat-Darstellung ist im Design-Dok explizit noch offen).
