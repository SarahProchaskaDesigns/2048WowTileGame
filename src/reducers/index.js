import { combineReducers } from 'redux';
import Board from './reducer_board.js'

const rootReducer = combineReducers({
  board: Board
});

export default rootReducer;
