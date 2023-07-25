import React from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog.tsx'
import Category from './pages/Category/Category.tsx'
import AboutUs from './pages/About Us/AboutUs.tsx'
import Home from './pages/Home/Home.tsx'
import FavoriteArticle from './pages/Fovorite Article/FavoriteArticle.tsx'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/favorite-article" element={<FavoriteArticle />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;