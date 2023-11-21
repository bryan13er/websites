import React from "react";
import group from "../../images/painters_group.png";
import roller from "../../images/paint-roller.jpg";
import s_roller from "../../images/stock_roller.jpg";

import "./Projects.css";
import { Carousel } from "../Useful_Comps/Carousel";

const Projects = () => {
 
  const pData = {
    pData1: [
      {
        title: "Title 1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      },
      {
        title: "Title 2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      }
    ],
    pData2: [
      {
        title: "Title 3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      },
      {
        title: "Title 4",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      }
    ],
    pData3: [
      {
        title: "Title 5",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      },
      {
        title: "Title 6",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      }
    ],
    pData4: [
      {
        title: "Title 7",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      },
      {
        title: "Title 8",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: group, alt: "group" },
          { src: roller, alt: "roller" },
          { src: s_roller, alt: "roller on wall" }
        ]
      }
    ]
  };

  const renderProjectsItems = (projectsData) => {
    return projectsData.map((project) => (
      <div className="ProjectsContainer" key={project.title}>
        <Carousel data={project.sliderPics} className="Project-Carousel" />
        <div className="ProjectText">
          <h1 className="ProjectTitle">{project.title}</h1>
          <p className="ProjectDesc">{project.desc}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
       <div className="titleBackground">
        <div className="ServicesTitle">Projects</div>
        <div className="ServicesTitleDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quaerat.</div>
        <div className="centered-dash"></div>
      </div>
      {Object.keys(pData).map((dataKey) => (
        <div className="services-row" key={dataKey}>
          {renderProjectsItems(pData[dataKey])}
        </div>
      ))}
      <div className="CenteredText">
        <p>For more recent projects, visit our social media profiles.</p>
      </div>
    </div>
  );
};

export default Projects;
