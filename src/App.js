import logo from './logo.svg';
import './App.css';
import exciting from './exciting.svg';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={exciting} className="header-img" alt="Emoji exciting" width="180" />
        <TitleComponent></TitleComponent>
        <h2>This is exciting</h2>
      </header>
    </div>
  );
}

export default App;
