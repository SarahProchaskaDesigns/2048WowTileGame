import React, { Component } from 'react';
import Square from '../components/squares'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { move, startNewGame } from '../actions/index'

class Board extends Component {
    renderSquares(board) {
        var rowNum = 0
        // var totalBoard = [[2, 4, '', 4],
        // [4, "", 4, 8],
        // [8, 8, 2, 4],
        // ["", "", 2, ""]];
        var allSquares = board.map((row) => {
            rowNum += 1
            var cellNum = 0
            return (
                <div key={rowNum} className="game-row">
                    {row.map((cell) => {
                        cellNum += 1
                        return <Square value={cell} key={rowNum + cellNum} />
                    })}
                </div>
            )
        })
        console.log(allSquares)
        return allSquares
    }

    render() {
        return (
            <div className="total-board">
                <button className ='top-bottom-buttons-row' onClick={this.props.startNewGame}>New Game</button>
                <div className="top-bottom-buttons-row">
                    <button className="top-bottom-buttons" onClick={() => this.props.move('up')}>Up</button>
                </div>
                <div className='game-row'>
                    <button onClick={() => this.props.move('left')}>Left</button>
                    <div>{this.renderSquares(this.props.board)}</div>
                    <button onClick={() => this.props.move('right')}>Right</button>
                </div>
                <div className="top-bottom-buttons-row">
                    <button className="top-bottom-buttons" onClick={() => this.props.move('down')}>Down</button>
                </div>
            </div>
        )
    }
}

function mapDispatchtoProps(dispatch){
    return ( bindActionCreators({ move, startNewGame }, dispatch)) 
  }
 
function mapStateToProps(state){
    return{
        board: state.board
    }
}
  export default connect(mapStateToProps, mapDispatchtoProps)(Board);

// export default Board;


//   <div className="squares" key={rowNum + cellNum}>{cell}</div> */
                // <div key={rowNum, cellNum}> {cell} </div>