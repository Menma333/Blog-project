import React from "react";
import "../ShowFullItem/ShowFullItem.css";

const ShowFullItem = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="ShowFullItem__overlay">
      <div className="ShowFullItem__content">
        <h3>React</h3>
        <p>
          React is one of the most popular and popular JavaScript libraries for
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
          interfaces.
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ShowFullItem;
