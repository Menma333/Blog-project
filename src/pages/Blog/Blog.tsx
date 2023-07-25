import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="blog__h1">Welcome to IT Bloggy</h1>
      <h2 className="blog__h2">
        Your Reliable Source for Modern Frameworks and the World of IT!
      </h2>
      <p>
        IT Bloggy is your go-to blog for navigating the dynamic world of web
        development and exploring the fascinating realm of information
        technology. We take pride in presenting you with insightful articles and
        comprehensive guides that cover a diverse range of topics, focusing on
        frameworks like Vue.js, React, and Angular.
      </p>
      <h2 className="blog__h2">Discover What Awaits You on IT Bloggy:</h2>
      <ol>
        <li>
          <strong>Reviews and News:</strong> Stay up-to-date with the latest
          framework updates and releases. We keep a close eye on the IT
          industry's ever-changing landscape, delivering fresh news,
          announcements, and captivating reviews straight to you.
        </li>
        <li>
          <strong>Tutorials and Guides:</strong> Our team of experienced authors
          crafts step-by-step guides and tutorials to help you master the
          fundamentals and advanced techniques of working with frameworks. Dive
          into the world of interactive web application development from
          scratch!
        </li>
        <li>
          <strong>Practical Tips:</strong> We share valuable insights to boost
          your development efficiency, steer clear of common pitfalls, and
          elevate the quality of your code.
        </li>
        <li>
          <strong>New IT Categories:</strong> In the future, IT Bloggy will
          expand its horizons and introduce exciting new categories, diving into
          information technology's cutting-edge domains. We'll explore
          captivating topics like artificial intelligence, machine learning,
          blockchain, cybersecurity, and much more.
        </li>
      </ol>
      <p>
        Our mission is to be your trusted guide in the vast world of IT,
        offering you up-to-date and high-quality information. We are dedicated
        to contributing to your growth and success in web development and the
        realm of information technology.
      </p>
      <p>
        Join us on this incredible journey to explore the boundless
        possibilities of frameworks and modern technologies. Together, we'll
        create an inspiring community of developers and IT enthusiasts.
      </p>
      <h3 className="blog__h3">
        Welcome to IT Bloggy - Your Gateway to the World of Frameworks and
        Intriguing IT-Related Topics.
      </h3>
    </div>
  );
};

export default Blog;
