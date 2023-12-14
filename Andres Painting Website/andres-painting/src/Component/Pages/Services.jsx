// Services.js
import React from "react";
import {Cabinets, Decks, Drywall, Exterior, Interior, PowerWash, Stain, Wallpaper} from "../../ServiceImages/simages";
import "./Services.css";

// images to use

const Services = () => {
  const sData = {
    sData1: [
      {
        title: "Interior Painting", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: Interior, alt: "interior" }
      },
      { 
        title: "Exterior Painting", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: Exterior, alt: "exterior" }

      },
    ],
    sData2: [
      { 
        title: "Drywall", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: Drywall, alt: "drywall" }
      },
      { 
        title: "Wallpaper", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: Wallpaper, alt: "wallpaper" }
      },
    ],
    sData3: [
      { 
        title: "Cabinet and Furniture", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: Cabinets, alt: "Cabinets" }
      },
      { 
        title: "Powerwashing", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: PowerWash, alt: "powerwash" }
      },
    ],
    sData4: [
      { 
        title: "Staining and Varnishing", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: Stain, alt: "staining" }
      },
      { 
        title: "Deck Painting", 
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
        pic: { src: Decks, alt: "deck" }
      },
    ],
  };
  
  const renderServiceItems = (serviceData) => {
    return serviceData.map((service) => (
      <div
        key={service.title}
        className={`services-container`}
      >
        <img src={service.pic.src} alt={service.pic.alt} className="topPic" />
        <div className="text-container">
          <h1
            className="ProjectTitle"
          >{service.title}</h1>
          <p 
            className={`service-desc`}
          >
              {service.description}
          </p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="titleBackground">
        <div className="ServicesTitle">Services</div>
        <div className="ServicesTitleDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quaerat.</div>
        <div className="centered-dash"></div>
      </div>
      {Object.keys(sData).map((dataKey) => (
        <div className="services-row" key={dataKey}>
          {renderServiceItems(sData[dataKey])}
        </div>
      ))}
    </>
  );  
};

export default Services;
