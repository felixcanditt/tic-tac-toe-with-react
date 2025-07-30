import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import GameOver from './components/GameOver';

import { WINNING_COMBINATIONS } from '../winning-combinations';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_BOARD = [
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

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { player, square } = turn;
    const { row, column } = square;

    gameBoard[row][column] = player;
  }
  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner;
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
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [playerSymbol]: newName,
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            playerSymbol="X"
            isActive={currentPlayer === 'X'}
            onHandlePlayerNameChange={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            playerSymbol="O"
            isActive={currentPlayer === 'O'}
            onHandlePlayerNameChange={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            hasDraw={hasDraw}
            onHandleRestart={handleRestart}
          />
        )}

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
