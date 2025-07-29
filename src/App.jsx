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
        <ol id="players">
          <Player initialName="Susanne" playerSymbol="X" />
          <Player initialName="Greta" playerSymbol="O" />
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
