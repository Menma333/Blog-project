import React, { Component, useState } from "react";
import "./Home.css";
import Slider from "../../components/Slider/Slider";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import ArticleBlock from "../../components/ArticleBlock/ArticleBlock";
import ShowFullItem from "../../components/ShowFullItem/ShowFullItem";
import ArticleItem from "../../components/ArticleItem/ArticleItem";

const Home = ({ articles, handleLikeClicked }) => {
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

  const technologyTitles = ["React", "Angular", "Vue"];

  return (
    <>
      <Slider />
      <InfoBlock
        onOpenShowFullItem={handleOpenShowFullItem}
        // items={[
        //   {
        //     title: "React",
        //     info: ReactInfo,
        //     icon: <FaReact />,
        //   },
        //   {
        //     title: "Angular",
        //     info: AngularInfo,
        //     icon: <FaAngular />,
        //   },
        //   {
        //     title: "Vue.js",
        //     info: VueInfo,
        //     icon: <FaVuejs />,
        //   },
        // ]}
      />
      <ArticleBlock
        articles={articles}
        technologyTitles={technologyTitles}
        handleLikeClicked={handleLikeClicked}
      />
      <ShowFullItem
        isOpen={isShowFullItemOpen}
        onClose={handleCloseShowFullItem}
        title={itemTitle}
        info={itemInfo}
        icon={itemIcon}
      />
    </>
  );
};

export default Home;
