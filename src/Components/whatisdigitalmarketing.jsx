import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import logo from '../Assets/Images/baselogo.svg'
import titleImage from '../Assets/Images/blog/digitalmarketing/digitalmarketing.png'

const BlogDM = () => {
  AOS.init({});
  var locationObj = document.location.href;

  return (
    <>
      <Helmet>
        <title>What Is Digital Marketing</title>
        <meta
          name="description"
          content="A high-level outlook into Digital Marketing"
        /> 
        <meta name="keywords" content="advertising, marketing, internet, promotion, web, email, digital marketing, ppc, link, banner, newsletter, blog, rss, article, ebook, forum " />
        {/* <!-- Open Graph / Facebook --> */} 
        
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          
          {/* Change Below To Adjust Sharing */}\
          <meta property="og:title" content="What Is Digital Marketing" />
        <meta
          name="og:description"
          content="A high-level outlook into Digital Marketing"
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
          <meta property="twitter:title" content="What Is Digital Marketing" />
          <meta
            property="twitter:description"
            content="A high-level outlook into Digital Marketing"
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
                  What Is Digital Marketing
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
                Utilizing online distributions methods to promote products is known as digital marketing. This approach is both time saving and cost effective. Digital marketing is done through items such as cell phones, SMS, MMS, instant messaging, websites, emails, banner advertisement and digital billboards.
                </p>
                
                <img src={titleImage} className="img-fluid rounded-lg shadow-light hover-lift-light my-2" alt="advertisement types" />

                <p className="mt-4">
                Digital marketing involves some of the techniques of direct marketing and Internet marketing. In digital marketing traditional methods of promotions are executed digitally. It involves marketing in two forms, pull and push.
                </p>

                <h4 className="mt-5 text-center">Pull Digital Marketing</h4>

                <p className="mt-4">
                Pull digital marketing requires the user to pull or extract the content directly. The customer has to approach the promotional matter and see the matter by himself. Examples are websites, forums and blogs. All these require clicking on a URL in order to view the content. The content that is being displayed doesn’t have to follow any guidelines. Effort is required to only display the content on the website or forum and there is no additional cost of sending the information to the customer, but the customer has to make the extra effort of reaching to the content .The customer doesn’t have to opt-in for such kind of promotion and one message is being viewed by all and it cannot be personalized. The customers who see the content cannot be traced, although the click through rate can be considered which give details about the number of clicks the message received. This is be done by enabling the click though tracking during the campaign, which records the information.
                </p>

                <h4 className="mt-5 text-center">Push Digital Marketing</h4>

                <p className="mt-4">
                Push digital marketing technologies requires the effort of both the marketer and the customer. The marketer has to push or send the content to the customer and the customer has to make the effort of receiving it. This is a very effective kind of marketing and the investments surely earn a big return as it creates brand recognition. SMS, MMS, emails, RSS podcasting are examples of push digital marketing. Since the content is sent to individuals, it can be personalized according to the intended recipient. Whether the message has been opened and viewed by the customer or deleted it can be tracked and reported. Information related to the customer such as name, geographical location could be traced. But when sending this king of message, certain criteria should be met as the SMS and emails sent are monitored. If the marketer doesn’t follow the rules and regulations properly, there is a possibility of messages getting rejected and blocked, before they reach the targeted audience and the message is considered to be spam. Bigger consequences involve marketers getting blacklisted temporarily or even permanently. The number would be blocked and they won’t be able to send any messages at all. Messages sent to the RSS feeders require a mechanism with an application to reach, when sent by an email marketing system.  
                </p>

                <h4 className="mt-5 text-center">Overview</h4>

                <p className="mt-4">
                Both forms of digital marketing should be used in consonance to achieve positive results. A smart marketer sends out emails along with SMS and uses multiple channels to market his products. The type of messages being sent should also be different from one another. They should not only be text, but animations, audios and videos. There is a possibility of using pull and push message technologies in conjunction like the email sent to a potential customer can have a URL or a banner ad, which on clicking downloads information. If there is enormous group of people to be reached via email, Email service providers can be hired who sends loads of emails to the customers on behalf of the marketer and they take measures so that the messages are not considered as spam.
                </p>

                <p className="mt-4">
                Although much of the marketing is opt-in, federal laws, such as CAN SPAM Act, have been passed to protect the customers from unscrupulous marketers who would go to any extent to promote their products or hackers or spammers who have a bad intent i.e. like harming the computer or installing adware, spyware on people’s computers.
                </p>

                {/* <!-- Quote --> */}
                <div className="text-center my-6">
                  <span className="display-1 text-purple d-block font-georgia font-italic mb-n4 mb-md-n5">
                    “
                  </span>
                  <em className="lead text-dark w-80 mx-auto mt-2">
                  Marketing is no longer about the stuff that you make, but about the stories you tell.”
                  </em>
                  <span className="mt-4 d-block text-gray-600 font-size-sm text-mute">
                  – Seth Godin, Author
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
export default BlogDM;
