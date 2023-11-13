import React from "react";
import group from "../../images/painters_group.png";
import roller from "../../images/paint-roller.jpg";
import s_roller from "../../images/stock_roller.jpg";

import "./Projects.css";
import { Carousel } from "../Useful_Comps/Carousel";

const Projects = () => {
  const slides = [
    { src: group, alt: "group" },
    { src: roller, alt: "roller" },
    { src: s_roller, alt: "roller on wall" },
  ];

  return (
    <div>
      <h1 className="ProjectsTitle">Projects</h1>
      <div className="CenteredText">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget urna bibendum, imperdiet tellus at, lacinia metus. Nulla facilisi.</p>
      </div>
      <div className="ProjectsContainer">
        <div className="ProjectImage">
          <Carousel data={slides} />
        </div>
        <div className="ProjectText">
          <h1 className="ProjectTitle">Project Title</h1>
          <p className="ProjectDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quaerat debitis et nemo reiciendis voluptas excepturi aspernatur! Fugiat vitae fuga fugit vel est cumque magnam!</p>
        </div>
      </div>
      <div className="ProjectsContainer">
        <div className="ProjectImage">
          <Carousel data={slides} />
        </div>
        <div className="ProjectText">
          <h1 className="ProjectTitle">Project Title</h1>
          <p className="ProjectDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente doloribus voluptate temporibus provident amet excepturi, error pariatur animi ipsum voluptates qui molestiae quam, itaque dolore.</p>
        </div>
      </div>
      <div className="CenteredText">
        <p>For more recent projects please visit our socials</p>
      </div>
    </div>
    
  );
}

export default Projects;
