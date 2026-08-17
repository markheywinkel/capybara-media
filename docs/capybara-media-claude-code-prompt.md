Ich baue ein Browser-Spiel namens "Capybara Media" (Arbeitstitel ursprünglich "The Papers") und möchte, dass du das Projekt hier aufsetzt und mit mir weiterentwickelst.

REPO: https://github.com/markheywinkel/capybara-media (aktuell leer)

============================================================
KONTEXT-DATEIEN
============================================================
Im Ordner docs/ liegen folgende Dateien mit dem vollständigen Design-Stand. Bitte lies zuerst capybara-media-design-stand.md vollständig — das ist die Quelle der Wahrheit für alle Spielregeln, alles Folgende hier ist eine Zusammenfassung davon.

- capybara-media-design-stand.md — Haupt-Design-Dokument
- capybara-media-skript-mcdarmond.md — fertiges, template-konformes Story-Event (Vorlage für weitere)
- capybara-media-skript-sid-griffin.md — gestrichenes Beispiel, NICHT umsetzen, nur zur Orientierung was nicht zum Story-Template passt
- capybara-media-pitch-vorlage.md — Pitch-Inhalte für Text/Multimedia/Entwicklung
- capybara-media-wirtschaftsmodell.xlsx — Formel-Referenz für die Wirtschafts-Balance
- capybara-media-interface-wireframes.html — Layout-Referenz für die 5 wichtigsten Screens

============================================================
SETTING & TON
============================================================
- Fiktive, von Tieren bevölkerte Stadt "Capybara D.C." (CDC), unserer Realität nachempfunden, aber Ort/Zeit bewusst vage
- Alles spielt "heute", keine historischen Zeitsprünge
- Spielfigur: Quentin, ein Capybara, Chefredakteur bei "Capybara Media"
- Tier-Cast ist reines Stilmittel, keine mechanische Differenzierung nach Spezies
- Keine ernsthafte politische Dimension — politische Job-Titel (Bürgermeister etc.) nur als Boulevard-Oberfläche (Skandälchen, Possen), keine inhaltlichen politischen Storylines
- Optische Referenz (nicht Teil dieser Aufgabe): 2D-Pixelart, Dave the Diver als Vorbild — cozy, knuffig, niedrigschwellig
- Dialoge im Dave-the-Diver-Stil: reine Textboxen, ein Klick pro Absatz, kein Entscheidungsklick innerhalb einer Szene

============================================================
KERNSCHLEIFE (pro Spieltag)
============================================================
1. Tagesbeginn: Management-Phase — Mitarbeitende einstellen, Etagen bauen
2. "Redaktionskonferenz": pro Etage entweder ein fälliges Handlungsstrang-Event ODER normale Pitch-Auswahl (nie beides gleichzeitig auf derselben Etage). Ein Event pausiert nur die betroffene Etage, andere Etagen laufen unabhängig weiter
3. Produktionsdauer = Etagen-Basisdauer × Besetzungs-Multiplikator × Skill-Lücke-Multiplikator (kein Alles-oder-Nichts, nur Verlangsamung)
4. Veröffentlichung verändert Reichweite/Reputation → daraus ergibt sich täglicher Werbe- und Abo-Erlös
5. Einnahmen ermöglichen mehr/bessere Mitarbeitende und weitere Etagen

============================================================
ETAGEN
============================================================
Drei Etagen, strukturell identisch aufgebaut, je genau 3 feste Personal-Slots (keine Aufrüstung, keine Level-Stufen):

1. Text-Etage — Basisdauer 1 Tag, Rolle: Text-Redakteur, von Spielbeginn an verfügbar
2. Multimedia-Studio (Video+Podcast verschmolzen, EIN Content-Typ) — Basisdauer 2 Tage, Rolle: Multimedia-Redakteur, Kaufmöglichkeit erst ab Kapitel 2 (Tag 51+)
3. Entwicklung (F&E-Wundertüte: Chatbot, synthetischer Video-Host, Spiele-App etc.) — Basisdauer 10-15 Tage, Rolle: Entwicklungs-Redakteur, Kaufmöglichkeit erst ab Kapitel 3 (Tag 101+). Liefert Gesamt-Geld-Push statt Boulevard-Grad-Wirkung, keine strukturelle Dauerwirkung sonst

Etagen sind kaufbar (Kapitel schaltet nur die Kaufmöglichkeit frei, Kontostand entscheidet das genaue Timing). Zeitsprung-Zwischensequenzen zwischen den Kapiteln können den neuen Etagen-Zugang narrativ rahmen.

Jede Rolle ist eindeutig einer Etage zugeordnet — kein geteilter Personal-Pool zwischen Etagen mehr.

