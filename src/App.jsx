import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [log, setLog] = useState([]);

  function handleSelectSquare() {
    setCurrentPlayer((player) => (player === 'X' ? 'O' : 'X'));
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
          onSetLog={setLog}
        />
      </div>
      {log.reverse().map((el) => {
        const logString = `Player ${el[0]} played x:${el[1]}, y:${el[2]}`;
        return <p>{logString}</p>;
      })}
    </main>
  );
}

export default App;
