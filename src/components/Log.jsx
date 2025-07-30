export default function Log({ gameTurns }) {
  return (
    <div>
      {gameTurns.map((el) => {
        const logString = `Player ${el.player} played x:${el.square.row}, y:${el.square.column}`;
        return <p>{logString}</p>;
      })}
    </div>
  );
}
