import React, { useEffect } from 'react';
import Modal from 'react-modal';
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Market from "./Components/Market/Market";
import ChooseUs from "./Components/Choose-us/Choose-us";
import JoinUs from "./Components/Join-us/Join-us";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  return (
    <div className="App">
      <Navigation />
     <Home />
      <Market />
      <ChooseUs />
      <JoinUs />
      <Footer />

    </div>
  );
}

export default App;