Produktionsgeschwindigkeit:
- Besetzungs-Multiplikator auf Basisdauer: 3/3 besetzt ×1, 2/3 ×1,5, 1/3 ×2 (exakte Werte: Playtesting)
- Skill-Lücke-Multiplikator (zusätzlich, multiplikativ): +25% Dauer pro Skill-Punkt, den das Team unter dem Aufwand der gewählten Pitch liegt. Wirkt NUR auf Dauer, nicht auf Ergebnisstärke
- Beispiel: Aufwand 5, Team-Skill 3, volle Besetzung → 1 Tag × 1 × 1,5 = 1,5 Tage

Jede Etage liefert pro Tag 3 Pitches, davon wird 1 produziert (bewusster Pitch-Überschuss für echte Auswahl).

Einstiegspool: die ersten ~5-7 Spieltage ziehen nur aus einer Teilmenge mit Aufwand 1-2, danach der volle Pool — verhindert Frühphasen-Frustration durch Skill-Lücke.

============================================================
PITCH-SYSTEM
============================================================
Jede Pitch hat 2 Werte (auf Entwicklung: Aufwand + Bonusgröße statt Boulevard-Grad):

1. Boulevard-Grad (Skala 1-5, 1=investigativ, 5=Boulevard) — steuert Reichweitenpotenzial vs. Reputationsrisiko. VERDECKT im Spiel, nur die Headline zeigt es an (Spieler muss am Schreibstil erahnen). Headlines brauchen konsistente Stilkonvention: Ausrufezeichen/Superlative = boulevardesk, sachlich/Konjunktiv/Zahlen = investigativ. Diese Konvention muss über das ganze Spiel konsistent bleiben.
2. Aufwand (Skala 1-5) — benötigtes Skill-Level der Rolle. SICHTBAR, ermöglicht informierte Personalzuteilung.

Pitch-Pool-Mechanik: Shuffle-Bag (Pool wird gemischt gezogen, wiederholt sich erst nach vollständigem Durchlauf, kein Unikat-Zwang). Ziel-Poolgrößen für 150 Spieltage: Text ~60-90, Multimedia ~38-53, Entwicklung ~18-23 (aktuelle Bestände stehen in capybara-media-pitch-vorlage.md).

Zusätzlich geplant, aber noch nicht umgesetzt: rein kosmetischer Themen-Flavor-Tag (Sport, Klatsch, Wissenschaft...) ohne Zahlenwirkung. Format-Eignung (Text/Video/Audio) als dritte Achse ist bewusst zurückgestellt.

============================================================
PERSONAL-SYSTEM
============================================================
- Keine Krankheiten, keine Kündigungen — Mitarbeitende bleiben dauerhaft verfügbar
- Einheitlicher Wert "Skill", Skala 1-5, für alle Mitarbeitenden. Start: alle = 2
- Fortbilden kostet Geld UND setzt die Person 3 Tage außer Gefecht (selbstgewählter Ausfall)
- Alternative: Arbeitsmarkt mit bereits gelevelten Mitarbeitenden — höherer Einzelpreis, aber in Summe günstiger als selbst hochleveln, dafür ohne 3-Tage-Ausfall (Kauf-vs-Ausbilden-Trade-off)
- Bewusste Design-Entscheidung: reines Kostenoptimierungsproblem, KEINE individuellen Fähigkeits-Boni oder Persönlichkeitsmechanik bei Hireable-Mitarbeitenden. Emotionale Bindung entsteht nur über Writing/Profile, nicht über Mechanik
- Norman (Kerncast) belegt KEINEN Slot und hat KEINEN Skill-Wert — rein narrative Mentor-Figur, kann nicht ersetzt/gefeuert werden
- Startbesetzung Text-Etage: Gwen und Lizzy sind von Anfang an angestellt (2 von 3 Slots, Skill 2), dritter Slot offen

============================================================
WIRTSCHAFT & BALANCE
============================================================
Zwei Erlösquellen: Lesermarkt (Abos), Werbemarkt. Zentrale Werte: Reichweite, Reputation.

- Werbe-Erlös = Reichweite × Werbepreis-pro-Kontakt(Reputation) — Erlös pro Reichweite hängt von Reputation ab
- Abo-Erlös = Abonnenten × Preis-pro-Abo. Abonnenten sind ein TRÄGER Wert: Ziel-Abonnenten = Reichweite × Konversionsrate(Reputation); Abonnenten(morgen) = Abonnenten(heute) + Anpassungsrate × (Ziel − Abonnenten(heute))
- Kosten = Gehälter + Etagen-Fixkosten (unabhängig von Besetzung) + Reichweiten-Infrastrukturkosten (unabhängig von Reputation) → macht "Reichweite ohne Qualität" zum Verlustgeschäft, nicht nur suboptimal
- Game-Over-Bedingung: Bankrott (Kontostand unter 0)

