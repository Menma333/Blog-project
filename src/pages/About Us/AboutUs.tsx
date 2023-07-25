import React from "react";
import "./AboutUs.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="about__h1">About Us</h1>
      <p>
        Welcome to IT Bloggy - your go-to source for comprehensive information
        about modern frameworks and the ever-evolving world of IT. At IT Bloggy,
        we are passionate about empowering developers and IT enthusiasts with
        knowledge that helps them stay at the forefront of technology.
      </p>
      <p>
        Our mission is to create a platform that provides valuable insights,
        practical guidance, and the latest updates from the IT industry. Whether
        you are an experienced developer or just starting your journey in web
        development, IT Bloggy has something for everyone.
      </p>
      <p>
        We take pride in curating in-depth articles, tutorials, and reviews that
        cover a wide spectrum of topics, including frameworks like Vue.js,
        React, and Angular. Our team of dedicated authors ensures that each
        piece of content is informative, accurate, and tailored to cater to your
        learning needs.
      </p>
      <p>
        In the "Reviews and News" section, you can keep track of the latest
        updates, releases, and advancements in the world of frameworks and IT.
        Our timely news articles and comprehensive reviews will keep you well
        informed and equipped to make the best decisions for your projects.
      </p>
      <p>
        The "Tutorials and Guides" section is a treasure trove of knowledge,
        designed to help you master the art of building interactive web
        applications. From beginner-friendly tutorials to advanced techniques,
        our guides will enable you to take your development skills to new
        heights.
      </p>
      <p>
        We understand the challenges developers face, which is why our
        "Practical Tips" segment is dedicated to enhancing your productivity.
        Discover expert advice, best practices, and time-saving tips to optimize
        your development workflow and deliver top-notch results.
      </p>
      <p>
        As technology advances, so does the world of IT. In the future, we
        promise to explore and add new exciting categories to IT Bloggy. Topics
        like artificial intelligence, machine learning, blockchain,
        cybersecurity, and other cutting-edge areas will find their place in our
        blog, expanding your horizons and knowledge.
      </p>
      <p>
        We invite you to join our thriving community of developers and IT
        enthusiasts. Together, let's embrace the possibilities, stay informed,
        and embark on a journey of continuous learning with IT Bloggy.
      </p>
      <h3 className="about__h3">
        Welcome to IT Bloggy - your IT knowledge hub!
      </h3>
      <h3 className="about__h3">You can also join us on </h3>
      <h3 className="about__h3">
        <FaGithub className="icon__abouUS" />{" "}
        <FaLinkedin className="icon__abouUS" />{" "}
        <FaInstagram className="icon__abouUS" />{" "}
      </h3>
    </div>
  );
};

export default AboutUs;
