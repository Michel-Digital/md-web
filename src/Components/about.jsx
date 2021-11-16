import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import TeamCarousel from "./carousel2";

const AboutUs = () => {
  AOS.init({});
  const locationObj = document.location.href;
  return (
    <>
      <Helmet>
        <title>Michel Digital - About</title>
        <meta
          name="description"
          content="About Page for Michel Digital. A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
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
      {/* <!-- Intro --> */}
      <section className="bg-light pt-8 pt-md-10 pb-5 pb-md-5 bg-topography-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-5 text-darkblue fx-fade-up">
                Michel Digital was founded to help businesses attain innovative
                strategies for
                <span className="text-info"> exponential growth</span>.
              </h1>

              <hr className="border-gray-300 my-5 fx-fade-up animation-delay-3 w-50" />

              <p className="lead text-muted fx-fade-up animation-delay-3">
                By incrementing your digital footprint through our
                technical services, we help you achive your business goals and
                aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Collage --> */}
      <TeamCarousel></TeamCarousel>
      <section className="bg-light pb-6 fx-fade-up animation-delay-6">
        <div className="container-fluid">
          <div className="row g-0">
            {/* <!-- Left side --> */}
            <div className="col-md-12 text-center pr-2">
              <div className="text-center mt-5 mt-lg-6">
                <div className="d-flex align-items-center">
                  <hr className="border-gray-300 flex-fill mr-4" />
                  <span className="text-info text-uppercase-bold-sm">
                    About us
                  </span>
                  <hr className="border-gray-300 flex-fill ml-4" />
                </div>

                <h4 className="text-dark font-weight-normal mt-4 ml-lg-10 mr-lg-10 text-muted">
                  Michel Digital is a technology innovation and consulting
                  company that seeks to create unique opportunities for growing{" "}
                  <span className="text-info">start-ups and businesses</span>.
                </h4>

                <h4 className="text-dark font-weight-normal mt-4">
                  Businesses of any size can improve their speed and efficiency
                  by utilizing our skillset and experience.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call to action --> */}
      <section
        className="bg-cover text-center overlay overlay-darkblue overlay-20 py-8 jarallax ctaImage bg-light"
        data-jarallax
        data-speed="0.8"
      >
        <div className="position-relative text-white">
          <h1>Get Started Now</h1>

          <p className="lead">
            Contact us today to get started with a free initial consultation.
          </p>

          <a
            href="/about"
            className="btn btn-info btn-lg rounded-pill hover-lift mt-4"
          >
            Start Today
            <i className="fas fa-arrow-right fa-xs ml-2"></i>
          </a>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
