import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx"
import Slider from "./components/Slider/Slider.tsx";
import InfoBlock from "./components/InfoBlock/InfoBlock.tsx";


function App() {

  return (
    <div className="App">
      <Header />
      <Slider />
      <InfoBlock />
      <Footer />
    </div>
  );
}

export default App;
