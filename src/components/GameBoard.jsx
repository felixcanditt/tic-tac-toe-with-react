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

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  disabled={playerSymbol != null}
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
