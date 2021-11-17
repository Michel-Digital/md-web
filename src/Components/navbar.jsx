import React, { useEffect } from "react";
import {Link} from '@reach/router'
import navLogo from "../assets/images/NavBar_Logo.png";

const Navbar = () => {
  useEffect(() => {
    const btn = document.querySelector(".nav-toggle");
    const oL = document.querySelectorAll(".oneLink");
    const links = document.querySelector(".links");
    const appBody = document.querySelector("#app-body")
    const mytap = (window.ontouchstart === null) ? 'touchstart' : 'click';

    if (links.classList.contains("activeNav")) {
      links.classList.remove("activeNav");
      appBody.classList.remove("overflowActive")
    }

    btn.addEventListener("click", () => {
      links.classList.toggle("activeNav");
      appBody.classList.toggle("overflowActive");
    });

    for (let i = 0; i < oL.length; i++) {
      if (links.classList.contains("activeNav")) {
      oL[i].addEventListener(mytap, () => {
        links.classList.toggle("activeNav");
        appBody.classList.toggle("overflowActive");
        });
      };
    };    
  });

  return (
    <nav id="navBar" className="navbar">
      <div className="nav-center" data-bs-scroll="true" data-bs-backdrop="true">
        {/* <!-- nav header --> */}
        <div className="nav-header">
          <a href={process.env.PUBLIC_URL + '/'}>
            <img
              className="nav-logo"
              src={navLogo}
              alt="Michel Digital Horizontal Nav Logo"
            />
          </a>
          <button className="nav-toggle" data-bs-toggle="collapse" data-bs-target="nav-center" aria-controls="nav-center" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- end nav header --> */}

        {/* <!-- links --> */}
        <ul className="links">
          <li>
            <Link to={process.env.PUBLIC_URL + '/'} className="oneLink">home</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/about'} className="oneLink">about us</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/services'} className="oneLink">services</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/insights'} className="oneLink">insights</Link>
          </li>
          <li>
            <Link to={process.env.PUBLIC_URL + '/contact'} className="oneLink">contact us</Link>
          </li>
        </ul>
        {/* <!-- end links -->
    
        <!-- social media --> */}
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/MichelDigital" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/DigitalMichel" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/micheldigitalservices/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/michel-digital/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://g.page/r/CeLf9LQNrucTEAE" target="_blank" rel="noreferrer">
              <i className="fab fa-google"></i>
            </a>
          </li>
        </ul>
        {/* <!-- social media --> */}
      </div>
    </nav>
  );
};
export default Navbar;
