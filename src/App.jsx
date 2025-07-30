import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, columnIndex) {
    setCurrentPlayer((player) => (player === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let activePlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        activePlayer = 'O';
      }

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
        <p>{currentPlayer}</p>
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
          currentPlayer={currentPlayer}
          onHandleSelectSquare={handleSelectSquare}
          gameTurns={gameTurns}
        />
      </div>
      {gameTurns.map((el) => {
        const logString = `Player ${el.player} played x:${el.square.row}, y:${el.square.column}`;
        return <p>{logString}</p>;
      })}
    </main>
  );
}

export default App;
