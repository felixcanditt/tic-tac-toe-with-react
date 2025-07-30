import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

import { WINNING_COMBINATIONS } from '../winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  let winner = '';

  const currentPlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameTurns((prevTurns) => {
      let activePlayer = deriveActivePlayer(prevTurns);

      const newTurn = {
        player: activePlayer,
        square: { row: rowIndex, column: columnIndex },
      };

      let updatedTurns = [...prevTurns];
      updatedTurns = [newTurn, ...updatedTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        {winner != '' && (
          <p>
            The winner is
            {winner}!
          </p>
        )}
        <ol id="players" className="highlight-player">
          <Player
            initialName="Susanne"
            playerSymbol="X"
            isActive={currentPlayer === 'X'}
          />
          <Player
            initialName="Greta"
            playerSymbol="O"
            isActive={currentPlayer === 'O'}
          />
        </ol>
        <GameBoard
          onHandleSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
