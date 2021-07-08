import { useState } from 'react';
import logo from './logo.svg';
import Counter from './components/Counter/Counter'
import Welcome from './components/Welcome/Welcome'
import './App.css';

function App() {

  const [visible, setVisible] = useState(true)

  const handleClick = () => setVisible(!visible)
  
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
        <ul>
          <li className="item">item 1</li>
          <li className="item">item 2</li>
          <li className="item">item 3</li>
          <li className="item">item 4</li>
        </ul>
        {visible && <h3 data-testid="text">¡Hola Mundo!</h3>}
        <button data-testid="btn" onClick={handleClick}>TOGGLE TEXT</button>
        <Counter />
        <Welcome />
      </header>
    </div>
  );
}

export default App;
