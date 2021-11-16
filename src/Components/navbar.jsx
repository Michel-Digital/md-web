import React, { useEffect } from "react";
// import {Link} from '@reach/router'
import navLogo from "../assets/images/NavBar_Logo.png";

const Navbar = () => {
  useEffect(() => {
    const btn = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");

    if (links.classList.contains("activeNav")) {
      links.classList.remove("activeNav");
    }

    btn.addEventListener("click", () => {
      links.classList.toggle("activeNav");
    });
  });

  return (
    <nav id="navBar" className="navbar">
      <div className="nav-center">
        {/* <!-- nav header --> */}
        <div className="nav-header">
          <a href={process.env.PUBLIC_URL + '/'}>
            <img
              className="nav-logo"
              src={navLogo}
              alt="Michel Digital Horizontal Nav Logo"
            />
          </a>
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- end nav header --> */}

        {/* <!-- links --> */}
        <ul className="links">
          <li>
            <a href={process.env.PUBLIC_URL + '/'}>home</a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/about'}>about us</a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/services'}>services</a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/insights'}>insights</a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/contact'}>contact us</a>
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