Abwechslungsmechanik (durch Balance-Test in der Excel-Datei bestätigt): Reichweite und Reputation hängen zusätzlich von der Abweichung des heutigen Boulevard-Grads vom gleitenden 5-Tage-Durchschnitt ab. Monotonie (dauerhaft gleicher Grad) wird bestraft, Abwechslung belohnt. Ziel: sowohl "immer Boulevard" als auch "immer Investigativ" führen in den Bankrott, nur gemischtes Spiel ist nachhaltig profitabel. Die genaue Formel-Struktur (inkl. der Konstanten, mit denen das im Test funktioniert hat) steht in der Excel-Datei — bitte als Ausgangspunkt für die Implementierung nehmen, exakte Werte sind noch nicht final austariert.

Alle Konstanten (Preise, Kostenmultiplikatoren, Anpassungsrate etc.) sind aktuell Platzhalter aus dem Balance-Test, keine finalen Werte.

============================================================
SCOPE & STRUKTUR
============================================================
- Zielsitzung: 1-2 Stunden pro Spielsitzung, Gesamtspiel über mehrere Sitzungen
- Spiellänge: 150 Spieltage, FIX, in 3 Kapiteln à 50 Tage
- Zwischen Kapiteln: Zeitsprung-Zwischensequenz, lässt die Ingame-Zeit länger wirken (erzählt als "erfolgreiches Jahr" trotz nur 150 simulierter Tage)

============================================================
EVENTS ("GROSSE STORY")
============================================================
Seltene Pitch-Kategorie innerhalb der normalen Tagesauswahl (nicht zu verwechseln mit Handlungssträngen):
- Text-Etage: bindet 2-3 Tage (statt 1)
- Multimedia: eigene, längere Bindungsdauer nötig (z.B. 4-6 Tage, gegen Basisdauer 2 — Playtesting)
- Entwicklung: KEINE Große-Story-Variante (die Etage ist strukturell bereits "Große Story")
- Bindung blockiert nicht den Tag, reduziert nur den Pitch-Nachschub der gebundenen Person
- Überdurchschnittlicher Reputations-/Reichweitengewinn als Belohnung für die Wartezeit
- Bleibt Sonderfall, wird NICHT zur dritten Standard-Pitch-Achse

============================================================
HANDLUNGSSTRÄNGE (NARRATIVE STORY-QUESTS)
============================================================
Struktur: 3 Akte × 3 Storys = 9 Handlungsstränge total (1 fertig, 8 noch zu schreiben).

Roter Faden über alle 9: Journalismus im Kapitalismus — Qualität vs. Reichweite, Moral vs. Geld. Konflikte verschärfen sich von Akt zu Akt.

Standard-Story-Template (gilt für ALLE 9 Stränge):
1. Zwei entgegengesetzte Positionen werden im Auftritt vorgestellt (1-2 Figuren erscheinen nacheinander im Dialog)
2. Norman ordnet als Mentor zwischen den Positionen ein
3. Spieler wählt bei der Pitch-Entscheidung: Bericht Seite A, Bericht Seite B, ODER gar keinen Bericht (dritte Option ist ein kostenloser Skip, verbraucht keine Produktionskapazität)
4. Auflösung: beide Figuren geben ein Statement ab (zufrieden/enttäuscht je nach gewählter Seite), plus einmaliger Bonus entlang bestehender Werte (Geld ODER Reputation — keine dritte neue Konsequenz-Ebene)

Mechanik: Meter/Schwellenwert-Modell statt Entscheidungsbaum (linearer statt exponentieller Schreibaufwand). Ein wiederverwendbares Template pro Figuren-Paar, nur mit neuen Werten/Texten befüllt.

Event-Auslöser (gilt für alle Stränge): ODER-Verknüpfung aus drei Bedingungen — Reichweiten-Schwelle, Geld-Schwelle, oder Tage seit letztem Beat, je nachdem was zuerst erreicht wird. Kein echter Zufall, aber spielstil-abhängig unvorhersehbar.

Regeln:
- Handlungsstrang-Events binden Mitarbeitende mehrtägig wie "Große Story" (außer der "Nichts schreiben"-Option, die ist ein kostenloser Skip)
- Nur 1 aktiver Handlungsstrang gleichzeitig — weitere warten
- Event-Häufigkeit skaliert mit Personalkapazität (am Spielanfang fast keine Events, mehr mit wachsendem Team)
- Noch offen: ob die restlichen 8 Stränge ausschließlich auf der Text-Etage spielen oder auch auf Multimedia/Entwicklung (dann erst ab jeweiligem Kapitel möglich) — bei Bedarf bitte nachfragen, nicht selbst entscheiden

