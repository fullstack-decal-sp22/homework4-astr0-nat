import React, {useState} from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

  const [squareValues, updateSquares] = useState([]);
  const [xIsNext, flipTurn] = useState(true);

  function handleClick(i) { 
      const newArr = [...squareValues];
      newArr[i] = xIsNext? 'X' : 'O';
      flipTurn(!xIsNext);
      updateSquares(newArr);
      
}

function calculateWinner(squareValues) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squareValues[a] && squareValues[a] === squareValues[b] && squareValues[a] === squareValues[c]) {
      return squareValues[a];
    }
  }
  return null;
}


    function renderSquare(i) {
        return <Square value ={squareValues[i]} onClick = {() => handleClick(i)} />;   
    }

    const winner = calculateWinner(squareValues);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
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
          <div className="status">{status}</div>
        </div>
    )
}

export default Board;