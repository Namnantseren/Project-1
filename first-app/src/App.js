import './App.css';
import './App.css';
import Header from './Component/Header.jsx';
import Body from './Main/body';

function App() {
  // let name = "Legendary Andy"
  // let style = {
  //   color: name.includes("Legendary") ? "green" : "red",
  //   fontSize: name.includes("Legendary") ? "56px" : "16px",
  // }

  return (
    <div className="App">
      <Header/>
      <Body/>
      {/* <h1 style={style}>{name}</h1> */}
    </div>
    
  );
}

export default App;
