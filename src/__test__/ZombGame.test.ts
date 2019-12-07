import ZombGame from '../ZombGame';

describe('ZombGame', () => {
  describe('constructor', () => {
    it('creates and shuffles a deck', () => {
      const cards = ['z', 'a', 'n', '1'];
      const game = new ZombGame(cards);

      for (const card of cards) {
        expect(game.deck.cards.indexOf(card) !== -1).toBe(true);
      }

      expect(game.deck.cards).not.toEqual(cards);
    });

    it('creates an empty discard pile', () => {
      const game = new ZombGame([]);
      expect(game.discardPile.cards.length).toBe(0);
    });

    it('creates an empty board', () => {
      const game = new ZombGame([]);
      expect(game.board.cards.length).toBe(0);
    });
  });

  describe('draw', () => {
    it('moves some cards from deck to board', () => {
      const cards = ['z', 'a', 'n', '1'];
      const game = new ZombGame(cards);
      const [boardCard, ...deckCards] = game.deck.cards;

      game.draw();

      expect(game.deck.cards).toEqual(deckCards);
      expect(game.board.cards).toEqual([boardCard]);
    });

    it('moves board cards to discard pile', () => {
      const game = new ZombGame([]);

      game.board.addCards('discardPileCard');
      game.draw();

      expect(game.discardPile.cards).toEqual(['discardPileCard']);
    });

    it('moves discard pile to deck if deck is empty', () => {
      const cards = ['a', 'b'];
      const game = new ZombGame([]);

      game.discardPile.addCards(...cards);
      game.draw();

      const allCards = [...game.deck.cards, ...game.board.cards];

      for (const card of cards) {
        expect(allCards.indexOf(card) !== -1).toBe(true);
      }
    });

    it('shuffles deck when it is updated', () => {
      const cards = ['a', 'b'];
      const game = new ZombGame([]);

      game.discardPile.addCards(...cards);
      game.draw();

      expect(game.deck.cards).not.toEqual(cards);
    });
  });
});
