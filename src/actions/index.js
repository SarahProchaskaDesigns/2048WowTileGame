
export const MOVE = 'MOVE';
export const ADD_NEW_SQUARE ='ADD_NEW_SQUARE';
export const START_NEW_GAME = 'START_NEW_GAME'


export function move(direction){

    return{
        type: MOVE,
        direction: direction
    }
}
export function startNewGame(){
    return{
        type: START_NEW_GAME
    }
}
export function addNewSquare(){
    return{
        type: ADD_NEW_SQUARE
    }
}