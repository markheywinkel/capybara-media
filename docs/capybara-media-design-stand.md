# Capybara Media — Design-Zwischenstand
*(Arbeitstitel: "The Papers" → Konzept-Codename: Capybara Media)*

Stand: laufende Konzeptphase. Dieses Dokument fasst nur zusammen, was **bereits entschieden** ist, und markiert klar, was noch offen ist. Keine Ausschmückung, keine Ergänzungen ohne vorherige Diskussion.

---

## 1. Setting & Ton

- Fiktive, von Tieren bevölkerte Welt, unserer Realität nachempfunden
- Kein historischer Zeitverlauf, keine Jahrzehnte-Sprünge — **alles spielt "heute"** (finale Entscheidung)
- Spielfigur: ein Capybara als Chefredakteur:in bei "Capybara Media", einem jungen Web-Angebot
- Weitere Tiere als Redaktionsmitglieder möglich (Affen, Kängurus, Fische, Delfine, evtl. Wal)
- Tier-Cast ist **bewusst reines Reskin/Stilmittel**, keine mechanische Differenzierung nach Spezies
- Politische Dimension, Zensur-Thematik: **explizit ausgeschlossen** — Fokus liegt auf Medienformen entdecken, Geld verdienen, Popularität aufbauen
  - Präzisierung: Politische Job-Titel (Bürgermeister etc.) sind als **Boulevard-Oberfläche** erlaubt (Skandälchen, Possen, PR-Fails), aber keine inhaltlich ernsthaften politischen Storylines
- Optische Referenz (später, nicht Teil meiner Unterstützung): 2D-Pixelart, flach, knuffig — Vorbild *Dave the Diver*
- Tonalität: cozy, niedrigschwellig, nicht ernst/politisch wie ursprünglicher Arbeitstitel suggerierte

## 2. Räumlichkeit

- Spielraum: ein Bürogebäude, keine freie Bewegung — nur Navigation durch Räume (Maus/Controller)
- **3 Etagen/Content-Typen, alle strukturell identisch aufgebaut:**
  - **Text-Etage** (Redaktion) — Basisdauer 1 Tag bei Vollbesetzung
  - **Multimedia-Studio** (Video+Podcast verschmolzen, ein einheitlicher Content-Typ) — Basisdauer 2 Tage bei Vollbesetzung
  - **Entwicklung** (Wundertüte/F&E: Chatbot, synthetischer Video-Host, Spiele-App etc.) — Basisdauer 10-15 Tage bei Vollbesetzung (Wert innerhalb dieser Spanne: Playtesting), **kein Boulevard-Grad als Pitch-Achse** (passt inhaltlich nicht zu F&E-Projekten) — stattdessen **Bonusgröße** statt Boulevard-Grad, plus weiterhin Skill-Anforderung. Ergebnis liefert Gesamt-Push (Geld), keine strukturelle Dauerwirkung sonst — reinvestierbar in Personal/Ausbildung
- **Jede Etage hat genau 3 feste Slots, eine einzige, etagen-spezifische Rolle:** Text-Redakteur (Text-Etage), Multimedia-Redakteur (Multimedia-Etage), Entwicklungs-Redakteur (Entwicklung) — die frühere Dreiteilung Redakteur/Designer/Social Media innerhalb einer Etage entfällt komplett, ebenso der geteilte Personal-Pool zwischen Etagen (jede Rolle ist jetzt eindeutig einer Etage zugeordnet, kein Überschneidungsproblem mehr)
- **Keine Etagen-Aufrüstung** — fix bei 3 Slots, keine Level-Stufen (frühere Etagen-Leveling-Idee zurückgenommen)
- Etagen sind **kaufbar** (nicht Event-/Progressions-gebunden)
  - **Kapitel-Kopplung (Hybrid):** Text-Etage von Anfang an verfügbar, Multimedia erst ab Kapitel 2 (Tag 51+) im Baumenü wählbar, Entwicklung erst ab Kapitel 3 (Tag 101+) — das Kapitel schaltet nur die *Kaufmöglichkeit* frei, tatsächlicher Bau bleibt weiterhin vom Kontostand abhängig (Geld entscheidet Timing innerhalb des Kapitels)
  - Zeitsprung-Zwischensequenzen (s. Abschnitt 9) können den neuen Etagen-Zugang narrativ rahmen ("ein paar Monate später wagen wir den Sprung ins Multimedia-Geschäft")
