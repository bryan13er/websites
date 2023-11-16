// Services.js
import React from "react";
import test from "../../images/arial_monterey.jpeg"
import "./Services.css";

const Services = () => {
  return (
    <>
      <div className="titleBackground">
        <div className="ServicesTitle">Services</div>
      </div>
      <div className="services-row">
        <div className="services-container">
          <img
            src={test}
            alt="monterey"
            className="topPic"
          />
          <div className="text-container">
            <h1>Title</h1>
            <p className="service-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem labore voluptates temporibus quidem ducimus, similique dignissimos asperiores cumque nostrum, dicta voluptatem! Voluptatum, quibusdam explicabo.</p>
          </div>
        </div>
        <div className="services-container">
          <img
            src={test}
            alt="monterey"
            className="topPic"
          />
          <div className="text-container">
            <h1>Title</h1>
            <p className="service-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem labore voluptates temporibus quidem ducimus, similique dignissimos asperiores cumque nostrum, dicta voluptatem! Voluptatum, quibusdam explicabo.</p>
          </div>
        </div>
      </div>
      <div className="services-row">
        <div className="services-container">
          <img
            src={test}
            alt="monterey"
            className="topPic"
          />
          <div className="text-container">
            <h1>Title</h1>
            <p className="service-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem labore voluptates temporibus quidem ducimus, similique dignissimos asperiores cumque nostrum, dicta voluptatem! Voluptatum, quibusdam explicabo.</p>
          </div>
        </div>
        <div className="services-container">
          <img
            src={test}
            alt="monterey"
            className="topPic"
          />
          <div className="text-container">
            <h1>Title</h1>
            <p className="service-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui autem labore voluptates temporibus quidem ducimus, similique dignissimos asperiores cumque nostrum, dicta voluptatem! Voluptatum, quibusdam explicabo.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
