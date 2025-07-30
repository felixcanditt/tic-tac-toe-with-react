import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  currentPlayer,
  onHandleSelectSquare,
  onSetLog,
}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function checkForWinner() {
    const winner = false;
    console.log(gameBoard[0][0] === gameBoard[0][1]);

    if ((gameBoard[0][0] === gameBoard[0][1]) === gameBoard[0][2]) {
      console.log(2);
    }
  }

  //checkForWinner();

  function handleClick(rowIndex, columnIndex) {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][columnIndex] = currentPlayer;
      return updatedBoard;
    });

    onSetLog((prevLog) => {
      const newLog = [currentPlayer, rowIndex, columnIndex];
      let updatedLog = [...prevLog];
      updatedLog = [...updatedLog, newLog];
      console.log(updatedLog);
      return updatedLog;
    });

    onHandleSelectSquare();
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
