import React from 'react';
import Board from './Board';
import { calculateWinner } from '../helper';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0,
      this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <>
        <h1>React Tic Tac Toe</h1>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="info-wrapper">
            <div>
              <h3>History</h3>
              <ol>{moves}</ol>
            </div>

            <div><h3>{status}</h3></div>
          </div>
        </div>
      </>
    );
  }
}


// const Game = () => {
//     const [history, setHistory] = useState([Array(9).fill(null)]);
//     const [stepNumber, setStepNumber] = useState(0);
//     const [xIsNext, setXisNext] = useState(true);
//     const winner = calculateWinner(history[stepNumber]);
//     const xO = xIsNext ? "X" : "O";

//     const handleClick = (i) => {
//         const historyPoint = history.slice(0, stepNumber + 1);
//         const current = historyPoint[stepNumber];
//         const squares = [...current];
//         // return if won or occupied
//         if (winner || squares[i]) return;
//         // select square
//         squares[i] = xO;
//         setHistory([...historyPoint, squares]);
//         setStepNumber(historyPoint.length);
//         setXisNext(!xIsNext);
//       };

//       const jumpTo = (step) => {
//         setStepNumber(step);
//         setXisNext(step % 2 === 0);
//       };

//       const renderMoves = () =>
//         history.map((_step, move) => {
//           const destination = move ? `Go to move #${move}` : "Go to Start";
//           return (
//             <li key={move}>
//               <button onClick={() => jumpTo(move)}>{destination}</button>
//             </li>
//           );
//         });

//       return (
//         <>
//           <h1>React Tic Tac Toe - With Hooks</h1>
//           <Board squares={history[stepNumber]} onClick={handleClick} />
//           <div className="info-wrapper">
//             <div>
//               <h3>History</h3>
//               {renderMoves()}
//             </div>
//             <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
//           </div>
//         </>
//       );
//     };

export default Game;

