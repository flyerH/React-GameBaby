/*!
 * Created by He on 2017/9/5.
 * E-mail:h@strawtc.cn
 */
import Immutable from 'immutable';
import { SET_BLOCK, SET_BLANK, SET_FOOD } from '../../action';

const initialState = (() => {
  const table = [];
  for (let i = 0; i < 20; ++i) {
    const cols = [];
    for (let j = 0; j < 10; ++j) {
      cols.push(0);
    }
    table.push(cols);
  }
  return Immutable.fromJS(table);
})();

const table = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOCK:
      return state.setIn([action.data.x, action.data.y], action.data.type);
    case SET_BLANK:
      return initialState;
    case SET_FOOD:
      return state.setIn([action.data.x, action.data.y], action.data.type);
    default:
      return state;
  }
};

export default table;
