import './App.css';
import './App.css';
import Header from './Component/Header.jsx';
import Body from './Main/body';
import Left from './Leftside/left.js';

function App() {
  // let name = "Legendary Andy"
  // let style = {
  //   color: name.includes("Legendary") ? "green" : "red",
  //   fontSize: name.includes("Legendary") ? "56px" : "16px",
  // }

  return (
    <div className="App">
      <Header/>
      <div class="mix">
      <Left/>
      <Body/>
      </div>
      {/* <h1 style={style}>{name}</h1> */}
    </div>
    
  );
}

export default App;