- **Produktionsgeschwindigkeit skaliert mit Besetzung**, nicht "alles oder nichts": Etage liefert auch bei Unterbesetzung Output, nur langsamer
  - Vorschlag: Verlangsamungs-Multiplikator auf die jeweilige Basisdauer — Vollbesetzt (3/3) × 1, zwei besetzt × 1,5, eine besetzt × 2 (exakte Werte: Playtesting)
  - Beispiel bei diesem Multiplikator: Text bei 1 Person = 2 Tage statt 1, Entwicklung bei 1 Person = 20 Tage statt 10
  - **Skill-Lücke-Multiplikator (zusätzlich, gilt pro Pitch):** Ist der durchschnittliche Team-Skill niedriger als der Aufwand der gewählten Pitch, verlängert sich die Produktionsdauer um **+25% pro fehlendem Skill-Punkt** (multiplikativ zum Besetzungs-Multiplikator). Wirkt NUR auf die Dauer, nicht auf die Stärke des Ergebnisses (Reichweite-/Reputationseffekt bleibt unverändert, nur später) — hält Skill-Lücke und Unterbesetzung im selben System statt zwei getrennter Straf-Mechaniken
    - Beispiel: Aufwand 5, Team-Skill 3 (Lücke 2 Punkte), volle Besetzung (3/3): Text-Etage 1 Tag × 1 (Besetzung) × 1,5 (Skill-Lücke, 2×25%) = 1,5 Tage
- Jede Etage liefert pro Tag **3 Pitches, davon wird 1 produziert** (Pitch-Überschuss besteht pro Etage)
- **Einstiegspool:** die ersten ~5-7 Spieltage ziehen nur aus einer kuratierten Teilmenge mit Aufwand 1-2, danach schaltet der volle Shuffle-Bag-Pool frei — verhindert, dass Neueinsteiger:innen sofort auf die Skill-Lücke-Verzögerung (s. o.) treffen, bevor sie die Systeme verstanden haben. Narrativ an Normans Mentor-/Tutorial-Rolle koppelbar (Kerncast, s. Abschnitt 8)
- Storyline-Freischaltung (Handlungsstränge, s. Abschnitt 9) kann trotzdem an Etagen-Bau gekoppelt sein, unabhängig vom Kauf-vs-Event-Mechanismus der Etage selbst

## 3. Core Loop (pro Tag)

1. **Tagesbeginn:** Management-Phase — neue Mitarbeitende einstellen, Etagen bauen
2. **"Redaktionskonferenz"** (ein Klick, eine UI-Phase): pro Etage entweder ein fälliges Handlungsstrang-Event ODER normale Pitch-Auswahl — **entweder/oder, nie beides gleichzeitig auf derselben Etage**
   - Ein Event pausiert nur die **betroffene Etage** (meist Text) — die anderen Etagen laufen unabhängig normal weiter mit ihren eigenen 3 Pitches
3. Produktionsdauer hängt von Etagen-Basisdauer × Besetzungsgrad ab (s. Abschnitt 2) — kein Alles-oder-Nichts-Blockade, nur Verlangsamung bei Unterbesetzung
4. Veröffentlichung generiert Reichweite → Einnahmen (Leser- und Werbemarkt)
5. Einnahmen ermöglichen mehr/bessere Mitarbeitende und weitere Etagen → mehr/bessere Pitches

**Boulevard-vs-Qualität-Entscheidung fällt bei der Pitch-Auswahl.**

