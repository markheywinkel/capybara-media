/**
 * Shuffle-Bag: Pool wird gemischt gezogen, ein Eintrag wiederholt sich erst, nachdem
 * der gesamte Pool einmal komplett gezogen wurde (s. Design-Dok Abschnitt 3).
 */
export class ShuffleBag<T extends { id: string }> {
  private readonly source: readonly T[];
  private drawPile: T[] = [];

  constructor(source: readonly T[]) {
    this.source = source;
    this.refill();
  }

  private refill(): void {
    this.drawPile = shuffle([...this.source]);
  }

  private drawOne(): T {
    if (this.drawPile.length === 0) this.refill();
    return this.drawPile.pop()!;
  }

  /** Zieht `count` unterschiedliche Einträge (innerhalb eines Tages keine Dopplungen). */
  drawUnique(count: number): T[] {
    const picked: T[] = [];
    const seenIds = new Set<string>();
    let guard = 0;
    while (picked.length < count && guard < 1000) {
      guard++;
      const item = this.drawOne();
      if (!seenIds.has(item.id)) {
        seenIds.add(item.id);
        picked.push(item);
      }
    }
    return picked;
  }
}

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
