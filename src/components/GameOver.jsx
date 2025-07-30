export default function GameOver({ winner, hasDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won</p>}
      {hasDraw && <p>has draw</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
