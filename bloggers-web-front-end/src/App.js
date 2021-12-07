import logo from './logo.svg';
import TopContributors from './components/TopContributors/TopContributors';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopContributors />
        <Login />
        <img src={logo} 
          data-cy="app-logo"
          className="App-logo" alt="logo" />
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
