import quentinNeutral from './characters/quentin-neutral.png';
import quentinFroh from './characters/quentin-froh.png';
import quentinVeraergert from './characters/quentin-veraergert.png';
import normanNeutral from './characters/norman-neutral.png';
import normanFroh from './characters/norman-froh.png';
import normanVeraergert from './characters/norman-veraergert.png';
import gwenNeutral from './characters/gwen-neutral.png';
import lizzyNeutral from './characters/lizzy-neutral.png';

import chefredakteursbuero from './backgrounds/chefredakteursbuero.png';
import textEtage from './backgrounds/text-etage.png';
import multimediaEtage from './backgrounds/multimedia-etage.png';
import entwicklungEtage from './backgrounds/entwicklung-etage.png';
import hauptmenue from './backgrounds/hauptmenue.png';

import iconReichweite from './ui/icon-reichweite.png';
import iconReputation from './ui/icon-reputation.png';
import iconGeld from './ui/icon-geld.png';
import iconEtageText from './ui/icon-etage-text.png';
import iconEtageMultimedia from './ui/icon-etage-multimedia.png';
import iconEtageEntwicklung from './ui/icon-etage-entwicklung.png';
import kalender from './ui/kalender.png';
import pitchCard from './ui/pitch-card.png';
import tagesErgebnisPanel from './ui/tages-ergebnis-panel.png';
import dialogBox from './ui/dialog-box.png';
import buttonRedaktionskonferenz from './ui/button-redaktionskonferenz.png';

/**
 * Charakter-Porträts (Kerncast). Nur die Startbesetzung Text-Etage (Gwen, Lizzy) ist bereits
 * verdrahtet — News-Figuren/Hireable-Sprites liegen unter characters/ bereit für Story-Dialoge
 * bzw. den Arbeitsmarkt-Screen.
 */
export const CHARACTER_ART: Record<string, string> = {
  quentin: quentinNeutral,
  gwen: gwenNeutral,
  lizzy: lizzyNeutral,
};

export const EXPRESSIONS = {
  quentin: { neutral: quentinNeutral, froh: quentinFroh, veraergert: quentinVeraergert },
  norman: { neutral: normanNeutral, froh: normanFroh, veraergert: normanVeraergert },
};

export const BACKGROUNDS = {
  chefredakteursbuero,
  textEtage,
  multimediaEtage,
  entwicklungEtage,
  hauptmenue,
};

export const UI = {
  iconReichweite,
  iconReputation,
  iconGeld,
  iconEtageText,
  iconEtageMultimedia,
  iconEtageEntwicklung,
  kalender,
  pitchCard,
  tagesErgebnisPanel,
  dialogBox,
  buttonRedaktionskonferenz,
};
