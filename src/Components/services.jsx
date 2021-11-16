import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import AboutCarousel from "./carousel";

import PMService from '../assets/images/PMservice.jpg'
import Gradient from '../assets/images/gradient.jpg'

const Services = () => {
  AOS.init({});
  const locationObj = document.location.href;
  return (
    <>
      <Helmet>
        <title>Michel Digital - Services</title>
        <meta
          name="description"
          content="Service page for Michel Digital. A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
        />
        <meta
          name="keywords"
          content="Technology,Consulting,App,Web,Development,Digital,Marketing,Product,Business,Strategy,Blog,Technology Blog, Digital Marketing, Web Development, App Development, Technology Consulting Firm"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          <meta property="og:title" content="Michel Digital" />
          <meta
            property="og:description"
            content="A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
          />
          <meta property="og:image" content="./graph.jpg" />
          <meta property="og:site_name" content="Michel Digital" />

          {/* <!-- Twitter --> */}
          <meta name="twitter:image:alt" content="Michel Digital" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={locationObj}
          />
          <meta property="twitter:title" content="Michel Digital" />
          <meta
            property="twitter:description"
            content="A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
          />
          <meta property="twitter:image" content="./graph.jpg" />
      </Helmet>
      {/* <!-- Main wrapper --> */}
  <section className="bg-white position-relative z-index-2 bg-topography-light">
    {/* <!-- Intro --> */}
    <div className="pt-7 pt-lg-8 pb-7">
      <div className="container">
        <h1 className="display-1 font-weight-bolder text-bg-clip fx-fade-up bg-gradient-img">
              <img src={Gradient} className="d-none" alt="purple gradient"/>
            {/* <!-- for eager load --> */}
          Our Services
        </h1>

        <div className="h3 font-weight-normal text-darkblue mt-4">
          <div className="d-inline d-md-block fx-fade-up animation-delay-2 w-lg-60">What we can do for your business by guiding your growth process and building digital products and brands with a human touch.</div>
        </div>
      </div>
    </div>

    {/* <!-- Work --> */}
    <section className="bg-light py-4 py-lg-4 fx-fade-up animation-delay-6">
    <div className="mt-4 mt-lg-4">
    <div className="container">
        <div className="row mt-6">
        <div className="col-md-6">
          <div className="text-center">
        <h2 className="text-darkblue">
          Product Management
        </h2>

        <span className="svg-icon svg-icon-xl text-purple">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><line x1="400" y1="256" x2="112" y2="256" style={{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32px"}}/></svg></span>

        <p className="text-muted w-lg-80 mx-auto mt-3">
        One of the prerequisites of a product's success is a well-thought-out business strategy. Our goal is to prevent the natural pitfalls of any start-up or business in its transitions to a more technological sphere. With our product handling experience, the company can focus on traditional means knowing that the digital and technical aspects are well handled. We provide U/X Support, Product Roadmap and Management, Technologies and Framework Guidance, Data Analysis Support, Consumer Studies, Branding, SEO and Rankings, Web and App Development Support, and E-Commerce Support.
        </p>
      </div>
          
        </div>
        <div className="col-md-6 mt-4 mt-md-0 fx-fade-up animation-delay-2">
          <img src={PMService} className="img-fluid rounded shadow-6 hover-lift-light video-card card-skew-left h-300 overlay" style={{width: "100%;"}} data-toggle="zoomerang" alt=""/>
        </div>
      </div>
    </div>
  </div>
   </section>
    <section className="bg-white py-7 pb-lg-7">
        <div className="container text-center">
          <h2
            data-aos="fade-in"
            data-aos-delay="4000"
            data-aos-duration="4000"
            className="text-darkblue"
          >
            Additional <span className="text-purple">Services</span>
          </h2>
          <p className="text-muted mt-4 text-secondary w-lg-60 mx-auto mt-2">
            Although we primarily operate as a consulting and product management company, We offer additional services in order to make transitions to the digital spheres much easier for businesses and start-ups
          </p>
          {/* <!-- Features --> */}
          <div
            data-aos="fade-in"
            data-aos-delay="4000"
            data-aos-duration="4000"
            className="row mt-5 mt-md-7 d-flex justify-content-around"
          >
            <div className="col-md-6 col-lg-3 mb-4 mb-md-6">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-browser"></i>
              </div>
              <h5 className="text-dark mt-4">
                Web Development
              </h5>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-6">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-search-dollar"></i>
              </div>
              <h5 className="text-dark mt-4">
                Search Engine Optimization
              </h5>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-md-6">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-ad"></i>
              </div>
              <h5 className="text-dark mt-4">
                Digital Marketing
              </h5>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-fingerprint"></i>
              </div>
              <h5 className="text-dark mt-4">
                Brand Management
              </h5>
            </div>
          </div>
        </div>
      </section>
      <AboutCarousel></AboutCarousel>
    {/* <!-- Call to action --> */}
    <div className="py-7 bg-topography-light">
      <div className="container text-center text-lg-left">
        <div className="svg-icon svg-icon-xxl text-purple">
          <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24"></polygon>
                  <path d="M18.5,8 C17.1192881,8 16,6.88071187 16,5.5 C16,4.11928813 17.1192881,3 18.5,3 C19.8807119,3 21,4.11928813 21,5.5 C21,6.88071187 19.8807119,8 18.5,8 Z M18.5,21 C17.1192881,21 16,19.8807119 16,18.5 C16,17.1192881 17.1192881,16 18.5,16 C19.8807119,16 21,17.1192881 21,18.5 C21,19.8807119 19.8807119,21 18.5,21 Z M5.5,21 C4.11928813,21 3,19.8807119 3,18.5 C3,17.1192881 4.11928813,16 5.5,16 C6.88071187,16 8,17.1192881 8,18.5 C8,19.8807119 6.88071187,21 5.5,21 Z" fill="#000000" opacity="0.3"></path>
                  <path d="M5.5,8 C4.11928813,8 3,6.88071187 3,5.5 C3,4.11928813 4.11928813,3 5.5,3 C6.88071187,3 8,4.11928813 8,5.5 C8,6.88071187 6.88071187,8 5.5,8 Z M11,4 L13,4 C13.5522847,4 14,4.44771525 14,5 C14,5.55228475 13.5522847,6 13,6 L11,6 C10.4477153,6 10,5.55228475 10,5 C10,4.44771525 10.4477153,4 11,4 Z M11,18 L13,18 C13.5522847,18 14,18.4477153 14,19 C14,19.5522847 13.5522847,20 13,20 L11,20 C10.4477153,20 10,19.5522847 10,19 C10,18.4477153 10.4477153,18 11,18 Z M5,10 C5.55228475,10 6,10.4477153 6,11 L6,13 C6,13.5522847 5.55228475,14 5,14 C4.44771525,14 4,13.5522847 4,13 L4,11 C4,10.4477153 4.44771525,10 5,10 Z M19,10 C19.5522847,10 20,10.4477153 20,11 L20,13 C20,13.5522847 19.5522847,14 19,14 C18.4477153,14 18,13.5522847 18,13 L18,11 C18,10.4477153 18.4477153,10 19,10 Z" fill="#000000"></path>
              </g>
          </svg>
        </div>
        <h2 className="mt-4">
          Have a great project in mind?
        </h2>
        <p className="text-secondary lead">
          Let's make it real!
        </p>
        <a href="/contact" className="btn btn-purple btn-lg rounded-pill text-uppercase-bold-sm shadow-sm hover-lift mt-4">
          Get in touch
          <i className="fa fa-arrow-right fa-xs hover-lift-icon ml-2"></i>
        </a>
      </div>
    </div>
  </section>
    </>
  );
};
export default Services;
