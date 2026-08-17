import type { BoulevardPitch, EntwicklungPitch } from '../types';

/**
 * Pitch-Inhalte, zusammengeführt aus docs/capybara-media-pitch-vorlage.md und
 * docs/capybara-media-pitch-review.html (Duplikate zwischen beiden Quellen entfernt).
 *
 * Poolgrößen aktuell: Text 46, Multimedia 22, Entwicklung 14 — noch unter den
 * Zielgrößen aus dem Design-Dok (Text 60-90, Multimedia 38-53, Entwicklung 18-23)
 * für 150 Spieltage. Das ist der dokumentierte aktuelle Bestand, kein Bug.
 */

export const TEXT_PITCHES: BoulevardPitch[] = [
  { id: 'tx-01', floor: 'text', headline: 'Sauna im Gästehaus: So dekadent leben die Gänse von CDC', boulevardGrade: 5, effort: 3 },
  { id: 'tx-02', floor: 'text', headline: 'Großer Selbsttest: Ich habe in allen Biber-Bars von CDC getrunken', boulevardGrade: 4, effort: 5 },
  { id: 'tx-03', floor: 'text', headline: '»Hier ist es wunderschön!«: Wie die Schlangen von CDC die Kanalisation erobern', boulevardGrade: 3, effort: 2 },
  { id: 'tx-04', floor: 'text', headline: 'Alles nur Plagiate? Die Kunstsammlung von Bürgermeister McDarmond', boulevardGrade: 5, effort: 1 },
  { id: 'tx-05', floor: 'text', headline: 'Amber und Sid: Was ist da zwischen den beiden?', boulevardGrade: 5, effort: 2 },
  { id: 'tx-06', floor: 'text', headline: 'Amber und Sid: Heimliches Liebesglück im Skiurlaub?', boulevardGrade: 5, effort: 2 },
  { id: 'tx-07', floor: 'text', headline: 'McDarmonds Lieblingsbücher: Was der Bürgermeister nach Feierabend liest', boulevardGrade: 3, effort: 1 },
  { id: 'tx-08', floor: 'text', headline: 'Bürgermeister McDarmond empfängt Amber Abberton zum Brunch', boulevardGrade: 3, effort: 2 },
  { id: 'tx-09', floor: 'text', headline: 'Gewalt im Waschbärviertel! Banden geraten in Straßenkampf', boulevardGrade: 3, effort: 3 },
  { id: 'tx-10', floor: 'text', headline: 'Das liest CDC: Die besten Sommerbücher', boulevardGrade: 2, effort: 1 },
  { id: 'tx-11', floor: 'text', headline: 'Filmstars kommen zum Capybara-Preis: Wir waren am roten Teppich dabei', boulevardGrade: 2, effort: 2 },
  { id: 'tx-12', floor: 'text', headline: 'Panik im Köngurubezirk! Wer stiehlt die Mülltonnen?', boulevardGrade: 3, effort: 3 },
  { id: 'tx-13', floor: 'text', headline: 'CDC ist das neue Manhattan: Warum die Wohnungspreise drastisch steigen', boulevardGrade: 1, effort: 3 },
  { id: 'tx-14', floor: 'text', headline: 'CDC im Herbst entkommen: Die schönsten Reiseziele', boulevardGrade: 3, effort: 1 },
  { id: 'tx-15', floor: 'text', headline: 'CDC-Wirtschaftsweise zweifeln an neuem Sparkurs', boulevardGrade: 1, effort: 3 },
  { id: 'tx-16', floor: 'text', headline: 'Umfragewerte von Bürgermeister McDarmond sinken', boulevardGrade: 1, effort: 2 },
  { id: 'tx-17', floor: 'text', headline: 'Polizei plant neues Spezialkommando: Lola Lombardo im Interview', boulevardGrade: 1, effort: 3 },
  { id: 'tx-18', floor: 'text', headline: 'Pistolen, aber keine Magazine: Ist CDCs Polizei einsatzbereit?', boulevardGrade: 1, effort: 4 },
  { id: 'tx-19', floor: 'text', headline: 'Klage vor Gericht: Hyänen fühlen sich von Löwen diskriminiert', boulevardGrade: 1, effort: 2 },
  { id: 'tx-20', floor: 'text', headline: '»Niemand versteht uns«: Affengemeinde mobilisiert Tausende zur Demo', boulevardGrade: 1, effort: 1 },
  { id: 'tx-21', floor: 'text', headline: 'Hitzewelle in CDC: Von den Elefanten lernen, cool zu bleiben', boulevardGrade: 2, effort: 2 },
  { id: 'tx-22', floor: 'text', headline: 'Schneesturm droht CDC abzuschneiden', boulevardGrade: 2, effort: 1 },
  { id: 'tx-23', floor: 'text', headline: 'Nur noch Regen: Wetteraussichten für CDC sind trübe', boulevardGrade: 2, effort: 1 },
  { id: 'tx-24', floor: 'text', headline: "Schlaflos in CDC: Die besten Nachtclubs von Owl Hill bis Old Ape's Tree", boulevardGrade: 3, effort: 4 },
  { id: 'tx-25', floor: 'text', headline: 'Neue Tram begeistert Einwohner: CDC ist nun noch besser vernetzt', boulevardGrade: 1, effort: 3 },
  { id: 'tx-26', floor: 'text', headline: '»The Rise of the Sea Lions 3«: Blockbuster startet erfolgreich im Kino', boulevardGrade: 3, effort: 1 },
  { id: 'tx-27', floor: 'text', headline: 'Exklusiv: Interne Dokumente zeigen Verzögerungen beim Brückenbau', boulevardGrade: 1, effort: 4 },
  { id: 'tx-28', floor: 'text', headline: 'Schockierend! Diese Fischart lebt jetzt mitten in der Innenstadt', boulevardGrade: 4, effort: 2 },
  { id: 'tx-29', floor: 'text', headline: 'Delfine fordern eigenen Hafenabschnitt — Stadtrat uneins', boulevardGrade: 2, effort: 3 },
  { id: 'tx-30', floor: 'text', headline: 'Sensation! Erdmännchen-Gang knackt Rekord bei Bankraub-Versuchen (0)', boulevardGrade: 5, effort: 1 },
  { id: 'tx-31', floor: 'text', headline: 'Prof. West warnt: CDCs Grundwasserspiegel sinkt bedenklich', boulevardGrade: 1, effort: 4 },
  { id: 'tx-32', floor: 'text', headline: 'Ist Amber Abbertons neues Album nur recycelter Kitsch?', boulevardGrade: 4, effort: 2 },
  { id: 'tx-33', floor: 'text', headline: 'Restaurantkritik: Das neue Bambus-Bistro im Pandaviertel', boulevardGrade: 2, effort: 1 },
  { id: 'tx-34', floor: 'text', headline: 'Katzenbande terrorisiert Vorstadt — Anwohner fordern Maßnahmen', boulevardGrade: 3, effort: 2 },
  { id: 'tx-35', floor: 'text', headline: 'Lombardo kündigt neue Streifenwagen-Flotte an', boulevardGrade: 2, effort: 2 },
  { id: 'tx-36', floor: 'text', headline: 'Report: So marode sind CDCs Schulen wirklich', boulevardGrade: 1, effort: 4 },
  { id: 'tx-37', floor: 'text', headline: 'Diese fünf Cafés solltest du in CDC probiert haben', boulevardGrade: 2, effort: 1 },
  { id: 'tx-38', floor: 'text', headline: 'Nager-Mafia? Gerüchte um organisiertes Verbrechen in der Kanalisation', boulevardGrade: 4, effort: 3 },
  { id: 'tx-39', floor: 'text', headline: 'CDC-Symphonieorchester kündigt neue Saison an', boulevardGrade: 2, effort: 1 },
  { id: 'tx-40', floor: 'text', headline: 'Exklusiv: Amber Abberton über Erfolgsdruck und schlaflose Nächte', boulevardGrade: 3, effort: 2 },
  { id: 'tx-41', floor: 'text', headline: 'Studie: Immer mehr junge Tiere ziehen aus CDC weg', boulevardGrade: 1, effort: 3 },
  { id: 'tx-42', floor: 'text', headline: 'Bürgermeister McDarmond eröffnet neuen Kreisverkehr — mit Fanfare', boulevardGrade: 3, effort: 1 },
  { id: 'tx-43', floor: 'text', headline: 'Wal-Sichtung sorgt für Verkehrschaos an der Uferpromenade', boulevardGrade: 3, effort: 2 },
  { id: 'tx-44', floor: 'text', headline: 'CDCs Müllabfuhr streikt: Wer räumt jetzt den Unrat weg?', boulevardGrade: 2, effort: 3 },
  { id: 'tx-45', floor: 'text', headline: 'Stadtkämmerei veröffentlicht Jahresbericht: Defizit wächst', boulevardGrade: 1, effort: 3 },
  { id: 'tx-46', floor: 'text', headline: 'Wir haben McDarmonds Reden-Schreiber getroffen: Ein Insider packt aus', boulevardGrade: 4, effort: 3 },
];

