import './App.css';
import Graph from './components/Graph/Graph';
import Tests from './components/Tests/Tests';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Graph/>
        <Tests/>
      </header>
    </div>
  );
}

export default App;
