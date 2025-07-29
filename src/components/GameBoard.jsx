import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  console.log(1, gameBoard);

  function handleClick(rowIndex, columnIndex) {
    console.log(5, gameBoard);
    const oldGameBoard = gameBoard;
    console.log(10, oldGameBoard);

    oldGameBoard[rowIndex][columnIndex] = 1;
    console.log(100, oldGameBoard);

    // const updatedGameBoard

    setGameBoard(oldGameBoard);
    //console.log(3, gameBoard);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => handleClick(rowIndex, columnIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
