/*!
 * Created by He on 2017/8/29.
 * E-mail:h@strawtc.cn
 */
import { combineReducers } from 'redux-immutable';
import keyCode from './keyCode';
import table from './table';
import snake from './snake';
import snakeDir from './snake/dir';

const rootReducer = combineReducers({ keyCode, table, snake, snakeDir });
export default rootReducer;
