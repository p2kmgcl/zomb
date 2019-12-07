import CardSet from '../CardSet';

describe('CardSet', () => {
  describe('constructor', () => {
    it('may be initialized with a deck of cards', () => {
      const cards = ['a', 'b', 'c'];
      const set = new CardSet(cards);

      for (const card of cards) {
        expect(set.cards.includes(card)).toBe(true);
      }
    });
  });

  describe('addCards', () => {
    it('allows adding a new card', () => {
      const set = new CardSet([]);
      set.addCards('new card');
      expect(set.cards.includes('new card')).toBe(true);
    });

    it('allows adding an arbitrary number of cards', () => {
      const set = new CardSet([]);
      const newCards = ['one', 'two', 'pi'];

      set.addCards(...newCards);

      for (const newCard of newCards) {
        expect(set.cards.includes(newCard)).toBe(true);
      }
    });
  });

  describe('getCards', () => {
    it('receives the first cards from the set', () => {
      const set = new CardSet(['one', 'two']);
      expect(set.getCards({ amount: 2 })).toEqual(['one', 'two']);
    });

    it('removes the cards from the set', () => {
      const set = new CardSet(['one', 'two']);
      set.getCards({ amount: 1 });
      expect(set.cards.includes('one')).toBe(false);
    });

    it('returns less cards if there are not enough', () => {
      const set = new CardSet(['one']);
      const cards = set.getCards({ amount: 2 });
      expect(cards).toEqual(['one']);
    });
  });

  describe('shuffle', () => {
    it('changes cards positions', () => {
      const cards = ['one', 'two', 'three', 'four'];
      const set = new CardSet(cards);
      set.shuffle();
      expect(set.cards).not.toEqual(cards);
    });

    it('does not add or remove any card', () => {
      const cards = [1, 2, 3, 4];
      const set = new CardSet(cards);
      set.shuffle();

      const setCards = [...set.cards];
      setCards.sort();
      expect(setCards).toEqual(cards);
    });

    it('does not produce same results everytime', () => {
      const cards = ['one', 'two', 'three', 'four'];
      const set = new CardSet(cards);

      set.shuffle();
      const setCardsA = [...set.cards];

      set.shuffle();
      const setCardsB = [...set.cards];

      expect(setCardsA).not.toEqual(setCardsB);
    });
  });
});
