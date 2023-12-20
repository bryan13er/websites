import React from "react";
import "./Projects.css";
import { Carousel } from "../Useful_Comps/Carousel";

// images

import {bathroom1, bathroom2} from "../../ProjectImages/bathroom/bathroomImgs";
import {chairTable1, chairTable2, chairTable3, chairTable4, chairTable5, chairTable6} from "../../ProjectImages/chairTable/chairTableImgs";
import {exterior1, exterior2, exterior3, exterior4, exterior5, exterior6, exterior7} from "../../ProjectImages/exterior/exteriorImgs";
import {kitchCol1, kitchCol2, kitchCol3, kitchCol4} from "../../ProjectImages/kitchCol/kitchColImgs";
import {door1, door2} from "../../ProjectImages/greenDoor/greenDoorImgs";
import {livingRoom1, livingRoom2, livingRoom3, livingRoom4} from "../../ProjectImages/livingRoom/livingRoomImgs";
import {knob1, knob2, knob3} from "../../ProjectImages/knob/knobImgs";
import {garage1, garage2, garage3, garage4} from "../../ProjectImages/garage/garageImgs";
import {kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6} from "../../ProjectImages/kitchen/kitchenImgs";

// just wrap up everything from office down

const Projects = () => {
 
  const pData = {
    pData1: [
      {
        title: "bathroom",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: bathroom1, alt: "b1" },
          { src: bathroom2, alt: "b2" },
        ]
      },
      {
        title: "chair table",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: chairTable1, alt: "ct1" },
          { src: chairTable2, alt: "ct2" },
          { src: chairTable3, alt: "ct3" },
          { src: chairTable4, alt: "ct4" },
          { src: chairTable5, alt: "ct5" },
          { src: chairTable6, alt: "ct6" },
        ]
      }
    ],
    pData2: [
      {
        title: "exterior",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: exterior1, alt: "e1" },
          { src: exterior2, alt: "e2" },
          { src: exterior3, alt: "e3" },
          { src: exterior4, alt: "e4" },
          { src: exterior5, alt: "e5" },
          { src: exterior6, alt: "e6" },
          { src: exterior7, alt: "e7" },
        ]
      },
      {
        title: "kitchCol",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: kitchCol1, alt: "g1" },
          { src: kitchCol2, alt: "g2" },
          { src: kitchCol3, alt: "g3" },
          { src: kitchCol4, alt: "g4" },
        ]
      }
    ],
    pData3: [
      {
        title: "green door",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: door1, alt: "gd1" },
          { src: door2, alt: "gd2" },
        ]
      },
      {
        title: "livingRoom",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: livingRoom1, alt: "k1" },
          { src: livingRoom2, alt: "k2" },
          { src: livingRoom3, alt: "k3" },
          { src: livingRoom4, alt: "k4" },
        ]
      }
    ],
    pData4: [
      {
        title: "knob",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: knob1, alt: "knob1" },
          { src: knob2, alt: "knob2" },
          { src: knob3, alt: "knob3" }
        ]
      },
      {
        title: "garage",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: garage1, alt: "g1" },
          { src: garage2, alt: "g2" },
          { src: garage3, alt: "g3" },
          { src: garage4, alt: "g4" },
        ]
      }
    ],
    pData5: [
      {
        title: "kitchen",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: kitchen1, alt: "kitch1" },
          { src: kitchen2, alt: "kitch2" },
          { src: kitchen3, alt: "kitch3" },
          { src: kitchen4, alt: "kitch4" },
          { src: kitchen5, alt: "kitch5" },
          { src: kitchen6, alt: "kitch6" },
        ]
      },
      {
        title: "kitchCol",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        sliderPics: [
          { src: kitchCol1, alt: "g1" },
          { src: kitchCol2, alt: "g2" },
          { src: kitchCol3, alt: "g3" },
          { src: kitchCol4, alt: "g4" },
        ]
      }
    ],
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
