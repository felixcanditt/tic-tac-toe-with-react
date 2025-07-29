import { useState } from 'react';

export default function Player({ playerName, playerSymbol, onSetPlayerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInput, setUserInput] = useState('');

  function handleButtonClick() {
    if (isEditing) {
      onSetPlayerName(userInput);
      setUserInput('');
    }

    setIsEditing((editing) => !editing);
  }

  function handleInput(event) {
    const userInput = event.target.value;
    setUserInput(userInput);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={userInput}
            onChange={handleInput}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>

      <button onClick={handleButtonClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
