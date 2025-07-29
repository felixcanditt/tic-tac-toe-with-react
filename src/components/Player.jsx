import { useState } from 'react';

export default function Player({ playerName, onSetPlayerName }) {
  const [showInput, setShowInput] = useState(false);
  const [userInput, setUserInput] = useState('');

  function handleEditClick() {
    setShowInput(true);
  }

  function handleInput(e) {
    const userInput = e.target.value;
    setUserInput(userInput);
  }

  function saveInput() {
    onSetPlayerName(userInput);
    setUserInput('');
    setShowInput(false);
  }
  return (
    <li>
      <span className="player-name">{playerName}</span>
      <span className="player-symbol">X</span>
      <button onClick={() => handleEditClick()}>EDIT</button>
      {showInput && (
        <>
          <input
            type="text"
            value={userInput}
            onChange={(e) => handleInput(e)}
          />
          <button onClick={() => saveInput()}>SAVE</button>
        </>
      )}
    </li>
  );
}
