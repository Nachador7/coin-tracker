import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Market from "./Components/Market/Market";
import ChooseUs from "./Components/Choose-us/Choose-us";
import JoinUs from "./Components/Join-us/Join-us";

function App() {
  return (
    <div className="App">
      <Navigation />
     <Home />
      <Market />
      <ChooseUs />
      <JoinUs />

    </div>
  );
}

export default App;
