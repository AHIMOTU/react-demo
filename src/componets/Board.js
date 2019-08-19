import React, {Component}  from 'react'
import Square from './Square'

class Board extends Component {
  constructor() {
    super()
    this.state = {
      squares: Array(9).fill(null),
      firstHand: true
    }
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        myClick={() => this.handleClick(i)}
      />
    )
  }
  handleClick (i) {
    const squares = this.state.squares.slice()
    if (squares[i]) return
    squares[i] = this.state.firstHand ? 'X' : 'O'
    this.setState({
      squares,
      firstHand: !this.state.firstHand
    })
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
