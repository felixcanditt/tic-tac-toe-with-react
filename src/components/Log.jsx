export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => {
        const logString = `Player ${turn.player} selected ${turn.square.row}, ${turn.square.column}`;
        return (
          <li key={`${turn.square.row}${turn.square.column}`}>{logString}</li>
        );
      })}
    </ol>
  );
}