export const MULTIMEDIA_PITCHES: BoulevardPitch[] = [
  { id: 'mm-01', floor: 'multimedia', headline: 'Ich habe 24 Stunden im Rathaus von CDC verbracht (SCHOCKIEREND)', boulevardGrade: 4, effort: 2 },
  { id: 'mm-02', floor: 'multimedia', headline: 'Wie CDC seine Mülltrennung organisiert — eine Reportage', boulevardGrade: 1, effort: 3 },
  { id: 'mm-03', floor: 'multimedia', headline: 'DAS ist Amber Abbertons Geheimnis! (ihr Friseur hat ausgepackt)', boulevardGrade: 5, effort: 2 },
  { id: 'mm-04', floor: 'multimedia', headline: 'Nachtwüstenfuchs in Gefahr? Wir waren vor Ort', boulevardGrade: 2, effort: 4 },
  { id: 'mm-05', floor: 'multimedia', headline: 'So trainiert Boxer Sid WIRKLICH (exklusive Bilder)', boulevardGrade: 4, effort: 3 },
  { id: 'mm-06', floor: 'multimedia', headline: 'CDC-Verkehrschaos: Wir haben nachgefragt, warum niemand etwas tut', boulevardGrade: 2, effort: 3 },
  { id: 'mm-07', floor: 'multimedia', headline: 'Prof. West erklärt: Was bedeutet der Klimawandel für CDC?', boulevardGrade: 1, effort: 4 },
  { id: 'mm-08', floor: 'multimedia', headline: 'Diese Straßenkünstler bringen CDC zum Staunen', boulevardGrade: 2, effort: 2 },
  { id: 'mm-09', floor: 'multimedia', headline: 'Polizeichefin Lombardo im Großeinsatz — Kamera war dabei', boulevardGrade: 3, effort: 3 },
  { id: 'mm-10', floor: 'multimedia', headline: 'TOP 10 Peinlichste Momente aus dem Rathaus', boulevardGrade: 5, effort: 1 },
  { id: 'mm-11', floor: 'multimedia', headline: 'CDCs vergessene Kanalisation: Eine Bestandsaufnahme', boulevardGrade: 1, effort: 4 },
  { id: 'mm-12', floor: 'multimedia', headline: 'Wir haben Amber Abbertons Konzert-Tour begleitet — hinter den Kulissen', boulevardGrade: 3, effort: 3 },
  { id: 'mm-13', floor: 'multimedia', headline: 'ANGST-Test: Wie sicher sind CDCs Spielplätze WIRKLICH?', boulevardGrade: 4, effort: 2 },
  { id: 'mm-14', floor: 'multimedia', headline: 'Wir haben McDarmonds Reden faktengecheckt (LIVE-Reaktion)', boulevardGrade: 3, effort: 3 },
  { id: 'mm-15', floor: 'multimedia', headline: 'Interview mit Prof. West: Die Zukunft der Nachtwüstenfüchse', boulevardGrade: 1, effort: 3 },
  { id: 'mm-16', floor: 'multimedia', headline: 'DIESE Kanalisation ist ein Nager-Paradies (Doku)', boulevardGrade: 2, effort: 3 },
  { id: 'mm-17', floor: 'multimedia', headline: '24 Stunden mit Boxer Sid vor dem großen Kampf', boulevardGrade: 4, effort: 2 },
  { id: 'mm-18', floor: 'multimedia', headline: 'Wir haben CDCs Schulen besucht — was läuft schief?', boulevardGrade: 1, effort: 4 },
  { id: 'mm-19', floor: 'multimedia', headline: 'Katzenbande vs. Anwohner: Wir haben beide Seiten befragt', boulevardGrade: 2, effort: 3 },
  { id: 'mm-20', floor: 'multimedia', headline: 'Amber Abbertons peinlichste Bühnenmomente (COMPILATION)', boulevardGrade: 5, effort: 1 },
  { id: 'mm-21', floor: 'multimedia', headline: 'Ein Tag im Leben eines Müllabfuhr-Mitarbeiters', boulevardGrade: 1, effort: 2 },
];

