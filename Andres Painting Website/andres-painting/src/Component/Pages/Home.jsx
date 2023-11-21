import React from "react";
import "./Home.css";
import paint_brushes from "../../images/painters_group.png";
import paint_logo from "../../images/temp_logo.png"
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import HouseIcon from '@mui/icons-material/House';
import BrushIcon from '@mui/icons-material/Brush';

const services_row = {
  1: {
    icon: FormatPaintIcon,
    title: 'Interior Painting',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit non voluptas mollitia quidem a dolores autem exercitationem esse placeat?'
  },
  2 : {
    icon: HouseIcon,
    title: 'Exterior Painting',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit non voluptas mollitia quidem a dolores autem exercitationem esse placeat?'
  },
  3: {
    icon: BrushIcon,
    title: 'Detailed Finish',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit non voluptas mollitia quidem a dolores autem exercitationem esse placeat?'
  },
};

const Home = () => {
  const containers = [];

  for (let key in services_row) {
    const item = services_row[key];
    containers.push(
      <div key={key} className="container">
        <div className="large-icon-container">
          <item.icon style={{ fontSize: '70px', color:'rgb(60, 146, 222)' }} className='icon'/>
        </div>
        <div className="container__text">
          <h2>{item.title}</h2>
          <p className="contDesc"><br/>{item.text}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="containerStyle">
        <img
          src={paint_logo}
          alt="paint"
          className="logo"
        />
        <h1 className="rollerText">Pacific Grove, CA</h1>
        <a href="tel:1234567890" className="contactInfo number">(123) 456 7890</a>
      </div>
      <div className="flexContainer">
        <div className="words">
          <h1 className="AboutMe"> Expert Professional Painter</h1>
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
      <h1 className="HomeServicesTitle">Services Offered</h1>
      <div className="ServicesOffered">
        <div className="container-wrapper">
          {containers}
        </div>
        <div className="container-wrapper">
          {containers}
        </div>
      </div>
      <div className="Location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51242.24975994375!2d-121.9086985990212!3d36.61096385705871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de45270b5fb91%3A0xee484909d84a3d5e!2sMonterey%2C%20CA!5e0!3m2!1sen!2sus!4v1699410385807!5m2!1sen!2sus"
          width="600"
          height="450"
          title="Google Map of Monterey, CA"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="LocationTextContainer">
          <h1 className="LocationText">Proudly Serving the Monterey Peninsula and Greater Area For More Than 20 Years</h1>
        </div>
      </div>
      <div className="bottomImage">
        <div className="item">
          Contact: <br />
          <span className="small-line" />
          <a href="mailto:sample@gmail.com" className="contactInfo">sample@gmail.com</a> {' '}
          <a href="tel:1234567890" className="contactInfo">(123) 456 7890</a>
        </div>
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