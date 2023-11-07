import React from "react";
import "./Home.css";
import paint_brushes from "../../images/painters_group.png";
import paint_logo from "../../images/temp_logo.png"

const Home = () => {
  return (
    <>
      <div className="containerStyle">
        <img
          src={paint_logo}
          alt="paint"
          className="logo"
        />
        <h1 className="rollerText">Monterey, CA</h1>
        <p className="number"> (831) 521-2987</p>
      </div>
      <div className="flexContainer">
        <div className="words">
          <h1> Expert Professional Located in Monterey </h1>
          <p className="mainBlurb">
            Lorem ipsum dgolor sit amet, consectetur adipisicing elit. Architecto vitae recusandae voluptates eveniet, quidem velit ab animi. Accusantium error, ducimus neque illum blanditiis reiciendis corrupti sunt, dicta dolorem asperiores eius laborum. Cupiditate eaque magnam aut dolorum qui suscipit sunt libero alias nulla recusandae laudantium, non sapiente omnis beatae, voluptas ab, labore corporis voluptatum architecto fuga nemo adipisci quas! Libero, quia exercitationem, ab sequi nobis aperiam soluta sint ex sit quibusdam assumenda? Error laudantium quidem omnis quia, amet vitae unde nisi veritatis dicta harum, consequuntur culpa voluptates laboriosam velit obcaecati facilis? 
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
      <div className="bottomImage">
        <div className="item">Contact: <br/><span className="small-line"/> sample@gmail.com (123) 456 7890</div>
        <img
            src={paint_logo}
            alt="paint"
            className="logo"
        />
        <div className="item2">Hours Of Operation: <br/><span className="small-line"/> Monday-Saturday 9am-5pm</div>
      </div>
    </>
  );
};

export default Home;
