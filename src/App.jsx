import Player from './components/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Susanne" playerSymbol="X" />
          <Player initialName="Greta" playerSymbol="O" />
        </ol>
      </div>
      LOG
    </main>
  );
}

export default App;
