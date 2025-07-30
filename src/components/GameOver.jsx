export default function GameOver({ winner, hasDraw, onHandleRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won</p>}
      {hasDraw && <p>has draw</p>}
      <p>
        <button onClick={onHandleRestart}>Rematch!</button>
      </p>
    </div>
  );
}
