import './gestures';
import getDeck from './getDeck';
import { updateCard, updateDifficulty } from './ui';
import ZombGame from './ZombGame';

const game = new ZombGame(getDeck());
const drawButton = document.getElementById('drawButton') as HTMLButtonElement;
const difficulty = document.getElementById(
  'difficultyInput',
) as HTMLInputElement;

const getDifficulty = (): number =>
  Math.min(Math.max(parseInt(difficulty.value, 10) || 0, 0), 3);

difficulty.addEventListener('change', () => {
  updateDifficulty(getDifficulty());
});

drawButton.addEventListener('click', () => {
  game.draw();

  updateCard(
    getDifficulty(),
    game.board.cards[0],
    game.deck.cards.length,
    game.discardPile.cards.length,
  );
});

navigator.serviceWorker.register('/service-worker.js');
