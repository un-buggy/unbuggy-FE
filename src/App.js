import logo from './unbuggy-logo-white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web app coming soon...
        </p>
        <a
          className="repo-link"
          href="https://github.com/un-buggy/unbuggy-FE"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Github Repo
        </a>
      </header>
    </div>
  );
}

export default App;
