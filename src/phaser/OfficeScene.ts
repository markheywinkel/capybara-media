import Phaser from 'phaser';

/**
 * Platzhalter-Szene für die spätere Büro-Navigation (Screen 4 der Wireframes).
 * Zeigt nur, dass Phaser eingebettet läuft — noch keine echte Navigation/Sprites.
 */
export class OfficeScene extends Phaser.Scene {
  constructor() {
    super('OfficeScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#e4edf3');

    const floors = [
      { label: 'Etage 3 — Entwicklung (gesperrt bis Kapitel 3)', y: 40, locked: true },
      { label: 'Etage 2 — Multimedia-Redaktion (gesperrt bis Kapitel 2)', y: 110, locked: true },
      { label: 'Etage 1 — Text-Redaktion', y: 180, locked: false },
      { label: 'Chefredakteursbüro', y: 250, locked: false },
    ];

    floors.forEach(({ label, y, locked }) => {
      const rect = this.add.rectangle(200, y, 360, 56, 0xffffff, 1);
      rect.setStrokeStyle(2, locked ? 0x93a8b3 : 0x2b5b7a);
      if (locked) rect.setAlpha(0.5);
      this.add
        .text(200, y, label, {
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '11px',
          color: locked ? '#93a8b3' : '#1e2d35',
          align: 'center',
          wordWrap: { width: 320 },
        })
        .setOrigin(0.5);
    });
  }
}
