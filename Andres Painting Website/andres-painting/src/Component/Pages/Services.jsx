// Services.js
import React, { useState, useEffect } from "react";
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
  
  
  const [openTitles, setOpenTitles] = useState([]);

  const handleContainerClick = (title) => {
    setOpenTitles((prevTitles) => {
      // Toggle the state of the clicked title
      const isOpen = prevTitles.includes(title);
      if (isOpen) {
        // If the title is in the array, remove it to close the container
        return prevTitles.filter((prevTitle) => prevTitle !== title);
      } else {
        // If the title is not in the array, add it to open the container
        return [...prevTitles, title];
      }
    });
  };

   // Clear openTitles array when screen size is below 1000px
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setOpenTitles([]);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderServiceItems = (serviceData) => {
    return serviceData.map((service) => (
      <div
        key={service.title}
        className={`services-container`}
        onClick={() => handleContainerClick(service.title)}
      >
        <img src={test} alt="monterey" className="topPic" />
        <div className="text-container">
          <h1>{service.title}</h1>
          <p 
            className={`service-desc ${openTitles.includes(service.title) ? 'open' : ''}`}
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
