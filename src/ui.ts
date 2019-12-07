import abominationURL from './assets/abomination.png';
import doubleURL from './assets/double.png';
import fatActivateURL from './assets/fat_activate.png';
import fatSpawnURL from './assets/fat_spawn.png';
import necromancerURL from './assets/necromancer.png';
import nothingURL from './assets/nothing.png';
import runnerActivateURL from './assets/runner_activate.png';
import runnerSpawnURL from './assets/runner_spawn.png';
import walkerActivateURL from './assets/walker_activate.png';
import walkerSpawnURL from './assets/walker_spawn.png';

const DIFFICULTY_LEVELS = ['azul', 'naranja', 'amarillo', 'rojo'];
const DIFFICULTY_TO_COLOR = ['#0074D9', '#FFDC00', '#FF851B', '#FF4136'];
const DIFFICULTY_TO_LENGTH = [3.5, 34.5, 65.5, 100];

const difficulty = document.getElementById('difficulty');
const difficultyText = document.getElementById('difficultyText');
const deckCount = document.getElementById('deckCount');
const discardCount = document.getElementById('discardCount');

let cardBox = null;

const random = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export function updateDifficulty(difficultyValue: number) {
  difficultyText.innerText =
    DIFFICULTY_LEVELS[difficultyValue] || DIFFICULTY_LEVELS[0];

  const color = DIFFICULTY_TO_COLOR[difficultyValue];
  const length = DIFFICULTY_TO_LENGTH[difficultyValue];

  difficulty.style.backgroundImage = `
    linear-gradient(90deg, ${color} 0%, ${color} ${length -
    20}%, transparent ${length + 20}%)
  `;
}

export function updateCard(
  difficulty: number,
  card: string,
  deckCardCount: number,
  discardPileCardCount: number,
) {
  const cardLine = card.split('\n')[difficulty] || card;
  const [data = ''] = /[0-9]+/.exec(cardLine) || [];
  const number = data ? parseInt(data, 10) : 0;
  let url = nothingURL;
  let text = 'No ocurre nada';

  if (cardLine.startsWith('double')) {
    url = doubleURL;
    text = 'Aparición doble';
  } else if (cardLine.startsWith('necromancer')) {
    url = necromancerURL;
    text = 'Nigromante';
  } else if (cardLine.startsWith('abomination')) {
    url = abominationURL;
    text = 'Abominación';
  } else if (cardLine.startsWith('spawn')) {
    text = `${number === 1 ? 'Aparece' : 'Aparecen'} ${number}`;

    if (cardLine.endsWith('walker')) {
      url = walkerSpawnURL;
      text = `${text} ${number === 1 ? 'caminante' : 'caminantes'}`;
    } else if (cardLine.endsWith('runner')) {
      url = runnerSpawnURL;
      text = `${text} ${number === 1 ? 'corredor' : 'corredores'}`;
    } else if (cardLine.endsWith('fat')) {
      url = fatSpawnURL;
      text = `${text} ${number === 1 ? 'gordo' : 'gordos'}`;
    }
  } else if (cardLine.startsWith('activate')) {
    text = 'Se activan todos los';

    if (cardLine.endsWith('walker')) {
      url = walkerActivateURL;
      text = `${text} caminantes`;
    } else if (cardLine.endsWith('runner')) {
      url = runnerActivateURL;
      text = `${text} corredores`;
    } else if (cardLine.endsWith('fat')) {
      url = fatActivateURL;
      text = `${text} gordos`;
    }
  }

  // Change numbers

  deckCount.innerText = deckCardCount.toString();
  discardCount.innerText = discardPileCardCount.toString();

  // Generate new card

  const cardWrapper = document.getElementById('card') as HTMLElement;
  const newCardWrapper = cardWrapper.cloneNode(true) as HTMLElement;
  const newCardElement = newCardWrapper.children[0] as HTMLImageElement;
  const newCardText = newCardWrapper.children[1] as HTMLElement;

  newCardText.innerText = number ? number.toString() : '';
  newCardElement.src = url;
  newCardElement.alt = `${text}.`;

  // Animate cards

  cardWrapper.style.transition = 'transform linear 0.6s';
  newCardWrapper.style.transition = '';

  cardWrapper.style.transform = `
    translateY(${random(100, 150)}vh)
    translateX(${random(-50, 50)}vw)
    rotateZ(${random(-90, 90)}deg)
  `;

  newCardWrapper.style.transform = `
    translateY(${random(-150, -100)}vh)
    translateX(${random(-25, 25)}vw)
    rotateZ(${random(-30, 30)}deg)
    scale(${random(1, 1.5)})
  `;

  cardWrapper.addEventListener('transitionend', () => {
    cardWrapper.parentElement.removeChild(cardWrapper);
  });

  setTimeout(() => {
    newCardWrapper.style.transition = 'transform ease-out 0.6s';
    newCardWrapper.style.transform = '';
  }, 100);

  // Change cards

  newCardWrapper.id = cardWrapper.id;
  cardWrapper.id = '';
  cardWrapper.parentElement.insertBefore(newCardWrapper, cardWrapper);
}
