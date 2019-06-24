import initAnimation from './initAnimation';
import gameSelectAnimation from './gameSelectAnimation';
import gameArray from '@/game';

export const powerOn = () => {
  initAnimation.run();
};

export const gameSelect = selectedGameNumber => {
  if (selectedGameNumber) {
    gameSelectAnimation.run(selectedGameNumber);
  } else {
    initAnimation.stop();
    gameSelectAnimation.run(0);
  }
};

export const gameStart = selectedGameNumber => {
  gameArray[selectedGameNumber].run();
};

export const powerOff = () => {};
