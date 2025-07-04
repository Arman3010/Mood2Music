import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


//import moodcard

import MoodCard from './components/MoodCard';

function App() {
  return (
    <div>
      <MoodCard emoji="😊" name="Happy" />
      <MoodCard emoji="😢" name="Sad" />
    </div>
  );
}
