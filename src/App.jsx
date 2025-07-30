import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';

const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 2, column: 2 },
    { row: 1, column: 1 },
    { row: 0, column: 0 },
  ],
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

  const currentPlayer = deriveActivePlayer(gameTurns);

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

  checkForWinner();

  function checkForWinner() {
    if (gameTurns.length > 0) {
      let playerXTurns = [];
      let playerOTurns = [];

      gameTurns.map((turn) => {
        if (turn.player === 'X') {
          playerXTurns.push(turn.square);
        } else {
          playerOTurns.push(turn.square);
        }
      });
      //playerOTurns = gameTurns.filter((turn) => turn.player === 'O');

      console.log(
        'gameTurns',
        gameTurns,
        'playerXTurns',
        playerXTurns,
        'playerOTurns',
        playerOTurns
      );

      WINNING_COMBINATIONS.map((combination) => {
        combination.map((square) => {
          const match = playerXTurns.map((turn) => {
            const isMatch =
              turn.row === square.row && turn.column === square.column;
            console.log(turn, square, isMatch);
          });
          console.log(match);
        });
      });
    }
  }

  return (
    <main>
      <div id="game-container">
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
          gameTurns={gameTurns}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
