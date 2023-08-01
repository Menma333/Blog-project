import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Category from "./pages/Category/Category";
import AboutUs from "./pages/About Us/AboutUs";
import Home from "./pages/Home/Home";
import FavoriteArticle from "./pages/FavoriteArticle/FavoriteArticle";

function App() {

  const articles = [
    {
      id: 1,
      title: "React for Beginners: A Guide to Getting Started",
      content:
        "Abstract: In this article, we will explore the basics of React and learn how to create components - the fundamental building blocks of React applications. We'll also delve into managing component state, allowing us to build interactive and dynamic web interfaces. Whether you're a complete beginner or just getting started with React, this guide will help you begin working with React and create your first components.",
      category: "react"
    },
    {
      id: 2,
      title: "React Performance: How to Make Your App Faster",
      content:
        "Abstract: In this article, we will discuss the importance of optimizing performance in React applications and provide practical tips and techniques to improve your app's speed. We'll cover various optimization methods, such as lazy loading, component memoization, using shouldComponentUpdate, and other performance-enhancing techniques. By following these recommendations, you'll be able to create a fast and responsive React application, even when dealing with large data sets.",
      category: "react"
    },
    {
      id: 3,
      title: "React + Backend: A Guide to Building Full-Fledged Web Apps",
      content:
        "Abstract: In this article, we'll explore different approaches to integrating React with various backend frameworks, such as Node.js, Express, Django, and others. We'll delve into data exchange between the frontend and backend, managing authentication and authorization, and creating APIs to interact with React applications. This guide will help you build a comprehensive full-stack application, combining the power of React on the client-side with backend functionality to handle data and business logic.",
      category: "react"
    },
    {
      id: 4,
      title: "Angular: A Guide for Beginners",
      content:
        "Abstract: In this article, we will introduce you to Angular - one of the most popular frameworks for web application development. We will cover the basics of creating components in Angular and how to manage data using services. This guide will provide you with the essential knowledge to start building your own applications using Angular.",
      category: "angular"
    },
    {
      id: 5,
      title: "Angular Routing: A Comprehensive Guide to Application Navigation",
      content:
        "Abstract: In this article, we will explore the routing and navigation mechanism in Angular, which allows you to create transitions between different pages in your web application. We'll learn how to configure routes, pass parameters, implement route guards, and create dynamic links to enhance the user experience. With our comprehensive guide, you will master the art of navigation in Angular applications.",
      category: "angular"
    },
    {
      id: 6,
      title: "Angular Performance: How to Make Your App Faster",
      content:
        "Abstract: In this article, we will focus on optimizing performance in Angular applications and provide practical tips and methods to improve your app's efficiency. We'll discuss strategies for identifying and addressing bottlenecks, utilizing lazy loading, optimizing HTTP requests, and other key aspects. By implementing these recommendations, you'll be able to create a fast and efficient Angular application for your users.",
      category: "angular"
    },
    {
      id: 7,
      title: "Vue.js Essentials: A Beginner's Guide",
      content:
        "Abstract: In this article, we will dive into Vue.js - a progressive JavaScript framework for building user interfaces. We'll cover the fundamentals of Vue.js, including the Vue instance, data binding, directives, and components. By the end of this beginner's guide, you'll have a solid understanding of Vue.js and be ready to create interactive web interfaces.",
      category: "vue"
    },
    {
      id: 8,
      title: "Vue.js State Management: Mastering Vuex",
      content:
        "Abstract: In this article, we will explore state management in Vue.js and focus on Vuex - the official state management library for Vue.js applications. We'll learn about the core concepts of Vuex, such as state, mutations, actions, and getters, and how to use them to manage complex application states. By mastering Vuex, you'll be able to efficiently manage the state of your Vue.js applications.",
      category: "vue"
    },
    {
      id: 9,
      title: "Vue.js Performance: Boosting Your App's Speed",
      content:
        "Abstract: In this article, we'll delve into performance optimization in Vue.js and provide you with a set of best practices to make your Vue.js applications faster and more responsive. We'll cover techniques like lazy loading, component optimization, virtual scrolling, and Vue's built-in performance tools. By implementing these performance tips, you'll be able to create lightning-fast Vue.js applications that deliver an exceptional user experience.",
      category: "vue"
    },
  ];

  const [favorites, setFavorites] = useState([]);

  const handleLikeClicked = (article) => {
    const isLiked = favorites.some((favArticle) => favArticle.id === article.id);

    if (isLiked) {
      setFavorites((prev) => prev.filter((favArticle) => favArticle.id !== article.id));
    } else {
      setFavorites((prev) => [...prev, article]);
    }
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home articles={articles} handleLikeClicked={handleLikeClicked} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/category">
            <Route path=":category" element={<Category articles={articles} />} />
          </Route>
          <Route path="/favorite-article" element={<FavoriteArticle favorites={favorites} />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;