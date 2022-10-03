import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h1> Download our App</h1>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playStoreIcon"></img>
        <img src={appStore} alt="appStoreIcon"></img>
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE...</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; @hrithikRam15</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="www.instagram.com">Instagram </a>
        <a href="www.fb.com">Facebook</a>
        <a href="www.youtube.com">YouTube</a>
      </div>
    </footer>
  );
};

export default Footer;
