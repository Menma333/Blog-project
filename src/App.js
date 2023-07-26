import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog/Blog";
import Category from "./pages/Category/Category";
import AboutUs from "./pages/About Us/AboutUs";
import Home from "./pages/Home/Home";
import FavoriteArticle from "./pages/FavoriteArticle/FavoriteArticle";
import ReactPage from "./pages/ReactPage/ReactPage";
import AngularPage from "./pages/AngularPage/AngularPage";
import VuePage from "./pages/VuePage/VuePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/category" element={<Category />}>
            <Route path="react" element={<ReactPage />} />
            <Route path="angular" element={<AngularPage />} />
            <Route path="vue" element={<VuePage />} />
          </Route>
          <Route path="/favorite-article" element={<FavoriteArticle />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;