- Jede/r Mitarbeitende bietet **mehrere** Pitches pro Tag an (Pitch-Überschuss vorhanden, mehr Pitches als Produktionsslots) → echte Auswahlentscheidung notwendig
- Pitches tragen zu Spielbeginn **2 Werte**:
  1. **Boulevard-Grad** (Skala 1-5, analog zu Aufwand: 1 = investigativ, 5 = Boulevard) — steuert Reichweitenpotenzial vs. Reputationsrisiko. **Verdeckt** — Spieler sieht nur die Headline und muss den Grad am Schreibstil erahnen (Journalismus-"Gespür"-Gefühl), Auflösung erst am Tagesende
     - Konsequenz: Headlines brauchen eine **konsistente, erlernbare Stilkonvention** (z. B. Ausrufezeichen/Superlative = boulevardesk-codiert, sachlich/Konjunktiv/Zahlen = investigativ-codiert), die über das ganze Spiel durchgehalten wird — sonst funktioniert die Gespür-Mechanik nicht
  2. **Aufwand** (vormals "Skill-Anforderung") — benötigtes Skill-Level der jeweils zuständigen Rolle. **Sichtbar** — informierte Personalzuteilung soll möglich bleiben, kein Rätselraten hier
     - Auf Entwicklung: Aufwand + Bonusgröße statt Boulevard-Grad (s. Abschnitt 2)
- **Pitch-Pool-Mechanik: Shuffle-Bag** — Pool pro Etage wird durchgemischt gezogen, erst nach vollständigem Durchlauf wiederholt sich ein Pitch. Kein Unikat-Zwang (unrealistischer Schreibaufwand für 150 Spieltage)
  - Ziel-Poolgrößen für 150 Spieltage (fixe Spiellänge, s. Abschnitt 6): **Text ~60-90** (aktuell 41, noch ~20-50 nötig), **Multimedia ~38-53** (aktuell 20, noch ~18-33 nötig), **Entwicklung ~18-23** (aktuell 9, noch ~10-14 nötig)
  - **Handlungsstränge-Zielgröße:** feste Struktur 3 Akte × 3 Storys = 9 total (s. Abschnitt 9) — ersetzt frühere Schätzung von 6-8
- Zusätzlich geplant: rein kosmetischer **Themen-Flavor-Tag** (Sport, Klatsch, Wissenschaft, Lokales...) ohne Zahlenwirkung, nur für Abwechslung/Schreibe
- **Format-Eignung** (Text/Video/Audio) als dritte mechanische Achse **bewusst zurückgestellt**, bis Video-/Podcast-Etage existiert — vermeidet toten Stat in der Frühphase

## 4. Personal-System

- Keine Krankheiten, keine Kündigungen — Mitarbeitende bleiben dauerhaft verfügbar (Dave-the-Diver-Prinzip)
- Einheitlicher Wert **"Skill"**, Skala 1-5, für alle Mitarbeitenden (Norman ausgenommen, s. u.)
  - Start: alle Mitarbeitenden = 2
  - Fortbilden kostet Geld UND setzt die Person **3 Tage außer Gefecht** (selbstgewählter Ausfall, kein Widerspruch zu "keine Krankheiten", da Spielerentscheidung)
- **Norman belegt keinen Slot und hat keinen Skill-Wert** — er ist der ehemalige Chefredakteur, der Capybara Media an Quentin übergeben hat, und begleitet ihn im ersten Jahr als Senior Editor/Mentor rein narrativ (Dialoge, Tutorial, Handlungsstränge). Kein mechanischer Personal-Slot, kann nicht "gefeuert"/ersetzt werden — bleibt unabhängig von Personalentscheidungen in der Story präsent
- **Startbesetzung Text-Etage:** Gwen und Lizzy sind zu Spielbeginn bereits angestellt (2 von 3 Slots, Skill 2), dritter Slot ist offen für erste Neueinstellung
- Zusätzlich: Arbeitsmarkt-Übersicht, auf dem bereits gelevelte Mitarbeitende eingekauft werden können (höherer Einzelpreis, aber in Summe günstiger als selbst hochleveln, dafür ohne den 3-Tage-Ausfall — schärft den Kauf-vs-Ausbilden-Trade-off)
- **Bewusste Design-Entscheidung:** reines Kostenoptimierungsproblem, keine individuellen Fähigkeits-Boni oder Persönlichkeitsmechanik
- Emotionale Bindung an Mitarbeitende soll ausschließlich über Schreibe/Profile/Charakter-Events erzeugt werden, nicht über Spielmechanik

