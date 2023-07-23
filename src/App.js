import React, { useState } from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Slider from "./components/Slider/Slider.tsx";
import InfoBlock from "./components/InfoBlock/InfoBlock.tsx";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem.tsx";

function App() {
  const [isShowFullItemOpen, setShowFullItemOpen] = useState(false);

  const handleOpenShowFullItem = () => {
    setShowFullItemOpen(true);
  };

  const handleCloseShowFullItem = () => {
    setShowFullItemOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Slider />
      <InfoBlock onOpenShowFullItem={handleOpenShowFullItem} />
      <Footer />
      <ShowFullItem isOpen={isShowFullItemOpen} onClose={handleCloseShowFullItem} />
    </div>
  );
}

export default App;
