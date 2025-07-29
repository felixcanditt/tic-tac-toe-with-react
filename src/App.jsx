import { useState } from 'react';

function App() {
  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [playerName, setPlayerName] = useState('Max');

  console.log(userInput);

  function showInputField() {
    setShowInput(true);
  }

  function handleInput(e) {
    const userInput = e.target.value;
    setUserInput(userInput);
  }

  function saveInput() {
    setPlayerName(userInput);
    setUserInput('');
    //setShowInput(false);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">{playerName}</span>
            <span className="player-symbol">X</span>
            <button onClick={() => showInputField()}>EDIT</button>
            <input
              type="text"
              value={userInput}
              onChange={(e) => handleInput(e)}
            />
            <button onClick={() => saveInput()}>SAVE</button>
          </li>
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