## 5. Ökonomie & Balance

- Zwei Erlösquellen: Lesermarkt (Abos), Werbemarkt
- Zentrale Werte: Reichweite, Reputation/Qualität
- Erlös pro Reichweite ist **abhängig von Reputation** (hohe Reputation macht Reichweite profitabel)
- Kosten pro Reichweite sind **unabhängig von Reputation** (Server-/Betriebskosten steigen immer mit Reichweite)
  → macht "Reichweite ohne Qualität" zum Verlustgeschäft, nicht nur suboptimal
- Kosten steigen zusätzlich mit Anzahl der Räume/Etagen (Fixkosten, fallen unabhängig von Besetzung an, sobald Etage existiert)
- Game-Over-Bedingung: **Bankrott**
- **Abwechslungsmechanik (bestätigt durch Balance-Test):** Reichweite und Reputation hängen zusätzlich von der Abweichung des heutigen Boulevard-Grads vom gleitenden Durchschnitt der letzten 5 Tage ab — Monotonie (dauerhaft gleicher Grad, ob Boulevard oder Investigativ) wird bestraft, Abwechslung belohnt. Ziel: sowohl "immer Boulevard" als auch "immer Investigativ" führen in den Bankrott, nur eine gemischte Spielweise ist nachhaltig profitabel. Im Balance-Test (100-Tage-Simulation, Text-Etage) bestätigt: Boulevard scheitert Tag 9, Investigativ Tag 12, Gemischt bleibt durchgehend im Plus (Details: separates Wirtschaftsmodell, Excel-Datei)

**Formel-Struktur (Konstanten noch nicht final, brauchen Playtesting):**
- Werbe-Erlös = Reichweite × Werbepreis-pro-Kontakt(Reputation)
- Abo-Erlös = Abonnenten × Preis-pro-Abo
  - Abonnenten sind ein **träger Gedächtnis-Wert** (kein Sofort-Wert): `Ziel-Abonnenten = Reichweite × Konversionsrate(Reputation)`, `Abonnenten(morgen) = Abonnenten(heute) + Anpassungsrate × (Ziel − Abonnenten(heute))`
- Kosten = Gehälter + Etagen-Fixkosten + Reichweiten-Infrastrukturkosten
- Gewinn/Tag = Erlöse − Kosten

## 6. Scope

- Zielsitzung: 1–2 Stunden pro Spielsitzung
- Gesamtspiel ist länger angelegt, über mehrere Sitzungen — **kein** 1-2h-Gesamtspiel
- **Spiellänge: 150 Spieltage, fix.** Ende wird narrativ als Feier eines erfolgreichen Jahres gerahmt — die Story verdichtet die Zeit (Zeitraffer/Kapitelsprünge zwischen den 150 simulierten Tagen und dem erzählten "Jahr"), keine 365 Tage 1:1 simuliert

---

## 7. Events

- Negative Events sind **Konsequenz von Spielerentscheidungen**, nicht zufällig (konsistent mit "keine Krankheiten/Kündigungen")
- Konkreter Fall: seltene Pitch-Kategorie **"Große Story"/Enthüllung** (z. B. 1 von 5-6 Pitches)
  - **Text-Etage:** bindet 2-3 Tage (Basisdauer 1 Tag → 2-3× länger als normal)
  - **Multimedia-Etage:** eigene, längere Bindungsdauer nötig (z. B. 4-6 Tage, gegen Basisdauer 2 Tage — exakter Wert: Playtesting), sonst verpufft der "Extra"-Effekt gegenüber der Standard-Pitch
  - **Entwicklung:** **keine Große-Story-Variante** — die Etage ist strukturell bereits "Große Story" (lange Bindung, großer Payoff ist der Normalfall, nicht die Ausnahme)
