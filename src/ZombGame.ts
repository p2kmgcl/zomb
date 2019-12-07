import CardSet from "./CardSet";

export default class Game {
  readonly discardPile: CardSet<string>;
  readonly board: CardSet<string>;
  readonly deck: CardSet<string>;

  constructor(cards: string[]) {
    this.discardPile = new CardSet([]);
    this.board = new CardSet([]);
    this.deck = new CardSet(cards);

    this.deck.shuffle();
  }

  draw() {
    if (!this.deck.cards.length) {
      this.deck.addCards(
        ...this.discardPile.getCards({ amount: this.discardPile.cards.length })
      );

      this.deck.shuffle();
    }

    const [card] = this.deck.getCards({ amount: 1 });

    this.discardPile.addCards(
      ...this.board.getCards({ amount: this.board.cards.length })
    );

    this.board.addCards(card);
  }
}
