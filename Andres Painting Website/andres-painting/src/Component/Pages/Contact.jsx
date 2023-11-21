import React from "react";
import "./Contact.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
    return (
      <>
        <div className="titleBackground">
          <div className="ServicesTitle">Contact</div>
          <div className="ServicesTitleDesc">Use the form below to start an estimate or use our other methods of contact</div>
          <div className="centered-dash"></div>
        </div>
        <div className="ContactFormContainer">
          <div className="ContactText">
            <div className="subTitle ContactSpace">Our Contact Info:</div>
            <a href="tel:123-456-7890">
            <p className="paragraphs">
              <PhoneIcon className="ContactIconColor"/> (123) 456-7890
            </p>
            </a>
            <a href="mailto:example@example.com">
              <p className="paragraphs">
                <EmailIcon className="ContactIconColor"/> example@example.com
              </p>
            </a>
            <a href="https://maps.google.com/">
              <p className="paragraphs">
                <LocationOnIcon className="ContactIconColor"/> 123 Main Street, Cityville
              </p>
            </a>
            <a href="https://www.instagram.com/accounts/login/">
              <p className="paragraphs">
                <InstagramIcon className="ContactIconColor"/> @yourinstagram
              </p>
            </a>
            <a href="https://en-gb.facebook.com/">
              <p className="paragraphs">
                <FacebookIcon className="ContactIconColor"/> @yourfacebook
              </p>
            </a>
          </div>
          <iframe
            title="Embedded Google Form"
            className="googleForm"
            src="https://docs.google.com/forms/d/e/1FAIpQLSdPeWto0QH0ruRmFXT29Hjsw_hsdfoyw1yh2bkStUFW8HMJpw/viewform?embedded=true"
            width="640"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </>
    );
}

export default Contact;