- Bindung blockiert NICHT den Tag (Slot bleibt technisch besetzt), reduziert aber den Pitch-Nachschub dieser Person für die Bindungsdauer
- Dafür überdurchschnittlicher Reputations-/Reichweitengewinn — bewusste Extra-Wette, kein Standardfall
- Mehrtage-Bindung bleibt **Sonderfall dieser einen Kategorie**, wird NICHT zur dritten Standard-Pitch-Achse (Pitch-Werte bleiben bei 2: Boulevard-Grad, Skill-Anforderung)
- Positive Event-Varianten: noch nicht konkretisiert
- Tonalität: kurze, knappe Dialoge/Texte (cozy, simpel) — kein langes Lesen nötig

## 8. Cast

Setting: Capybara D.C. (CDC)

**Kerncast (mit Tiefe/Writing):**
- **Quentin** — Spielercharakter, Chefredakteur, Capybara
- **Norman** — ehemaliger Chefredakteur, hat Capybara Media an Quentin übergeben, begleitet ihn im ersten Jahr als Senior Editor/Mentor; Waschbär. Rein narrativ — kein Personal-Slot, kein Skill-Wert (s. Abschnitt 4)
- **Gwen** — Text-Redakteurin, Eichhörnchen
- **Lizzy** — Text-Redakteurin, Echse

**News-Figuren (mit Tiefe/Writing, treten wiederkehrend in Storys auf):**
- **Francis McDarmond** — Bürgermeister, Capybara, "böser" Charakter, politisch/seriös (Boulevard-Oberfläche, s.o.)
- **Ivy Nix** — politische Gegenspielerin, Schildkröte, freundlich, seriös + gelegentlich softe Seite
- **Amber Abberton** — Popstar, Capybara, eitel-witzig, soft/boulevardesk
- **Prof. Norton West** — Wissenschaftler, Eule, ernst, seriös
- **Sid Griffin** — Boxer, Känguru, dödelig, soft
- **Lola Lombardo** — Polizeichefin, Hase, ernst bis boulevardesk
- **Bruno** — Sids Assistent, Koala

*Prozess-Hinweis: Jeder neue Charakter, der im Writing/in Skripten auftaucht, wird hier ergänzt, sobald er auftritt — damit Cast-Liste und Skripte nie auseinanderlaufen.*

**Hireable Mitarbeitende (reine Namen+Tags, kein Tiefe/Writing-Aufwand, s. Abschnitt 4):**

*Text-Redakteure:* Vivian (Vogelstrauss, Boulevard) · Ed (Biber, Investigativ) · Grant (Erdmännchen, Boulevard) · Xenia (Schwein, Investigativ) · Simon (Bär, Boulevard) · Totoro (Bär) · Chip (Maus)

*Multimedia-Redakteure:* Pepper (Frosch) · Clementine (Capybara) · Susan (Pferd) · Mia (Reh) · Steve (Kuh) · Alma (Capybara) · Lou (Echse) · Oliver (Katze)

*Entwicklungs-Redakteure:* Jojo (Füchsin) · Ursula (Tintenfisch) · Vincent (Capybara)

## 9. Handlungsstränge (Narrative Events)

- **Struktur: 3 Akte × 3 Storys = 9 Handlungsstränge total** (feste Zielzahl, ersetzt frühere Schätzung von 6-8)
  - Jeder Akt umfasst 50 Spieltage (3 × 50 = 150, s. Abschnitt 6)
  - Zwischen den Akten: **Zeitsprung-Zwischensequenz**, lässt Ingame-Zeit länger wirken
