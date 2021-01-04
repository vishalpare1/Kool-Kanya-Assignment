import React from "react";
import fbLogo from "../images/facebook-white.svg";
import instaLogo from "../images/instagram-white.svg";
import twitterLogo from "../images/twitter-white.svg";
import appStore from "../images/app-store.svg";
import playStore from "../images/play-store.svg";
import windowsStore from "../images/windows-store.svg";

const Footer = () => {
  return (
    <div className="app-footer">
      <div className="container">
        <ul className="footer-nav-links">
          <li>Home</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
        <p className="copyright-text">
          Copyright © 2016 DEMO Streaming. All rights reserved.
        </p>

        <div className="row bottom-images">
          <div className="col-sm-4">
            <div className="social-icon-wrapper">
              <img width="15px" src={fbLogo} alt="Facebook icon" />
              <img width="32px" src={twitterLogo} alt="Twitter icon" />
              <img width="28px" src={instaLogo} alt="Instagram icon" />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="store-img-wrapper text-right">
              <img width="125px" src={appStore} alt="App store icon" />
              <img width="125px" src={playStore} alt="Play store icon" />
              <img width="100px" src={windowsStore} alt="Windows store icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
