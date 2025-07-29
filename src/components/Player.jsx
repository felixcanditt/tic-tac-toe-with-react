import { useState } from 'react';

export default function Player({ playerName, playerSymbol, onSetPlayerName }) {
  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState('');

  function handleButtonClick() {
    console.log(1);
    if (!showInput) {
      setShowInput(true);
    } else {
      onSetPlayerName(userInput);
      setUserInput('');
      setShowInput(false);
    }
  }

  function handleInput(e) {
    const userInput = e.target.value;
    setUserInput(userInput);
  }

  return (
    <li>
      <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{playerSymbol}</span>
      </span>

      {showInput && (
        <>
          <input
            type="text"
            value={userInput}
            onChange={(e) => handleInput(e)}
          />
        </>
      )}

      <button onClick={() => handleButtonClick()}>
        {showInput ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
