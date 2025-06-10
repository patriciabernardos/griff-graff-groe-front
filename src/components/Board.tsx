import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';


export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? 'Winner: ' + winner
    : 'Next player: ' + (xIsNext ? 'X' : 'O');

  return (
    <div className="centered-container">
      <div className="status">{status}</div>
      {[0, 3, 6].map(row => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map(col => (
            <Square
              key={row + col}
              value={squares[row + col]}
              onSquareClick={() => handleClick(row + col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
