import logo from './logo.svg';
import './App.css';

import logo from './logo.svg';
import './App.css';

function App() {
  let name = "Legendary man lives once"
  let style = {
    color: name.includes("Legendary") ? "green" : "white",
    fontSize: name.includes("Legendary") ? "56px" : "16px",
  }

  return (
    <div className="App">
      <h1 style={style}>{name}</h1>
    </div>
  );
}


export default App;
