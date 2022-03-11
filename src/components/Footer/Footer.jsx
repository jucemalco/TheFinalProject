import React from "react";
import logo from "../../images/BookMatch_Logo.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap fixed-bottom justify-content-between align-items-center py-3 my-4 border-top bg-dark row">
      <div className="bookmatchlogo px-5  d-flex align-items-center col-md-4 justify-content-start responsive-align">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="copyrights d-flex align-items-center col-md-4 justify-content-center responsive-align">
        <Link to="/" className=" text-muted text-decoration-none lh-1"></Link>
        <span className="text-muted">© 2021 Company, Inc</span>
      </div>

      <ul className="nav justify-content-end list-unstyled d-flex py-1 px-5 col-md-4 responsive-align">
        <li className="ms-3">
          <a
            className="text-muted"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagramLogo" />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="twitterLogo" />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebookLogo" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
