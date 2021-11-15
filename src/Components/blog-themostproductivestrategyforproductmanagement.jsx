import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import logo from '../Assets/Images/baselogo.svg'
import titleImage from '../Assets/Images/blog/productmanagement/PM.png'

const BlogPM = () => {
  AOS.init({});
  var locationObj = document.location.href;

  return (
    <>
      <Helmet>
        <title>The Most Productive Initial Strategy As A Product Manager</title>
        <meta
          name="description"
          content="Ignoring the advantages of a consumer product management approach can have grave ramifications for a product team. Let us pause for a moment to define what a user-focused product is."
        /> 
        <meta name="keywords" content="product management, user-centric product management, product strategy, branding strategy, product development lifecycle, product,article" />
        {/* <!-- Open Graph / Facebook --> */} 
        
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          
          {/* Change Below To Adjust Sharing */}\
          <meta property="og:title" content="The Most Productive Initial Strategy As A Product Manager" />
        <meta
          name="og:description"
          content="Ignoring the advantages of a consumer product management approach can have grave ramifications for a product team. Let us pause for a moment to define what a user-focused product is."
        />
          <meta property="og:image" content="" />
          <meta property="og:site_name" content="Michel Digital" />

          {/* <!-- Twitter --> */}
          <meta name="twitter:image:alt" content="" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={locationObj}
          />
          <meta property="twitter:title" content="The Most Productive Initial Strategy As A Product Manager" />
          <meta
            property="twitter:description"
            content="Ignoring the advantages of a consumer product management approach can have grave ramifications for a product team. Let us pause for a moment to define what a user-focused product is."
          />
          <meta property="twitter:image" content="" />
        
        
       
      </Helmet>
      {/* <!-- Bg Hero --> */}
      <div className="h-200 h-md-250 bg-pistachio bg-topography-light"></div>

      {/* <!-- Post --> */}
      <section className="bg-light pb-8">
        <div className="container fx-fade-up">
          <div className="row justify-content-center">
            {/* <!-- Post wrapper --> */}
            <div className="col-lg-10 bg-white shadow-light-lg rounded py-5 px-4 px-md-7 mt-n6">
              {/* <!-- Author avatar --> */}
              <div className="avatar d-block mx-auto mt-n6 relative-top--7">
                <img
                  src={logo}
                  className="rounded-circle avatar-image shadow"
                  alt=""
                />
              </div>

              {/* <!-- Title --> */}
              <h2 className="text-center font-weight-normal mt-4">
              The Most Productive Initial Strategy As A Product Manager
              </h2>

              {/* <!-- Author --> */}
              <div className="text-center text-muted font-size-sm mt-3">
                <span className="mr-3">
                  <span className="svg-icon svg-icon-sm text-muted relative-top--1 mr-1">
                  <i className="fa-duotone fa-pen-fancy fa-xs mr-1"></i>
                  </span>
                  By Michel Digital
                </span>
                <span className="ml-3">
                  <i className="fa-duotone fa-calendar fa-xs mr-1 relative-top--1"></i>
                  November 2021 
                </span>
              </div>

              <img
                src="../Assets/Images/blog/waves.png"
                className="d-block mx-auto mt-4 mb-5"
                alt=""
              />

              {/* <!-- Article --> */}
              <div className="text-dark">
                <p>
                Have you heard of "Google Glass"? "Facebook Home," Facebook's smartphone attempt. Or JooJoo, Apple's iPad direct competitor?
                Don't worry if you haven't heard of some of these products; most people haven't.
                </p>
                <p>
                These three examples have in common that they are all failed products that could have been salvaged if their creators had emphasized arguably the most critical approach in product management: focusing on users.
                Ignoring the advantages of a consumer product management approach can have grave ramifications for a product team. Let us pause for a moment to define what a user-focused product is.
                </p>
                
                <img src={titleImage} className="img-fluid rounded-lg shadow-light hover-lift-light my-2" alt="advertisement types" />

                <p className="mt-4">
                A user-centric product prioritizes a consumer's demands and joint issues as the essential initial point for the product development lifecycle. Instead of developing the product without external support, a consumer-focused product team would create it with the help of consumers along the way.
This begins with the opportunity to interact with your consumers.
                </p>
                <p className="mt-4">
                To be honest, there is never enough time to do studies for every choice or test every conceivable event that may change the course of a product. To maximize the odds of determining the correct product decisions the majority of the time, a PM must develop user intuition to assist her team in understanding what consumers care about, including which decisions are low risk or high risk.
                </p>
                <p className="mt-4">
                User Communications Come in a Variety of Forms
                A PM can use a variety of channels and procedures at various points of the product development lifecycle:
                </p>

                <h4 className="mt-5 text-center">Conduct a User interview:</h4>

                <p className="mt-4">
                This is a more direct way of understanding an individual experience of a customer. This is an opportunity for questioning them about their difficulties and what is working well for them. Learning who they are and their behaviors related to your product and attempting to comprehend what it is like to be one of your consumers. 
                </p>

                <h4 className="mt-5 text-center">Conduct Pitch:</h4>

                <p className="mt-4">
                Asking people to check out a feature or the entire product. This is going to get you information on how users naturally interact with your product. 
                </p>

                <h4 className="mt-5 text-center">Acting as Customer Support:</h4>

                <p className="mt-4">
                Assisting people with problems and difficulties encountered throughout various usage cases. This is a direct way of understanding the common pitfalls of your product in the eyes of consumers.
                </p>

                <h4 className="mt-5 text-center">Conduct a product demo:</h4>

                <p className="mt-4">
                Instead of utilizing internal concepts or videos, conduct concept testing using the actual product. During the demonstration, attempt to discover whether the consumers are as excited as you are and notice the same deficiencies that you are. What you want to achieve as a PM would be to bring the team's and users' perspectives on the product closer together.
                </p>
                <h4 className="mt-5 text-center">Conduct an Alpha Phase:</h4>

                <p className="mt-4">
                Alpha testing is the first thorough examination of a product to confirm that it satisfies business needs and performs appropriately. It also acts as the first mass opportunity users can have with your products.
                </p>
                

                {/* <!-- Quote --> */}
                <div className="text-center my-6">
                  <span className="display-1 text-purple d-block font-georgia font-italic mb-n4 mb-md-n5">
                    “
                  </span>
                  <em className="lead text-dark w-80 mx-auto mt-2">
                  “Customers are who we build our apps for, so we want to give them what they want and
                    need, while empathizing with their struggles and frustrations. For me it’s not necessarily the mantra of the customer is always right, but do everything with the customer in mind.”
                  </em>
                  <span className="mt-4 d-block text-gray-600 font-size-sm text-mute">
                  – Jason Pace, Technical Product Manager at Alkami Technology
                  </span>
                </div>
                
                <p className="mt-4">
                Whatever technique a PM decides to utilize as a bridge between the product and the users, the most important thing to consider when adopting a real customer-focused product management strategy is to build a good communication habit with the customers. Remember, they will be the ones spending the most time with your offering!
                </p>

              </div>
            
              {/* <!-- Author & social --> */}
              <div className="d-flex flex-column flex-sm-row align-items-center border-top border-gray-200 mt-6 py-5">
                {/* <!-- Avatar --> */}
                <div className="d-flex">
                  <div className="avatar mr-4">
                    <img
                      src={logo}
                      className="avatar-image rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-darkblue text-uppercase-xs font-weight-bolder">
                      Michel Digital
                    </span>
                    <span className="text-muted font-size-sm d-block">
                      Posted on November 2021
                    </span>
                  </div>
                </div>

                {/* <!-- Social links --> */}
                <div className="mt-4 mt-sm-0 ml-sm-auto">
                <a href="https://www.facebook.com/MichelDigital" target="_blank" rel="noreferrer" className="text-decoration-none text-muted mr-3">
                    <i className="fab fa-twitter fa-lg"></i>
                  </a>
                  <a href="https://twitter.com/DigitalMichel" target="_blank" rel="noreferrer" className="text-decoration-none text-muted mr-3">
                    <i className="fab fa-facebook fa-lg"></i>
                  </a>
                  <a href="https://www.instagram.com/micheldigitalservices/" target="_blank" rel="noreferrer" className="text-decoration-none text-muted">
                    <i className="fab fa-instagram fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light py-7 py-lg-8">
        <div className="container">
          <div className="row align-items-center text-center text-lg-left">
            <div className="col-lg-8 offset-lg-1">
              <div className="d-flex flex-column flex-lg-row align-items-center">
                <div className="icon-circle icon-circle-xl bg-darkblue text-white">
                  <img
                    className="icon-logo"
                    src={logo}
                    alt="Michel Digital Brand Logo"
                  />
                </div>

                <div className="flex-1 ml-lg-5 mt-4 mt-lg-0">
                  <h2 className="font-weight-normal text-darkblue">
                    Expand Your{" "}
                    <span className="text-purple">Digital Footprint</span>
                  </h2>
                  <p className="text-muted mt-3 mb-0">
                    Experience capabilities and the commitment of a trusted
                    technological partner in Michel Digital. Rely on us for the
                    next generation of applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mt-5 mt-lg-0">
              <a
                href="/contact"
                className="btn btn-purple btn-lg text-uppercase-bold-sm shadow-sm hover-lift"
              >
                Connect now
                <i className="fa fa-chevron-right fa-xs ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogPM;
