import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about">
      <div className="main">
        <img src="./background.webp" />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>
            Developer <span> & Designer</span>
          </h5>
          <p>
            I am a front-end web developer. I can provide can clean code and
            pixle perfect designe. I also make the website more & more
            intractive with web animation.A responsive designe the website more
            & interactive with web animations. A responsive design makes your
            website accessible to all users, regrardless of their device.
          </p>
          <button type="button">Let's Talk</button>
        </div>
      </div>
    </section>
  );
};

export default About;