- **Roter Faden über alle 9 Stränge:** Journalismus im Kapitalismus — Qualität vs. Reichweite, Moral vs. Geld. Konflikte verschärfen sich von Akt zu Akt
- **Standard-Story-Template (gilt für alle 9 Handlungsstränge):**
  1. Zwei entgegengesetzte Positionen werden im Auftritt vorgestellt
  2. Norman ordnet als Mentor zwischen den Positionen ein
  3. Spieler wählt: Bericht Seite A, Bericht Seite B, **oder gar keinen Bericht** (dritte Option immer vorhanden)
- **Aktueller Stand:** 1 von 9 fertig und template-konform (McDarmond/West-Autobahn-Story, inkl. Nicht-Schreiben-Option). Sid-Griffin-Story gestrichen (passte nicht zum Template). **Noch 8 weitere Stränge zu schreiben**
- **Generelles, wiederverwendbares System** über mehrere News-Figuren
- Mechanik: **Meter/Schwellenwert-Modell statt Entscheidungsbaum** — pro Strang ein Wert zwischen zwei Polen, jede Entscheidung verschiebt den Wert, Schwellenüberschreitung schaltet nächsten Story-Beat frei (Grundprinzip bleibt gültig, s. u. zu Einzelfällen)
  - Grund: linearer statt exponentieller Schreibaufwand (ein Beat pro Schwelle statt ein Text pro Kombinationspfad)
  - **Francis-vs-Ivy-Wahlkampf-Meter (ursprüngliches Beispiel): zurückgestellt**, keine verpflichtende Weiterverfolgung. Der McDarmond/West-Autobahn-Strang (s. eigenes Skript-Dokument) nutzt stattdessen einen einfacheren Auslöser: **Reichweiten-Schwelle** statt eigenem politischen Meter
- **Genereller Event-Auslöser (gilt für alle Handlungsstränge):** ODER-Verknüpfung aus drei Bedingungen — Reichweiten-Schwelle, Geld-Schwelle, oder Tage seit letztem Beat — je nachdem, was zuerst erreicht wird
  - Zweck: Sicherheitsnetz, das Story-Fortschritt unabhängig vom Spielstil garantiert (schnelles Reichweiten-Wachstum, Geld-Fokus oder einfach viel Spielzeit lösen alle gleichermaßen aus)
  - Kein echter Zufall, sondern spielstil-abhängige Variabilität — fühlt sich für Spielende dennoch unvorhersehbar an, da nicht klar ist, welche Bedingung zuerst greift
  - Kalibrierung der drei Schwellenwerte (damit keine der drei dauerhaft dominiert): Playtesting-Aufgabe
- **Ein wiederverwendbares Template** (zwei Pole, mehrere Schwellen, Standard-Beat-Typen) wird pro Figuren-Paar nur neu befüllt (Werte, Texte), keine eigene Logik pro Figur
- **Event-Struktur, 3 Teile, jeweils zu texten (Dave-the-Diver-Stil: reine Dialoge, kein Entscheidungsklick):**
  1. **Auftritt/Einführung** — 1-2 Figuren erscheinen nacheinander im Dialog, erklären ihr Anliegen, keine Spielerentscheidung
  2. **Pitch** — Headline + verdeckter Boulevard-Grad + sichtbarer Aufwand (s. Abschnitt 3), Entscheidung fällt hier wie bei jeder Tages-Pitch
  3. **Auflösung/Conclusio** — beide relevanten Figuren geben Statement ab (zufrieden/enttäuscht je nach gewählter Seite), plus einmaliger Bonus **entlang bestehender Werte** (Geld ODER Reputation, keine dritte neue Konsequenz-Ebene), zusätzlich zur normalen Boulevard-Grad-Wirkung der Pitch selbst
