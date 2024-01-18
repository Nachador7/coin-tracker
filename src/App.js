import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Market from "./Components/Market/Market";
import ChooseUs from "./Components/Choose-us/Choose-us";

function App() {
  return (
    <div className="App">
      <Navigation />
     <Home />
      <Market />
      <ChooseUs />
      <h2>
        JOIN US
      </h2>

    </div>
  );
}

export default App;
