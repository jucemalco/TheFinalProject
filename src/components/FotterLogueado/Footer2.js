import React from "react";
import logo from "../../images/BookMatch_Logo.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import facebook from "../../images/facebook.png";
import "./Footer2.css";
import { Link } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';

const Footer2 = () => {
  function MouseOver(event) {
    event.target.style.color = '#8b6685';
  }

  function MouseOut(event) {
    event.target.style.color = '';
  }
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center bg-dark row footer--container">
      <div className="bookmatchlogo px-5  d-flex align-items-center col-md-4 justify-content-start responsive-align">
        <Link to="/logueado/">
          <img src={logo} alt="Logo" className="footer--logo footer--img" />
        </Link>
      </div>
      <div className="copyrights d-flex align-items-center col-md-4 justify-content-center responsive-align">
        <Link to="/" className=" text-muted text-decoration-none lh-1"></Link>
        <span className="text-muted">© 2022 Company, Inc</span>
      </div>

      <ul className="nav justify-content-end list-unstyled d-flex py-1 px-5 col-md-4 responsive-align">
        <li className="ms-3">

          <span className="me-4" style={{ fontSize: "80%" }}>
            <a className="AiOutlineMail text-decoration-none" href="https://www.gmail.com/" onMouseOver={MouseOver} onMouseOut={MouseOut} target="_blank"
              rel="noopener noreferrer">
              <AiOutlineMail /> bookmatch9@gmail.com
            </a>
          </span>

          <a
            className="text-muted"
            href="https://www.instagram.com/bookmatch2022/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagram}
              alt="instagramLogo"
              className="footer--social_media"
            />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://twitter.com/Bookmatchcl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitter}
              alt="twitterLogo"
              className="footer--social_media"
            />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="text-muted"
            href="https://www.facebook.com/BookMatch-103136199036045"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebook}
              alt="facebookLogo"
              className="footer--social_media"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer2;
