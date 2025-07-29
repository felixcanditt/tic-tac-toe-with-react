import { useState } from 'react';

import Player from './components/Player';

function App() {
  const [firstPlayerName, setFirstPlayerName] = useState('Hans');
  const [secondPlayerName, setSecondPlayerName] = useState('Senna');

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            playerName={firstPlayerName}
            playerSymbol="X"
            onSetPlayerName={setFirstPlayerName}
          />
          <Player
            playerName={secondPlayerName}
            playerSymbol="O"
            onSetPlayerName={setSecondPlayerName}
          />
        </ol>
        <p>1playerName: {firstPlayerName}</p>
        <p>2playerName: {secondPlayerName}</p>
      </div>
      LOG
    </main>
  );
}

export default App;
