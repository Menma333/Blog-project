import React, { useState } from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx"
import Slider from "./components/Slider/Slider.tsx";
import InfoBlock from "./components/InfoBlock/InfoBlock.tsx";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem.tsx";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleBlock from "./components/ArticleBlock/ArticleBlock.tsx";

function App() {
  const [isShowFullItemOpen, setShowFullItemOpen] = useState(false);
  const [itemInfo, setItemInfo] = useState("");
  const [itemTitle, setItemTitle] = useState("");
  const [itemIcon, setItemIcon] = useState(null);

  const handleOpenShowFullItem = (info, title, icon) => {
    setItemInfo(info);
    setItemTitle(title);
    setItemIcon(icon);
    setShowFullItemOpen(true);
  };

  const handleCloseShowFullItem = () => {
    setShowFullItemOpen(false);
  };

  const ReactInfo = `React is one of the most popular and popular JavaScript libraries for
beautiful interfaces. It was developed and maintained by Facebook. One
of the main features of React is its declarative approach to touching
sharp interfaces. Starting with React 16.8, a new functional approach
to writing components using Hooks has been introduced. Hooks allow
complex components and other features previously available only to
class components. It transforms the code and makes it more readable
and understandable. React uses the Virtual DOM to efficiently update
the user interface. The virtual DOM is a representation of the real
DOM as a normal JavaScript object. React compares the previous state
of the virtual DOM with the current state and effectively updates only
those elements that have changed, minimizing the load on the real DOM
and improving application performance. Due to its popularity and large
community, React has a large number of third-party libraries and
packages for various tasks, such as routing (React Router), state
management (Redux, MobX), animations (React Spring, Framer Motion) and
much more. Also, React is used to develop mobile applications using
the React Native framework, which allows you to use React to create
cross-platform mobile applications for Android and iOS. Overall, React
has become one of the main tools for developing modern web
applications and continues to evolve rapidly, providing developers
with new features and tools to create innovative and interesting user
interfaces.`;

  const AngularInfo = `Angular is a popular open source framework for developing powerful web applications. Developed and maintained by the Google team, Angular offers developers a convenient and efficient toolkit for building modern and complex web applications.

The main features of Angular are its declarative approach and the use of TypeScript, a strongly typed programming language that makes development easier and provides more robust code. Angular provides extensive possibilities for organizing code with modules, components, services, directives, etc., which makes the code more structured and maintainable.

One of Angular's strengths is its ability to create Single Page Applications (SPAs). This allows only the required data and components to be loaded during user interaction, which improves performance and responsiveness of the application. Angular also provides tools to manage routing and transitions between different pages within a SPA.

The framework has a wide range of functionality, such as form validation, animations, HTTP requests, application state management, and much more. This makes Angular a versatile tool for solving various tasks in web application development.

In addition to web applications, Angular is also used to develop mobile applications using the NativeScript or Ionic framework, which provides the ability to create cross-platform mobile applications with common code.

The Angular developer community is active and supportive of the framework, providing extensive documentation, tutorials, articles, and problem solving. This makes Angular an attractive choice for many companies and individual developers to build large scale, high performance web applications.
`;

  const VueInfo = `Vue.js is a progressive framework for developing user interfaces and single-page web applications (SPAs) in JavaScript. It is designed to be lightweight and easy to use, while maintaining high performance and extensibility.

One of the key features of Vue.js is its reactivity system. Vue.js automatically detects changes in data and efficiently updates the user interface, making the development process smooth and convenient.

Vue.js also offers a convenient and intuitive template system, allowing developers to create dynamic and interactive user interfaces with minimal effort.

Another powerful feature of Vue.js is its components. Components allow developers to break down the user interface into small and reusable parts, making it easier to structure and maintain the code.

Vue.js is actively supported by its developers and has a vibrant community, providing extensive documentation and a rich selection of third-party libraries and plugins.

Thanks to its simplicity and flexibility, Vue.js has become a popular tool for building modern web applications, attracting both experienced developers and newcomers to web development.`;

  const articles = [
    {
      id: 1,
      title: "React for Beginners: A Guide to Getting Started",
      content: "Abstract: In this article, we will explore the basics of React and learn how to create components - the fundamental building blocks of React applications. We'll also delve into managing component state, allowing us to build interactive and dynamic web interfaces. Whether you're a complete beginner or just getting started with React, this guide will help you begin working with React and create your first components.",
    },
    {
      id: 2,
      title: "React Performance: How to Make Your App Faster",
      content: "Abstract: In this article, we will discuss the importance of optimizing performance in React applications and provide practical tips and techniques to improve your app's speed. We'll cover various optimization methods, such as lazy loading, component memoization, using shouldComponentUpdate, and other performance-enhancing techniques. By following these recommendations, you'll be able to create a fast and responsive React application, even when dealing with large data sets.",
    },
    {
      id: 3,
      title: "React + Backend: A Guide to Building Full-Fledged Web Apps",
      content: "Abstract: In this article, we'll explore different approaches to integrating React with various backend frameworks, such as Node.js, Express, Django, and others. We'll delve into data exchange between the frontend and backend, managing authentication and authorization, and creating APIs to interact with React applications. This guide will help you build a comprehensive full-stack application, combining the power of React on the client-side with backend functionality to handle data and business logic.",
    },
    {
      id: 4,
      title: "Angular: A Guide for Beginners",
      content: "Abstract: In this article, we will introduce you to Angular - one of the most popular frameworks for web application development. We will cover the basics of creating components in Angular and how to manage data using services. This guide will provide you with the essential knowledge to start building your own applications using Angular.",
    },
    {
      id: 5,
      title: "Angular Routing: A Comprehensive Guide to Application Navigation",
      content: "Abstract: In this article, we will explore the routing and navigation mechanism in Angular, which allows you to create transitions between different pages in your web application. We'll learn how to configure routes, pass parameters, implement route guards, and create dynamic links to enhance the user experience. With our comprehensive guide, you will master the art of navigation in Angular applications.",
    },
    {
      id: 6,
      title: "Angular Performance: How to Make Your App Faster",
      content: "Abstract: In this article, we will focus on optimizing performance in Angular applications and provide practical tips and methods to improve your app's efficiency. We'll discuss strategies for identifying and addressing bottlenecks, utilizing lazy loading, optimizing HTTP requests, and other key aspects. By implementing these recommendations, you'll be able to create a fast and efficient Angular application for your users.",
    },
    {
      id: 7,
      title: "Vue.js Essentials: A Beginner's Guide",
      content: "Abstract: In this article, we will dive into Vue.js - a progressive JavaScript framework for building user interfaces. We'll cover the fundamentals of Vue.js, including the Vue instance, data binding, directives, and components. By the end of this beginner's guide, you'll have a solid understanding of Vue.js and be ready to create interactive web interfaces.",
    },
    {
      id: 8,
      title: "Vue.js State Management: Mastering Vuex",
      content: "Abstract: In this article, we will explore state management in Vue.js and focus on Vuex - the official state management library for Vue.js applications. We'll learn about the core concepts of Vuex, such as state, mutations, actions, and getters, and how to use them to manage complex application states. By mastering Vuex, you'll be able to efficiently manage the state of your Vue.js applications.",
    },
    {
      id: 9,
      title: "Vue.js Performance: Boosting Your App's Speed",
      content: "Abstract: In this article, we'll delve into performance optimization in Vue.js and provide you with a set of best practices to make your Vue.js applications faster and more responsive. We'll cover techniques like lazy loading, component optimization, virtual scrolling, and Vue's built-in performance tools. By implementing these performance tips, you'll be able to create lightning-fast Vue.js applications that deliver an exceptional user experience.",
    },

  ];

  return (
    <div className="App">
      <Router>
        <Header />
        <Slider />
        <InfoBlock
          onOpenShowFullItem={handleOpenShowFullItem}
          items={[
            {
              title: "React",
              info: { ReactInfo },
              icon: <FaReact />,
            },
            {
              title: "Angular",
              info: { AngularInfo },
              icon: <FaAngular />,
            },
            {
              title: "Vue.js",
              info: { VueInfo },
              icon: <FaVuejs />,
            },
          ]}
        />
        <ArticleBlock articles={articles} />
        <Footer />
        <ShowFullItem
          isOpen={isShowFullItemOpen}
          onClose={handleCloseShowFullItem}
          title={itemTitle}
          info={itemInfo}
          icon={itemIcon}
        />
      </Router>
    </div>
  );
}

export default App;