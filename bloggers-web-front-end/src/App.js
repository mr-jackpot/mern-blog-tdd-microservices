import logo from './logo.svg';
import TopContributors from './components/TopContributors/TopContributors';
import './App.css';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header" data-cy="app-header">
        <TopContributors />
        <Login />
      </header>
    </div>
  );
}

export default App;
