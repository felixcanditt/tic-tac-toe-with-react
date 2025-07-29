import { useState } from 'react';

import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('X');

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
        />
      </div>
      LOG
    </main>
  );
}

export default App;
