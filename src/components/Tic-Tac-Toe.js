import React, { Component } from 'react';
import Game from './Game'
import './TicTacToe.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      square: Array(9).fill(null),
      Players: null,
      winner: null
    }
  }

  checkWinner() {
    let winLines =
      [
        ["0", "1", '2'],
        ["3", "4", '5'],
        ["6", "7", '8'],
        ["0", "3", '6'],
        ["1", "4", '7'],
        ["2", "5", '8'],
        ["0", "4", '8'],
        ["2", "4", '6'],
      ]
    this.checkMatch(winLines)
  }

  checkMatch(winLines) {
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      let square = this.state.square
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        alert('You won');
        this.setState({
          winner: this.state.Players
        })
      }
 
      }
    }
  

  ClickHandle(i) {
    if (this.state.Players && !this.state.winner) {
      let newsquare = this.state.square
      if (this.state.square[i] === null) {
        newsquare[i] = this.state.Players
        this.setState({
          square: newsquare,
          Players: this.state.Players === "X" ? "O" : "X"
        })
        this.checkWinner()
      }
    }
  }
  setPlayer(Players) {
    this.setState({ Players })
  }
  renderBoxes() {
    return this.state.square.map(
      (box, i) =>
        <div className="box" key={i}
          onClick={() => this.ClickHandle(i)}>
          {box} </div>
    )
  }
  reset() {
    this.setState({
      Players: null,
      winner: null,
      square: Array(9).fill(null)
    })
  }
  render() {
    return (
      <div className="container">
        <h1 className="header">Tic Tac Toe </h1>
       <div>
        <Game
          Players={this.state.Players}
          setPlayer={(e) => { this.setPlayer(e) }}
          winner={this.state.winner}
        />
        </div>
        <div className="square"> 
          {this.renderBoxes()}
        </div>
        <button disabled={!this.state.winner} onClick={() => this.reset()}> Reset</button >
      </div>
    );
  }
}

export default App;