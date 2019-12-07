const board = document.getElementById('board');
const drawButton = document.getElementById('drawButton') as HTMLButtonElement;

const onTouchStart = (touchStartEvent: TouchEvent) => {
  board.removeEventListener('touchstart', onTouchStart);

  const card = document.getElementById('card');
  const touchStart = touchStartEvent.touches[0];
  let delta = { x: 0, y: 0 };

  card.style.transition = '';

  const onMove = (touchMoveEvent: TouchEvent) => {
    const touchMove = touchMoveEvent.touches[0];
    delta.x = touchMove.screenX - touchStart.screenX;
    delta.y = touchMove.screenY - touchStart.screenY;

    card.style.transform = `
      translateX(${delta.x}px)
      translateY(${delta.y}px)
    `;
  };

  const onEnd = () => {
    document.body.removeEventListener('touchmove', onMove);
    document.body.removeEventListener('touchend', onEnd);

    if (delta.y > 100 || (delta.x === 0 && delta.y === 0)) {
      drawButton.click();
    } else {
      card.style.transition = 'transform ease 0.3s';
      card.style.transform = '';
    }

    board.addEventListener('touchstart', onTouchStart);
  };

  document.body.addEventListener('touchmove', onMove);
  document.body.addEventListener('touchend', onEnd);
};

board.addEventListener('touchstart', onTouchStart);
