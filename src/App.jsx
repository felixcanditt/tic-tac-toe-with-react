import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [log, setLog] = useState(['']);

  return (
    <main>
      <div id="game-container">
        <p>{currentPlayer}</p>
        <ol id="players" className="highlight-player">
          <Player
            initialName="Susanne"
            playerSymbol="X"
            currentPlayer={currentPlayer}
          />
          <Player
            initialName="Greta"
            playerSymbol="O"
            currentPlayer={currentPlayer}
          />
        </ol>
        <GameBoard
          currentPlayer={currentPlayer}
          onSetCurrentPlayer={setCurrentPlayer}
          onSetLog={setLog}
        />
      </div>
      {log.map((el) => (
        <p>{el}</p>
      ))}
    </main>
  );
}

export default App;