export const ENTWICKLUNG_PITCHES: EntwicklungPitch[] = [
  { id: 'ev-01', floor: 'entwicklung', headline: 'Chat mit synthetischer Amber — KI-Popstar-Chatbot, der nur in Superlativen spricht', bonusSize: 'groß', effort: 4 },
  { id: 'ev-02', floor: 'entwicklung', headline: 'VR-Boxring: Virtueller Kampf gegen Sid Griffin (der ständig über die eigenen Füße stolpert)', bonusSize: 'groß', effort: 5 },
  { id: 'ev-03', floor: 'entwicklung', headline: '3D-Bürotour durch McDarmonds Amtsstube — inklusive seiner zweifelhaften Kunstsammlung', bonusSize: 'mittel', effort: 3 },
  { id: 'ev-04', floor: 'entwicklung', headline: 'Autobahn-Bau-Simulator — satirisches Browser-Mini-Spiel zur Autobahn-Story', bonusSize: 'groß', effort: 5 },
  { id: 'ev-05', floor: 'entwicklung', headline: 'Synthetischer Lombardo-Podcast-Host, der alte Kriminalfälle dramatisch "nacherzählt"', bonusSize: 'mittel', effort: 4 },
  { id: 'ev-06', floor: 'entwicklung', headline: '"Werde zum Nachtwüstenfuchs"-Foto-Filter fürs Leser-Profil', bonusSize: 'klein', effort: 2 },
  { id: 'ev-07', floor: 'entwicklung', headline: 'CDC-Bürgermeister-Wahlkampf-Bingo-App', bonusSize: 'klein', effort: 2 },
  { id: 'ev-08', floor: 'entwicklung', headline: 'Synthetischer Wetterfrosch-Moderator fürs Multimedia-Studio', bonusSize: 'mittel', effort: 3 },
  { id: 'ev-09', floor: 'entwicklung', headline: 'Interaktive Kanalisationskarte mit Nager-Mafia-Verschwörungstheorien', bonusSize: 'mittel', effort: 4 },
  { id: 'ev-10', floor: 'entwicklung', headline: 'Deepfake-Bürgermeister-Reden-Generator — lässt McDarmond herrlichen Unsinn sagen', bonusSize: 'groß', effort: 4 },
  { id: 'ev-11', floor: 'entwicklung', headline: 'Prof.-West-Wissenschafts-Quiz — mit absichtlich falschen Antwortoptionen von McDarmond', bonusSize: 'klein', effort: 2 },
  { id: 'ev-12', floor: 'entwicklung', headline: 'Riech-o-Meter: KI errät per Foto, wie McDarmonds Kunstsammlung wohl riecht', bonusSize: 'klein', effort: 1 },
  { id: 'ev-13', floor: 'entwicklung', headline: 'Sid-Griffin-Zitter-Filter: dein Video bekommt Boxhandschuh-Wackelkamera-Effekt', bonusSize: 'klein', effort: 2 },
  { id: 'ev-14', floor: 'entwicklung', headline: '"Wie riecht dein Artikel?"-KI-Gimmick für die Leser-App', bonusSize: 'klein', effort: 1 },
];

/** Einstiegspool: die ersten ENTRY_POOL_DAYS Spieltage ziehen nur aus Pitches mit Aufwand 1-2. */
export function entryPoolFilter(p: { effort: number }): boolean {
  return p.effort <= 2;
}
