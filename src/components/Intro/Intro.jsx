import React from "react";
import "./intro.css";
import manImage from "../../assets/man-image.png";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

const Intro = () => {
  return (
    <section className="intro-wrapper">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Sohan Lohar</span>
          <br />
          Full Stack Developer
        </span>
        <p className="introPara">
          A software developer's introduction paragraph in a cover letter should
          introduce.
        </p>
        <Link to="https://sohanlohar.live/" target="_blank"  className="hireMeBtn">
          <button>
            <GiShoppingBag />
            Hire Me
          </button>
        </Link>
      </div>
      <div className="profile-image">
        <img src={manImage} alt="profile image" className="bg-image" />
      </div>
    </section>
  );
};

export default Intro;
