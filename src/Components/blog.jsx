import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import titleImage from '../Assets/Images/blog/appdevelopmentmistakes/appdev.jpg';
import titleImage2 from '../Assets/Images/blog/vitalneedsofestablishingabrand/brand.png';
import titleImage3 from '../Assets/Images/blog/productmanagement/PM.png'
import titleImage4 from '../Assets/Images/blog/digitalmarketing/digitalmarketing.png';
// import titleImage5 from '../Assets/Images/blog/whyusesearchengineoptimization/seo.png';
// import titleImage3 from '../Assets/Images/blog/8waystomakeyouradsmoreeffective/titleimage.png';


const Blog = () => {
  AOS.init({});
  const locationObj = document.location.href;
  return (
    <>
      <Helmet>
        <title>Michel Digital - Insights</title>
        <meta
          name="description"
          content="Articles for Michel Digital. A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
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
      {/* <!-- Featured posts --> */}
      <section className="mt-6 fx-fade-up">
        <div className="container">
          <div className="text-dark text-uppercase-bold-sm">Featured posts</div>

          <div className="row mt-4">
            {/* <!-- Main post --> */}
            <div className="col-lg-7">
              {/* <!-- Featured image --> */}
              <a href="/insights/appdevelopmentmistakestoavoid">
                <img
                  src={titleImage}
                  className="img-fluid rounded hover-lift-light"
                  alt="App Development"
                />
              </a>

              {/* <!-- Title --> */}
              <a
                href="/insights/appdevelopmentmistakestoavoid"
                className="h2 d-block text-dark text-decoration-none mt-4"
              >
                8 Mistakes To Avoid During App Development
              </a>

              {/* <!-- Intro --> */}
              <p className="text-secondary mt-3">
              Every business with a web presence needs a mobile app. Still, not everyone seems to be conscious of the mistakes made when we begin app development. There are many things to contemplate and prepare before the app development process starts. 
              </p>

              {/* <!-- Read more --> */}
              <a
                href="/insights/appdevelopmentmistakestoavoid"
                className="d-inline-block border-bottom border-purple text-purple text-decoration-none mt-2 pb-1"
              >
                Read more
              </a>
            </div>

            {/* <!-- Side posts --> */}
            <div className="col-lg-5 pt-5 pt-lg-0 pl-lg-4">
              {/* <!-- Post --> */}
              <div className="row">
                <div className="col-md-6">
                  {/* <!-- Featured image --> */}
                  <a href="/insights/thevitalneedsofestablishingabrand">
                    <img
                      src={titleImage2}
                      className="img-fluid rounded hover-lift-light"
                      alt="Branding"
                    />
                  </a>
                </div>
                <div className="col-md-6 pt-3">
                  {/* <!-- Title --> */}
                  <a
                    href="/insights/thevitalneedsofestablishingabrand"
                    className="h5 d-block text-dark text-decoration-none"
                  >
                    4 Vital Needs of Establishing a Successful Brand
                  </a>

                  {/* <!-- Read more --> */}
                  <a
                    href="/insights/thevitalneedsofestablishingabrand"
                    className="d-inline-block border-bottom border-purple text-purple text-decoration-none mt-2 pb-1"
                  >
                    Read
                  </a>
                </div>
              </div>

              {/* <!-- Post --> */}
              <div className="row mt-5">
                <div className="col-md-6">
                  {/* <!-- Featured image --> */}
                  <a href="/insights/themostproductivestrategyforproductmanagement">
                    <img
                      src={titleImage3}
                      className="img-fluid rounded hover-lift-light"
                      alt="Advertising"
                    />
                  </a>
                </div>
                <div className="col-md-6 pt-3">
                  {/* <!-- Title --> */}
                  <a
                    href="/insights/themostproductivestrategyforproductmanagement"
                    className="h5 d-block text-dark text-decoration-none"
                  >
                    The Most Productive Initial Strategy For Product Management
                  </a>

                  {/* <!-- Read more --> */}
                  <a
                    href="/insights/themostproductivestrategyforproductmanagement"
                    className="d-inline-block border-bottom border-purple text-purple text-decoration-none mt-2 pb-1"
                  >
                    Read
                  </a>
                </div>
              </div>

              {/* <!-- Post --> */}
              <div className="row mt-5">
                <div className="col-md-6">
                  {/* <!-- Featured image --> */}
                  <a href="/insights/whatisdigitalmarketing">
                    <img
                      src={titleImage4}
                      className="img-fluid rounded hover-lift-light"
                      alt="Digital Marketing"
                    />
                  </a>
                </div>
                <div className="col-md-6 pt-3">
                  {/* <!-- Title --> */}
                  <a
                    href="/insights/whatisdigitalmarketing"
                    className="h5 d-block text-dark text-decoration-none"
                  >
                    What Is "<em>Digital Marketing</em>" 
                  </a>

                  {/* <!-- Read more --> */}
                  <a
                    href="/insights/whatisdigitalmarketing"
                    className="d-inline-block border-bottom border-purple text-purple text-decoration-none mt-2 pb-1"
                  >
                    Read 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Older posts --> */}
      {/* <section className="mt-7 fx-fade-up">
        <div className="container">
          <div className="text-dark text-uppercase-bold-sm">Older posts</div> */}

          {/* <div className="row mt-4"> */}
            {/* <!-- Post --> */}
            {/* <div className="col-md-4"> */}
              {/* <!-- Featured image --> */}
              {/* <a href="#">
                <img
                  src="assets/img/unsplash/53.jpeg"
                  className="img-fluid rounded hover-lift-light"
                  alt=""
                />
              </a> */}

              {/* <!-- Title --> */}
              {/* <a
                href="#"
                className="h5 d-block text-dark text-decoration-none mt-4"
              >
                The things you think about determine the quality of your mind
              </a> */}

              {/* <!-- Read more --> */}
              {/* <a
                href="#"
                className="d-inline-block border-bottom border-purple text-purple text-decoration-none mt-2 pb-1"
              >
                Read post
              </a>
            </div> */}

            {/* <!-- Post --> */}
            {/* <div className="col-md-4 mt-5 mt-md-0"> */}
              {/* <!-- Featured image --> */}
              {/* <a href="#">
                <img
                  src="assets/img/unsplash/54.jpeg"
                  className="img-fluid rounded hover-lift-light"
                  alt=""
                />
              </a> */}

              {/* <!-- Title --> */}
              {/* <a
                href="#"
                className="h5 d-block text-dark text-decoration-none mt-4"
              >
                The happiness of your life depends upon the quality of your
                thoughts
              </a> */}

              {/* <!-- Read more --> */}
              {/* <a
                href="#"
                className="d-inline-block border-bottom border-purple text-purple text-decoration-none mt-2 pb-1"
              >
                Read post
              </a>
            </div> */}

            {/* <!-- Post --> */}
            {/* <div className="col-md-4 mt-5 mt-md-0"> */}
              {/* <!-- Featured image --> */}
              {/* <a href="#">
                <img
                  src="assets/img/unsplash/55.jpeg"
                  className="img-fluid rounded hover-lift-light"
                  alt=""
                />
              </a> */}

              {/* <!-- Title --> */}
              {/* <a
                href="#"
                className="h5 d-block text-dark text-decoration-none mt-4"
              >
                You have power over your mind, not outside events
              </a> */}

              {/* <!-- Read more --> */}
              {/* <a
                href="#"
                className="d-inline-block border-bottom border-purple text-purple text-decoration-none mt-2 pb-1"
              >
                Read post
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Subscribe --> */}
      <section className="mt-7 mb-7">
        <div className="container">
          <div className="bg-light bg-topography-light rounded p-4 p-md-5">
            <div className="d-flex flex-column flex-lg-row align-items-center text-center text-lg-left">
              <div>
                <h2 className="text-dark">Subscribe for more insights</h2>
                <p className="text-secondary">
                  Get our posts once a week, free of spam.
                </p>
              </div>
              
              <form className="d-flex justify-content-center ml-lg-auto" action="https://MichelDigital.us5.list-manage.com/subscribe/post" method="POST">
              <input type="hidden" name="u" value="f78a364a75f36754a33f829fa"/>
              <input type="hidden" name="id" value="c7edd6b5ef"/>
                <input
                  type="text"
                  className="form-control form-control-lg border-0 w-100 w-md-250 w-xl-300"
                  placeholder="Enter your email"
                  name="MERGE0" 
                  id="MERGE0"
                />
                <button
                  type="submit"
                  name="submit"
                  value="Subscribe"
                  className="btn btn-dark btn-lg hover-lift-light mt-3 mt-md-0 ml-md-3"
                >
                  Subscribe
                  <i className="fa fa-chevron-right fa-xs ml-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
