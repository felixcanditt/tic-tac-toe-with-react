import Player from './components/Player';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Susanne" playerSymbol="X" />
          <Player initialName="Greta" playerSymbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
