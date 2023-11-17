import React from "react";
import monterey from "../../images/arial_monterey.jpeg"
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import HouseIcon from '@mui/icons-material/House';
import BrushIcon from '@mui/icons-material/Brush';

import "./About.css"

const values_row = {
  1: {
    icon: FormatPaintIcon,
    title: 'Customer Satifaction',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit non voluptas mollitia quidem a dolores autem exercitationem esse placeat?'
  },
  2 : {
    icon: HouseIcon,
    title: 'Quality Work',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit non voluptas mollitia quidem a dolores autem exercitationem esse placeat?'
  },
  3: {
    icon: BrushIcon,
    title: 'On Time Finish',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sit non voluptas mollitia quidem a dolores autem exercitationem esse placeat?'
  },
};

const About = () => {

  const containers = [];

  for (let key in values_row) {
    const item = values_row[key];
    containers.push(
      <div key={key} className="container values">
        <div className="large-icon-container values-logo">
          <item.icon style={{ fontSize: '70px' }}/>
        </div>
        <div className="ontainer__text">
          <h2>{item.title}</h2>
          <p><br/>{item.text}</p>
        </div>
      </div>
    );
  }


  return (
   <div>
    <h2 className="AboutTitle">
      ABOUT ME
    </h2>
    <h1 className="AboutQuote">
        Painting Your Vision With <span className="RainbowText">Skilled Precision</span>
      </h1>
    <img src={monterey} alt="monterey" className="AboutMePic"/>
    <p className="AboutQuote Values">My Mission</p>
    <div className="container-wrapper space">
      {containers}
    </div>
    <h1 className="AboutQuote">
      My Story
    </h1>
    <div className="split-container">
      <div className="text-section">
        <h2 className="bioTitle">With over 20 years of experience</h2>
        <p className="bioDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas esse a, quasi quae autem facilis eveniet optio, ipsa quo, magnam minus magni alias neque sunt commodi mollitia. Commodi minus pariatur eius voluptatem odit alias doloribus nostrum repellat, fugiat doloremque? Voluptas esse ratione corrupti aspernatur sequi! Itaque libero dicta voluptate aliquid?</p>
      </div>
      <div className="image-section">
        <img src={monterey} alt="painter" className="bioPic"/>
      </div>
    </div>
   </div>
  );
}

export default About;