Fertige Referenz-Story: McDarmond/West-Autobahn-Konflikt (s. capybara-media-skript-mcdarmond.md) — Bürgermeister McDarmond will eine Autobahn bauen, Wissenschaftler Prof. West warnt vor Umweltschäden für den Nachtwüstenfuchs. Zeigt das komplette Template inkl. aller drei Pitch-Optionen und beider Auflösungs-Zweige.

============================================================
CAST
============================================================
Setting: Capybara D.C. (CDC)

Kerncast (mit Tiefe/Writing):
- Quentin — Spielercharakter, Chefredakteur, Capybara
- Norman — ehemaliger Chefredakteur, hat Capybara Media an Quentin übergeben, begleitet ihn im ersten Jahr als Senior Editor/Mentor, Waschbär. Rein narrativ, kein Slot, kein Skill-Wert
- Gwen — Text-Redakteurin, Eichhörnchen (startet bereits angestellt)
- Lizzy — Text-Redakteurin, Echse (startet bereits angestellt)

News-Figuren (mit Tiefe/Writing, treten wiederkehrend in Storys auf):
- Francis McDarmond — Bürgermeister, Capybara, "böser" Charakter, politisch/seriös (nur Boulevard-Oberfläche)
- Ivy Nix — politische Gegenspielerin, Schildkröte, freundlich, seriös + softe Seite
- Amber Abberton — Popstar, Capybara, eitel-witzig, soft/boulevardesk
- Prof. Norton West — Wissenschaftler, Eule, ernst, seriös
- Sid Griffin — Boxer, Känguru, dödelig, soft
- Lola Lombardo — Polizeichefin, Hase, ernst bis boulevardesk
- Bruno — Sids Assistent, Koala (aktuell ohne aktive Story)

Hireable Mitarbeitende (nur Namen+Tags, kein Writing-Aufwand):
- Text-Redakteure: Vivian (Vogelstrauss, Boulevard), Ed (Biber, Investigativ), Grant (Erdmännchen, Boulevard), Xenia (Schwein, Investigativ), Simon (Bär, Boulevard), Totoro (Bär), Chip (Maus)
- Multimedia-Redakteure: Pepper (Frosch), Clementine (Capybara), Susan (Pferd), Mia (Reh), Steve (Kuh), Alma (Capybara), Lou (Echse), Oliver (Katze)
- Entwicklungs-Redakteure: Jojo (Füchsin), Ursula (Tintenfisch), Vincent (Capybara)

Prozess-Hinweis: Jeder neue Charakter, der im Writing/in Skripten auftaucht, muss ins Cast-Dokument ergänzt werden.

============================================================
TECH-STACK
============================================================
- Vite + React (TypeScript) als Grundgerüst
- Phaser.js eingebettet für die Büro-Navigation/Sprites
- React für Menüs, Dialoge, Pitch-Auswahl (Großteil der UI, s. Wireframes)
- Speicherstände vorerst LocalStorage (Backend erst bei Bedarf für geräteübergreifendes Spielen)
- Deploy über Vercel, verbunden mit diesem GitHub-Repo — jeder Push soll automatisch einen teilbaren Preview-Link erzeugen
- Kein Steam-Release geplant, Web schließt das aber nicht für später aus

============================================================
BEWUSST NOCH OFFENE PUNKTE (nicht selbst entscheiden, nachfragen)
============================================================
- Einstiegspool-Umfang bei Multimedia/Entwicklung noch nicht geprüft
- Abwechslungsmechanik ist bisher nur für Text-Etage durchgerechnet, nicht für Multimedia
- Reale Pitch-Pool-Varianz vs. Modell-Annahme im Wirtschaftsmodell noch nicht abgeglichen
- Charakterprofile/Writing-Stil für Kerncast/News-Figuren noch nicht ausgearbeitet
- Positive Event-Varianten noch nicht konkretisiert (nur negative "Große Story" existiert)
- Genaue Feedback-Beat-Darstellung zwischen Tagen noch nicht festgelegt
- Alle numerischen Formel-Konstanten sind Platzhalter, brauchen Playtesting
- Etagen-Verteilung der 8 verbleibenden Handlungsstränge (nur Text oder auch Multimedia/Entwicklung)

============================================================
AUFGABE
============================================================
1. Richte das Projektgerüst ein (Vite+React+TS+Phaser), committe es ins Repo
2. Baue zuerst die Kernschleife aus Screen 1 und 2 der Wireframes (Redaktionskonferenz + Tages-Ergebnis) als funktionsfähigen Klick-Durchlauf, noch ohne finale Grafik/Assets — nur mit Platzhaltern
3. Frag mich, bevor du Design-Entscheidungen triffst, die nicht eindeutig aus den Dokumenten hervorgehen — insbesondere bei den oben gelisteten offenen Punkten
