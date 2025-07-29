import { useState } from 'react';

export default function Player({ initialName, playerSymbol, currentPlayer }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleButtonClick() {
    setIsEditing((editing) => !editing);
  }

  function handleInput(event) {
    const userInput = event.target.value;
    setPlayerName(userInput);
  }

  return (
    <li className={playerSymbol === currentPlayer ? 'active' : ''}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
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
