import React from "react";
import Square from "./Square";

//Functional Components
function Board(props) {
  const renderSquare = (i) => {
    return (
      <div className="square">
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
       </div>
    );
  }

  return (
    <div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div >
  );
}


//Code from tutorial
/*class Board extends React.Component {
  renderSquare(i) {
    return (
      <div className="square">
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
          />
          </div>
          );
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
    );
  }
}*/

//Code for Tic Tac Toe With Hooks
// const Board = ({ squares, onClick }) => (
//   <div className="board">
//     {squares.map((square, i) => (
//       <Square key={i} value={square} onClick={() => onClick(i)} />
//     ))}
//   </div>
// );

export default Board;
