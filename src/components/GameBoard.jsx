const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onHandleSelectSquare, gameTurns }) {
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }

  function checkForWinner() {
    const winner = false;
    console.log(gameBoard[0][0] === gameBoard[0][1]);

    if ((gameBoard[0][0] === gameBoard[0][1]) === gameBoard[0][2]) {
      console.log(2);
    }
  }

  //checkForWinner();

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  disabled={playerSymbol}
                  onClick={() => onHandleSelectSquare(rowIndex, columnIndex)}
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
