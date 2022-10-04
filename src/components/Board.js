import React from "react";
import Square from "./Square";

//Code from tutorial
class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
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
      );
    }
  }

//Code for Tic Tac Toe With Hooks
// const Board = ({ squares, onClick }) => (
//   <div className="board">
//     {squares.map((square, i) => (
//       <Square key={i} value={square} onClick={() => onClick(i)} />
//     ))}
//   </div>
// );

export default Board;
