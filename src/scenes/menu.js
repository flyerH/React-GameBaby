import initAnimation from './initAnimation';
import gameSelectAnimation from './gameSelectAnimation';

export const powerOn = () => {
  initAnimation.run();
};

export const gameSelect = () => {
  initAnimation.stop();
  gameSelectAnimation.run();
};

export const powerOff = () => {};
