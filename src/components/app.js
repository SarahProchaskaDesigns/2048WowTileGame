import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import { move, startNewGame } from '../actions/index'
import Board from '../containers/board'

class App extends Component {
  constructor(props){
    super(props)

  }
  
  render() {
    console.log(this.props.startNewGame)
    return (
      
      <div>
        <Board />
        
        {/* <button onClick={this.props.startNewGame}>New Game</button>
        <button onClick={() => this.props.move('left')}>Left</button>
        <button onClick={() => this.props.move('right')}>Right</button>
        <button onClick={() => this.props.move('up')}>Up</button>
        <button onClick={() => this.props.move('down')}>Down</button> */}
      </div>
    );
  }
}

// function mapStateToProps(state){

// }
// function mapDispatchtoProps(dispatch){
//   return ( bindActionCreators({ move, startNewGame }, dispatch)) 
// }

// export default connect(null, mapDispatchtoProps)(App);
export default App;