import { useState } from 'react';

import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player />
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">0</span>
          </li>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
