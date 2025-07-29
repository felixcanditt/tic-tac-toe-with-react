import { useState } from 'react';

export default function Player({ playerName, playerSymbol, onSetPlayerName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userInput, setUserInput] = useState('');

  function handleButtonClick() {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      onSetPlayerName(userInput);
      setUserInput('');
      setIsEditing(false);
    }
  }

  function handleInput(e) {
    const userInput = e.target.value;
    setUserInput(userInput);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={userInput}
            onChange={(e) => handleInput(e)}
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
