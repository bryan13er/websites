// Services.js
import React from "react";
import test from "../../images/arial_monterey.jpeg";
import "./Services.css";

const Services = () => {
  const sData = {
    sData1: [
      { title: "Title 1", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
      { title: "Title 2", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
    ],
    sData2: [
      { title: "Title 3", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
      { title: "Title 4", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
    ],
    sData3: [
      { title: "Title 5", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
      { title: "Title 6", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
    ],
    sData4: [
      { title: "Title 7", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
      { title: "Title 8", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit..." },
    ],
  };
  
  const renderServiceItems = (serviceData) => {
    return serviceData.map((service) => (
      <div
        key={service.title}
        className={`services-container`}
      >
        <img src={test} alt="monterey" className="topPic" />
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
