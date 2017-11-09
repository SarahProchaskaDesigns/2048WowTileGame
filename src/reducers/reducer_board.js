// { MOVE, ADD_NEW_SQUARE, START_NEW_GAME}
import { MOVE, ADD_NEW_SQUARE, START_NEW_GAME }  from '../actions/index';
console.log( MOVE )
import { anyMove, populateNewSquare } from './reducer_helper_functions'
// console.log(anyMove)

export default function(state = [], action){
    console.log('Action is: ', action)
    switch(action.type){
        case START_NEW_GAME:
            var newState = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]
            newState = populateNewSquare(populateNewSquare(newState));
            console.log(newState)
            return newState
        case MOVE:
            var newState = anyMove(state, action.direction)
            newState = populateNewSquare(newState)
            console.log(newState);
            return newState
    }
    return state
}