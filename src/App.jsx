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
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
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
  let winner = '';

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

      WINNING_COMBINATIONS.map((winningCombination) => {
        let playerXCounter = 0;
        let playerOCounter = 0;

        winningCombination.map((winninqSquare) => {
          playerXTurns.map((turn) => {
            if (
              turn.row === winninqSquare.row &&
              turn.column === winninqSquare.column
            ) {
              playerXCounter += 1;
            }
          });

          playerOTurns.map((turn) => {
            if (
              turn.row === winninqSquare.row &&
              turn.column === winninqSquare.column
            ) {
              playerOCounter += 1;
            }
          });
        });
        if (playerXCounter === 3) {
          winner = 'X';
        }
        if (playerOCounter === 3) {
          winner = 'O';
        }
      });
    }
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
          gameTurns={gameTurns}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
