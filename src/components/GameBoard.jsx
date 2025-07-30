import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({
  currentPlayer,
  onHandleSelectSquare,
  gameTurns,
}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  let newGameBoard = initialGameBoard;
  console.log(gameTurns);

  if (gameTurns.length > 0) {
    newGameBoard[gameTurns[0].square.row][gameTurns[0].square.column] =
      gameTurns[0].player;
    console.log('newGameBoard', newGameBoard);
  }

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

    onHandleSelectSquare(rowIndex, columnIndex);
  }

  return (
    <ol id="game-board">
      {newGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  disabled={playerSymbol}
                  onClick={() => handleClick(rowIndex, columnIndex)}
                >
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