- **Pitch-Option "Nichts schreiben"**: bei allen Handlungssträngen ist eine Option ein kostenloser Skip (keine Produktionskapazität verbraucht, kein Boulevard-Grad-Effekt) — Teil des Standard-Templates (s. o.), nicht mehr Ausnahme. Beispiel: McDarmond/West-Autobahn-Strang (s. eigenes Skript-Dokument)
- Binden Mitarbeitende **mehrtägig wie "Große Story"**
- **Nur 1 aktiver Handlungsstrang gleichzeitig** — weitere Anfragen warten, bis der aktuelle abgeschlossen ist
- **Event-Häufigkeit skaliert mit Personalkapazität**: am Spielanfang (1 Redakteur) so gut wie keine Events, Häufigkeit steigt mit wachsendem Team — verhindert Kapazitätskollision und Frühphasen-Stillstand automatisch

## 10. Tech-Stack & Vertrieb

- **Plattform: Webspiel, kein Steam-Release.** Vertrieb/Monetarisierung vorerst zweitrangig
- **Stack:** Vite + React als Grundgerüst, Phaser.js eingebettet für Büro-Navigation/Sprites, React für Menüs/Dialoge/Pitch-Auswahl (der Großteil der UI, s. Wireframes)
- **Workflow:** GitHub-Repo, Entwicklung mit Claude Code, Vercel per GitHub-Verbindung — jeder Push erzeugt automatisch einen teilbaren Link (gut fürs Playtesting mit echten Testpersonen, s. Balance-/Gefühl-Test-Abschnitt weiter oben in der Historie)
- **Speicherstände:** vorerst LocalStorage (reicht fürs Playtesting), Backend/Account-System erst bei Bedarf für geräteübergreifendes Spielen — kein Tag-1-Problem
- Web schließt Steam nicht aus — Electron/NW.js-Verpackung für Steam bliebe später möglich, falls gewünscht

## Noch offen


- [ ] **Einstiegspool-Umfang prüfen:** Text hat ~10 Aufwand-1-Pitches (vermutlich ausreichend), Multimedia/Entwicklung noch nicht auf Aufwand-1-2-Menge geprüft

- [ ] **Abwechslungsmechanik auf Multimedia/Entwicklung übertragen:** bisher nur für Text-Etage im Modell geprüft — auf Multimedia (eigene Basisdauer) muss das noch simuliert werden, Entwicklung braucht es vermutlich nicht (kein Boulevard-Grad dort)
- [ ] **Reale Pitch-Pools vs. Modell-Annahme:** Das Balance-Modell nimmt an, der Spieler kann jeden Tag frei einen beliebigen Boulevard-Grad wählen — in Wirklichkeit ist man an die tatsächlich angebotenen Pitches gebunden (Shuffle-Bag-Pool). Muss noch geprüft werden, ob der reale Pool genug Grad-Varianz an jedem Tag bietet, um die Abwechslungsmechanik überhaupt bedienen zu können

- [ ] **Charakterprofile/Writing:** Wie wird emotionale Bindung ohne Mechanik-Unterschiede erzeugt? (als Nächstes dran)
- [ ] **Positive Events:** konkrete Ausgestaltung, bisher nur negative Events (Große Story) definiert
- [ ] **Feedback-Beat zwischen Tagen:** genaue Darstellung (Ergebniszeile? Kurzvergleich zum Vortag?)
- [ ] **Konkrete Zahlenwerte** für Formel-Konstanten (Anpassungsrate, Preise, Kostenmultiplikatoren, Verlangsamungs-Multiplikator) — erst nach erstem spielbaren Prototyp sinnvoll festlegbar
- [ ] **Etagen-Verteilung der 8 verbleibenden Handlungsstränge:** bisher spielen alle Beispiele (McDarmond, gestrichenes Sid-Griffin) auf der Text-Etage — sollen die restlichen 8 Stränge ausschließlich Text bleiben, oder auch mal auf Multimedia/Entwicklung stattfinden? Falls ja: durch die Kapitel-Kopplung (s. Abschnitt 2) könnten Multimedia-Stränge erst ab Kapitel 2, Entwicklung-Stränge erst ab Kapitel 3 vorkommen
