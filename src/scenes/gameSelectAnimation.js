import store from '@/store';
import { initialState } from '@/reducers/table';
import { setTable } from '@/action';

const snakeMenu = [
  [0, 4],
  [1, 3],
  [1, 5],
  [2, 2],
  [2, 6],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [4, 2],
  [4, 6],
  [15, 2],
  [15, 3],
  [15, 4],
  [15, 7],
  [16, 2],
  [16, 4],
  [16, 6],
  [16, 7],
  [17, 2],
  [17, 4],
  [17, 7],
  [18, 2],
  [18, 4],
  [18, 7],
  [19, 2],
  [19, 3],
  [19, 4],
  [19, 6],
  [19, 7],
  [19, 8],
];

const initAnimation = () => {
  let table = initialState;
  for (let i = 0, l = snakeMenu.length; i < l; ++i) {
    table = table.setIn([snakeMenu[i][0], snakeMenu[i][1]], 1);
  }
  store.dispatch(setTable(table));
};

const run = () => {
  initAnimation();
};

export default { run };
