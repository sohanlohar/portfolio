import React from "react";
import "./skills.css";
import AppDesign from "../../assets/app-design.jpg";
import UiUxDesign from "../../assets/ui-ux-design.jpg";
import WebDesign from "../../assets/web-design.jpg";

const Skills = () => {
  return (
    <section id="skills" className="section-wrapper">
      <div className="aboutSection">
        <h2 className="sectionTittle">What I Do</h2>
        <p className="sectionDescription">
          What I Do is video clips from Alberta on trapping, hunting, fishing,
          building projects and just some handy ideas that might help someone.
        </p>
      </div>
      {/* <div className="skillBars">
        <div className="skillbar">
          <div className="skill-icon">
            <img src={AppDesign} alt="App Design" />
          </div>
          <div className="skillsText">
            <h4>App Design</h4>
            <p>App Design</p>
          </div>
        </div>
        <div className="skillbar">
          <div className="skill-icon">
            <img src={UiUxDesign} alt="UI/UX Design" />
          </div>
          <div className="skillsText">
            <h4>UI/UX Design</h4>
            <p>UI/UX Design</p>
          </div>
        </div>
        <div className="skillbar">
          <div className="skill-icon">
            <img src={WebDesign} alt="Web Design" />
          </div>
          <div className="skillsText">
            <h4>Web Design</h4>
            <p>Web Design</p>
          </div>
        </div>
      </div> */}

      <div class="skillBars">
        <figure class="skillbar">
          <img src={AppDesign} alt="App Design" />
          <figcaption>
            <h2>
              <span>App</span> Design
            </h2>
            <p>Design likes to appear out of thin air.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
        <figure class="skillbar">
          <img src={UiUxDesign} alt="UI/UX Design" />
          <figcaption>
            <h2>
              <span>UI/UX</span> Design
            </h2>
            <p>Design likes to appear out of thin air.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
        <figure class="skillbar">
          <img src={WebDesign} alt="Web Design" />
          <figcaption>
            <h2>
              <span>Web</span> Design
            </h2>
            <p>Web likes to appear out of thin air.</p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Skills;
