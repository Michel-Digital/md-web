import React from "react";

import logo from "../assets/images/footerLogo.svg";
import FAQ from "./faq";
import "../assets/css/modal.scss";

const Footer = () => {
  return (
    <footer className="footer footer-dark bg-dark pt-8">
      <div className="container text-center">
        <div className="row">
          <div className="footer-header mb-4 pb-md-2">
            <img
              className="footer-icon-logo"
              src={logo}
              alt="Michel Digital Brand Logo"
            />
          </div>
          <div className="col-12 col-md">
            <h6 className="footer-header mb-4 pb-md-2">Explore</h6>
            <a href={process.env.PUBLIC_URL + '/'} className="footer-link">
              Home
            </a>
            <a href={process.env.PUBLIC_URL + '/insights'} className="footer-link mt-2">
              Insights
            </a>
          </div>

          <div className="col-12 col-md mt-5 mt-md-0">
            <h6 className="footer-header mb-4 pb-md-2">Our Company</h6>
            <a href={process.env.PUBLIC_URL + '/contact'} className="footer-link">
              Contact Us
            </a>
            <a href={process.env.PUBLIC_URL + '/about'} className="footer-link mt-2">
              About Us
            </a>
          </div>

          <div className="col-12 col-md mt-5 mt-md-0">
            <h6 className="footer-header mb-4 pb-md-2">Support</h6>
            <FAQ></FAQ>
            <a href = "mailto:contact@micheldigital.com?subject = Project Inquiry&body = " target="_blank"
            rel="noreferrer" className="footer-link mt-2">
              Email Us
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-6">
          <a
            href="https://twitter.com/DigitalMichel"
            target="_blank"
            rel="noreferrer"
            className="hover-lift-light text-decoration-none mx-2"
          >
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-twitter fa-lg"></i>
            </span>
          </a>
          <a
            href="https://www.facebook.com/MichelDigital"
            target="_blank"
            rel="noreferrer"
            className="hover-lift-light text-decoration-none mx-2"
          >
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-facebook fa-lg"></i>
            </span>
          </a>
          <a
            href="https://www.instagram.com/micheldigitalservices/"
            target="_blank"
            rel="noreferrer"
            className="hover-lift-light text-decoration-none mx-2"
          >
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-instagram fa-lg"></i>
            </span>
          </a>
          <a
            href="https://g.page/r/CeLf9LQNrucTEAE"
            target="_blank"
            rel="noreferrer"
            className="hover-lift-light text-decoration-none mx-2"
          >
            <span className="icon-circle footer-social-icon">
              <i className="fab fa-google fa-lg"></i>
            </span>
          </a>
        </div>

        <div className="mt-6">
          <p className="footer-text mb-2">All rights reserved. © 2020.</p>
          <div className="d-flex justify-content-center">
            <a href="https://app.termly.io/document/privacy-policy/8dfde155-ec63-41ea-8f23-fe697dd72aad" target="_blank"
            rel="noreferrer" className="footer-text mx-3">
              Privacy & terms
            </a>
            <a href="https://app.termly.io/document/terms-of-use-for-website/2fe64fd2-7fee-4b24-9109-2b43f74b70aa" target="_blank"
            rel="noreferrer" className="footer-text mx-3">
              Terms of service
            </a>
            <a href={process.env.PUBLIC_URL + '/sitemap.xml'} target="_blank"
            rel="noreferrer" className="footer-text mx-3">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
