import { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { OfficeScene } from './OfficeScene';

/**
 * Minimaler Phaser-Einbettungs-Nachweis fürs Projektgerüst — die eigentliche
 * Büro-Navigation (Screen 4 der Wireframes) ist noch nicht Teil dieser Iteration.
 */
export function PhaserOffice() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 400,
      height: 320,
      parent: containerRef.current,
      scene: [OfficeScene],
      backgroundColor: '#e4edf3',
    });

    return () => game.destroy(true);
  }, []);

  return <div ref={containerRef} className="phaser-office" />;
}
