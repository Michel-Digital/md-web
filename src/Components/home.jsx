import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import ContactForm from "./contactForm";

import logo from "../assets/images/baselogo.svg";

import heroVid from "../assets/videos/desktop1_light.mp4";
import CEO from "../assets/images/CEO.jpg";
import featureVid from "../assets/videos/Isometric2_1200x1200.mp4";
import productVid from "../assets/videos/Isometric3_1200x1200.mp4";

const Home = () => {
  AOS.init({});
  const locationObj = document.location.href;
  return (
    <>
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="keywords"
          content="Technology,Consulting,App,Web,Development,Digital,Marketing,Product,Business,Strategy,Blog,Technology Blog, Digital Marketing, Web Development, App Development, Technology Consulting Firm"
        />
        <title>Michel Digital - Home</title>
        <meta name="title" content="Michel Digital - Home" />
        <meta
          name="description"
          content="Homepage for Michel Digital. A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
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
        <meta property="twitter:url" content={locationObj} />
        <meta property="twitter:title" content="Michel Digital" />
        <meta
          property="twitter:description"
          content="A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
        />
        <meta property="twitter:image" content="./graph.jpg" />
      </Helmet>
      <section className=" bg-white pt-5 pt-lg-7 pb-8 pb-lg-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left fx-fade-up animation-delay-2">
              <div className="icon-circle icon-circle-xl bg-darkblue text-white shadow-6">
                <img
                  className="icon-logo"
                  src={logo}
                  alt="Michel Digital Brand Logo"
                />
              </div>

              <h1 className="display-4 mt-4">
                Build your ideas into{" "}
                <span className="text-purple">Enterprises</span>
              </h1>

              <p className="text-muted mt-4">
                Digitalization is transforming our daily lives, our consumption
                habits, and our relationships. It's time to expand your
                businesses digital footprint the right way.
              </p>

              <div className="row mt-5 mb-5">
                <div className="col-12 col-lg-auto mt-4 mt-lg-0">
                  <a
                    href="/contact"
                    className="btn btn-purple btn-lg text-uppercase-bold-sm shadow-sm hover-lift"
                  >
                    Contact Us
                    <i className="fa fa-chevron-right fa-xs ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-xl-5 pt-5 pt-lg-6 fx-fade-up animation-delay-4">
              {/* <!-- Video card --> */}
              <div className="bg-light video-card card-skew-left h-300 overlay">
              
                <video
                  className="heroVideo"
                  src={heroVid}
                  defaultMuted
                  playsInline
                  muted
                  autoPlay
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Intro --> */}
      <section className="py-7 py-lg-0">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div
              data-aos="fade-right"
              data-aos-delay="4000"
              data-aos-duration="4000"
              className="col-lg-5 text-center text-lg-left d-flex flex-column align-self-center"
            >
              <h3 className="font-weight-bolder text-bg-clip fx-fade-up bg-gradient-img">
                <img
                  src="../Assets/Images/gradient.jpg"
                  className="d-none"
                  alt="purple gradient"
                />
                Building The Next Generation Of Products & Services
              </h3>

              <p className="text-secondary mt-4 pb-2">
                As leaders in "Technological Consulting" & "Product Management,"
                we aim to provide our consumers with the highest level of
                expertise on the topics to lead their teams and products to
                achieve the goals of the consumers and the business.
              </p>
              <div className="text-darkblue">
                <a href="/Services">
                  <span className="mr-2">
                    <i className="fa-duotone fa-arrow-circle-right"></i>
                  </span>
                  <span className="font-weight-bolder text-purple">
                    Learn More
                  </span>
                </a>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="4000"
              data-aos-duration="4000"
              className="col-lg-6 offset-lg-1 text-center mt-0 overlay card-skew-left"
            >
              <video
                className="featureVideo"
                src={productVid}
                defaultMuted
                playsInline
                muted
                autoPlay
                loop
              ></video>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row d-flex justify-content-between">
          <div
              data-aos="fade-right"
              data-aos-delay="4000"
              data-aos-duration="4000"
              className="col-lg-6 mt-0 overlay card-skew-right"
            >
              <video
                className="featureVideo"
                src={productVid}
                defaultMuted pl
                muted
                autoPlay
                loop
              ></video>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="4000"
              data-aos-duration="4000"
              className="col-lg-5 text-center text-lg-center d-flex flex-column align-self-center"
            >
              <h3 className="font-weight-bolder text-bg-clip fx-fade-up bg-gradient-img">
              <img src="../Assets/Images/gradient.jpg" className="d-none" alt="purple gradient"/>
                Building The Next Generation Of Products & Services
              </h3>

              <p className="text-secondary mt-4 pb-2">
              As leaders in "Technological Consulting" & "Product Management," we aim to provide our consumers with the highest level of expertise on the topics to lead their teams and products to achieve the goals of the consumers and the business.
              </p>
              <div className="text-darkblue">
                <a href="/Services">
                <span className="mr-2">
                <i className="fa-duotone fa-arrow-circle-right"></i>
                </span>
                <span className="font-weight-bolder text-purple">
                  Learn More
                </span>
                </a>
              </div>
            </div>
            
          </div>
        </div> */}
      </section>
      <section className="bg-white py-7 pb-lg-7">
        <div className="container text-center">
          <h2
            data-aos="fade-in"
            data-aos-delay="4000"
            data-aos-duration="4000"
            className="text-darkblue"
          >
            Our <span className="text-purple">Process</span>
          </h2>
          <p className="text-muted mt-4 text-secondary w-lg-60 mx-auto mt-2">
            The business model we utilize goes beyond basic technological
            changes, and has a large impact on your company's operations growth
            pace. We take the following steps to guide you to achive your utmost
            potential
          </p>
          {/* <div className="container text-center text-md-left"> */}
          {/* <!-- Title --> */}
          {/* <div className="featureTitle" style={{width: "40%"}}>
      <p className="text-muted mt-4 text-secondary w-lg-60 mx-auto mt-2">
        The business path we utilize goes beyond a basic technological change and has a large impact on your company's operating models and growth pace. We take the following steps in guidance of your potential success.
        </p>
    </div> */}
          {/* <!-- Features --> */}
          <div
            data-aos="fade-in"
            data-aos-delay="4000"
            data-aos-duration="4000"
            className="row mt-5 mt-md-7 text-md-left"
          >
            <div className="col-md-6 col-lg-4 mb-4 mb-md-6">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-fingerprint"></i>
              </div>
              <h5 className="text-dark mt-4">
                Build and identify your technological and business needs
              </h5>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-6">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-panel-ews"></i>
              </div>
              <h5 className="text-dark mt-4">
                Develop a foundational growth strategy
              </h5>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-6">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-shield-keyhole"></i>
              </div>
              <h5 className="text-dark mt-4">
                Create cost effective and secure solutions for digital
                advancements
              </h5>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-chart-mixed"></i>
              </div>
              <h5 className="text-dark mt-4">
                Promote growth through profit driven marketing strategies
              </h5>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-chart-pie"></i>
              </div>
              <h5 className="text-dark mt-4">
                Assemble indisputable and accurate forms of data and analytics
              </h5>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-icons text-primary">
                <i className="fa-duotone fa-chart-network"></i>
              </div>
              <h5 className="text-dark mt-4">
                Establish the optimal paths to seperate your business from the
                competition
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features #2 --> */}
      <section className="py-7 py-lg-0">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div
              data-aos="fade-right"
              data-aos-delay="4000"
              data-aos-duration="4000"
              className="col-lg-5 text-center text-lg-left d-flex flex-column align-self-center"
            >
              <h3 className="text-darkblue">
                <span className="text-purple">Transform</span> How You Do
                Business
              </h3>

              <p className="text-secondary mt-4 pb-2">
                The success of your business depends on the capability to
                transform quickly and adapt to new rules. You need to prioritize
                two fundamental aspects: <br /> <br />{" "}
                <span className="font-weight-bolder text-purple">&#x21AA;</span>{" "}
                Promoting digitalization and innovation as a competitive
                strategy <br />{" "}
                <span className="font-weight-bolder text-purple">&#x21AA;</span>{" "}
                Putting people at the center of the process
              </p>

              <p className="text-muted border-top mt-4 pt-4">
                You need to leverage technology to boost your business, improve
                your relationship with your customers, and continue to innovate
                your products and services
              </p>

              <div className="text-darkblue">
                <span className="avatar mr-2">
                  <img
                    src={CEO}
                    className="avatar-image rounded-circle"
                    alt="Founder of Michel Digital"
                  />
                </span>
                <span className="font-weight-bolder text-purple">
                  Carlos Michel
                </span>
                , Founder
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-delay="4000"
              data-aos-duration="4000"
              className="col-lg-6 offset-lg-1 text-center mt-0 overlay card-skew-left"
            >
              <video
                className="featureVideo"
                src={featureVid}
                defaultMuted
                playsInline
                muted
                autoPlay
                loop
              ></video>
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
      {/* <!-- Testimonials -->
  <section className="pt-7 pt-lg-8 pb-10">
    <div className="container">
      <h5 className="text-uppercase letter-spacing-lg text-center">
        Trusted by <span className="text-success">thousands</span> of companies
      </h5>

      <div className="row mt-4 mt-lg-6">
        <div className="col-lg-5">
          <!-- Swiper -->
          <div className="swiper-container swiper-people" data-toggle="swiper" data-options='{ "effect": "fade", "grabCursor": true, "speed": 600, "loop": true }'>
            <div className="swiper-wrapper">
              <!-- Slide -->
              <div className="swiper-slide">
                <div className="bg-cover h-400 h-sm-500 rounded-lg" style="background-image: url('assets/img/unsplash/21.jpeg');"></div>
              </div>

              <!-- Slide -->
              <div className="swiper-slide">
                <div className="bg-cover h-400 h-sm-500 rounded-lg" style="background-image: url('assets/img/unsplash/3.jpeg');"></div>
              </div>

              <!-- Slide -->
              <div className="swiper-slide">
                <div className="bg-cover h-400 h-sm-500 rounded-lg" style="background-image: url('assets/img/unsplash/23.jpeg');"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-7 px-lg-5 pt-5 pt-lg-8">
          <!-- Swiper -->
          <div className="swiper-container swiper-quotes" data-toggle="swiper" data-options='{ "grabCursor": true, "speed": 600, "loop": true, "navigation": { "nextEl": ".swiper-custom-button-next", "prevEl": ".swiper-custom-button-prev" } }'>
            <div className="swiper-wrapper">
              <!-- Slide -->
              <div className="swiper-slide text-center">
                <h3 className="font-weight-normal text-darkblue">
                  “Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well.”
                </h3>
                <h5 className="font-weight-normal mt-4">
                  Seneca the younger
                </h5>
                <p className="text-muted font-size-sm">
                  <span className="svg-icon text-muted">@@include("assets/img/ionicons/remove-outline.svg")</span>
                  Lead Philosoper, GitHub
                </p>
              </div>

              <!-- Slide -->
              <div className="swiper-slide text-center">
                <h3 className="font-weight-normal text-darkblue">
                  “Sickness is a hindrance to the body, but not to your ability to choose, unless that is your choice. Lameness is a hindrance to the leg, but not to your ability to choose.”
                </h3>
                <h5 className="font-weight-normal mt-4">
                  Epictetus
                </h5>
                <p className="text-muted font-size-sm">
                  <span className="svg-icon text-muted">@@include("assets/img/ionicons/remove-outline.svg")</span> Head
                  of Philosophy, Dribbble
                </p>
              </div>

              <!-- Slide -->
              <div className="swiper-slide text-center">
                <h3 className="font-weight-normal text-darkblue">
                  “Remember that you must behave in life as at a dinner party. Is anything brought around to you? Put out your hand and take your share with moderation.”
                </h3>
                <h5 className="font-weight-normal mt-4">
                  Socrates
                </h5>
                <p className="text-muted font-size-sm">
                  <span className="svg-icon text-muted">@@include("assets/img/ionicons/remove-outline.svg")</span>
                  Senior Philosoper, Stripe
                </p>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div className="d-flex justify-content-center mt-4">
            <a href="#" className="swiper-custom-button-prev text-dark">
              <i className="fas fa-arrow-left fa-lg"></i>
            </a>
            <a href="#" className="swiper-custom-button-next text-dark ml-4">
              <i className="fas fa-arrow-right fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section> */}
      {/* <!-- Contact form --> */}
      <section className="bg-dark position-relative pt-4" id="contact">
        {/* <!-- SVG divider --> */}
        <div className="bg-dark svg-divider svg-divider-top text-light">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1990 350"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon fill="#f5f5ff" points="2000 0 2000 350 0 350"></polygon>
          </svg>
        </div>

        <div className="container position-relative">
          <div className="bg-white rounded shadow-light-lg w-lg-70 mx-auto py-6 px-4 px-md-5 px-lg-6">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
