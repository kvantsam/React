import logo from './logo.svg';
import './App.css';
import Dropdown from "./Dropdown";

function App() {
  // return (
  //     <div>
  //       <Dropdown name = 'test' fio = {' Sam' } />
  //     </div>
  // )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Edit <code>src/App.js</code> Another text
        </p>

        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Use React
        </a>
      </header>
    </div>
  );
}

export default App;
