import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import logo from '../assets/images/baselogo.svg'
import titleImage from '../assets/images/blog/appdevelopmentmistakes/appdev.jpg'

const BlogAppDev = () => {
  AOS.init({});
  const locationObj = document.location;

  return (
    <>
      <Helmet>
        <title>8 Mistakes To Avoid During App Development</title>
        <meta
          name="description"
          content="These are the 8 important commonly-made mistakes to understand regarding the app development process"
        /> 
        <meta name="keywords" content="mobile development, app development, android app development, ios app development, android and ios development, development, ios, android" />
        {/* <!-- Open Graph / Facebook --> */} 
        
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          
          {/* Change Below To Adjust Sharing */}\
          <meta property="og:title" content="Michel Digital - 8 Mistakes To Avoid During App Development" />
        <meta
          name="og:description"
          content="These are the 8 important commonly-made mistakes to understand regarding the app development process"
        />
          <meta property="og:image" content="" />
          <meta property="og:site_name" content="Michel Digital - 8 Mistakes To Avoid During App Development" />

          {/* <!-- Twitter --> */}
          <meta name="twitter:image:alt" content="" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={locationObj}
          />
          <meta property="twitter:title" content="Michel Digital -" />
          <meta
            property="twitter:description"
            content="These are the 8 important commonly-made mistakes to understand regarding the app development process"
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
              8 Mistakes To Avoid During App Development
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
                Every business with a web presence needs a mobile app. Still, not everyone seems to be conscious of the mistakes made when we begin app development. There are many things to contemplate and prepare before the app development process starts. 
                </p>

                <p>
                Here are 8 major mistakes to avoid before mobile apps:
                </p>
                
                <img src={titleImage} className="img-fluid rounded-lg shadow-light hover-lift-light my-2" alt="advertisement types" />
                
                <h4 className="mt-5 text-center">1. No strategy:</h4>

                <p className="mt-4">
                It all starts with a method and, therefore, the right idea. Without these, any mobile outsourcing project will fail. Your company should have a transparent idea about what it wants the mobile app to realize and what features it should contain <em>(e.g., dashboards)</em>.
                <br /> <br />
                <span className="mt-2">For example, <em>"Help your child reach their maximum potential"</em> instead of <em>"Try our many reading, writing, math, shapes and colors programs"</em></span>
                </p>

                <h4 className="mt-5 text-center">2. Poor communication:</h4>

                <p className="mt-4">
                Good communication skills are essential for each project team functioning on your mobile outsourcing project. If the right things are not communicated properly, it can affect the top results.
                </p>

                <h4 className="mt-5 text-center">3. Making the app too big:</h4>

                <p className="mt-4">
                We regularly stumble upon some complicated application that doesn’t serve the app’s real purpose—to make the service more accessible. Instead, it confuses the user and helps for nothing.
                </p>

                <h4 className="mt-5 text-center">4. Designing poor UI/UX Planning:</h4>

                <p className="mt-4">
                UI/UX is that the soul of an application. User experience matters foremost while developing an application. Irrespective of how good your application performs from the backend, if the user isn’t ready to access the functionalities properly, it’s of no use.
                </p>

                <h4 className="mt-5 text-center">5. Memory management:</h4>

                <p className="mt-4">
                To run the heavy applications on the devices, checking the storage and memory management is de facto important. You can’t mismanage the memory usage. It’s necessary for the seamless performance of the appliance.
                </p>

                <h4 className="mt-5 text-center">6. Testing failures:</h4>

                <p className="mt-4">
                Testing an application before deployment is equally important as development. Testing failures can cost much to a developer. It’s suggested to run all the tests on the application before launching it.
                </p>

                <h4 className="mt-5 text-center">7. Not marketing your application:</h4>

                <p className="mt-4">
                Marketing is that the key to success within the digital era. Marketing has become very easy, and also the creative ideas make it stand out from the competitors. Planning your app must always include the marketing plans from the primary phase itself. Let it’s the teaser videos, photos, features but the concept of the applying must be conveyed to the end-users in a very way that draws them. The kind of selling depends on different applications.
                </p>

                <h4 className="mt-5 text-center">8. Ignoring feedback:</h4>

                <p className="mt-4">
                After launching the app, the most task is to retain it on the play store/AppStore. For retention, it’s important to test user feedback and update the appliance accordingly. If not done on time, it gets outdated, and other people lose faith in the application. Let there be ten positive reviews, but that one negative review will get more attention, so take feedback as a scope of improvement and work on that for the betterment.
                </p>
                

                {/* <!-- Quote --> */}
                <div className="text-center my-6">
                  <span className="display-1 text-purple d-block font-georgia font-italic mb-n4 mb-md-n5">
                    “
                  </span>
                  <em className="lead text-dark w-80 mx-auto mt-2">
                  “When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.”
                  </em>
                  <span className="mt-4 d-block text-gray-600 font-size-sm text-mute">
                  – Freeman Dyson, Mathematician
                  </span>
                </div>
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
export default BlogAppDev;