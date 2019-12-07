export default class CardSet<T> {
  readonly cards: T[];

  constructor(cards: T[]) {
    this.cards = [...cards];
  }

  addCards(...cards: T[]) {
    for (const card of cards) {
      this.cards.push(card);
    }
  }

  getCards({ amount }: { amount: number }): T[] {
    const cards = [];

    for (let i = 0; i < amount && this.cards.length; i++) {
      cards.push(this.cards.shift());
    }

    return cards;
  }

  shuffle() {
    const oldCards = [...this.cards];

    for (let i = 0; i < this.cards.length; i++) {
      const cardA = this.cards[i];
      const newPosition = Math.floor(Math.random() * this.cards.length);
      const cardB = this.cards[newPosition];

      this.cards[i] = cardB;
      this.cards[newPosition] = cardA;
    }

    if (
      oldCards.length > 1 &&
      oldCards.every((card, i) => this.cards[i] === card)
    ) {
      this.shuffle();
    }
  }
}
