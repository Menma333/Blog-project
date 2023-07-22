import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx"
import Slider from "./components/Slider/Slider.tsx";


function App() {

  const items = [
    {
      title: 'React',
      text: 'React is an element of programming. A specialized technology used by JavaScript in the development of a variety of content. It is a library for creating user interfaces. It is open source.',
      img: 'React.png',
    },
    {
      title: 'Angular',
      text: 'Angular is a framework from Google for creating advanced seamless (single page) web applications - SPA (Single Page Applications) - in the programming languages ​​TypeScript, JavaScript, Dart. The framework is open source. The product is distributed free of charge.',
      img: 'Angular.jpeg',
    },
    {
      title: 'Vue',
      text: 'Vue. js is a progressive framework for developing user interfaces and single-page web applications in JavaScript. It solves the tasks of the presentation layer (view) and simplifies the work with libraries. Vue.',
      img: 'Vue.png',
    },
  ]

  return (
    <div className="App">
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
