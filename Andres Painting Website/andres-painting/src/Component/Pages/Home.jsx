import React from "react";
import "./Home.css";
import paint_brushes from "../../images/paint_and_brushes.jpg";

const Home = () => {
  return (
    <>
      <div className="containerStyle">
        <h1 className="rollerText">Call US</h1>
        <p> 831 521 2987</p>
      </div>
      <div className="flexContainer">
        <div className="words">
          <div className="spacer"></div>
          <h1> Expert Professional Organized </h1>
          <div className="spacer"></div>
          <p className="mainBlurb">
            At Handcrafted Finishes by Friday, your satisfaction is our main priority. Since our business started, quality has been our focus. By working with the best materials in the industry and employing the most experienced and meticulous painters, we are able to deliver solid and long-lasting solutions for everyone.
          </p>
        </div>
        <div className="imageContainer">
          <img
            src={paint_brushes}
            alt="paint"
            className="flexImage"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
