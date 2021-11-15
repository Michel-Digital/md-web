import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

const NotFound = () => {
  AOS.init({});
  const locationObj = document.location.href;
  function randomNum() {
    // "use strict";
    return Math.floor(Math.random() * 9) + 1;
  }
  useEffect(() => {
    var loop1,
    loop2,
    loop3,
    time = 30,
    i = 0,
    // number,
    selector3 = document.querySelector(".thirdDigit"),
    selector2 = document.querySelector(".secondDigit"),
    selector1 = document.querySelector(".firstDigit");
  loop3 = setInterval(function () {
    //   "use strict";
    if (i > 40) {
      clearInterval(loop3);
      selector3.textContent = 4;
    } else {
      selector3.textContent = randomNum();
      i++;
    }
  }, time);
  loop2 = setInterval(function () {
    //   "use strict";
    if (i > 80) {
      clearInterval(loop2);
      selector2.textContent = 0;
    } else {
      selector2.textContent = randomNum();
      i++;
    }
  }, time);
  loop1 = setInterval(function () {
    //   "use strict";
    if (i > 100) {
      clearInterval(loop1);
      selector1.textContent = 4;
    } else {
      selector1.textContent = randomNum();
      i++;
    }
  }, time);
    ;
  });
  
  
  return (
    <>
      <Helmet>
        <title>Michel Digital</title>
        <meta
          name="description"
          content="Unable to find related content for Michel Digital. A Technical Consulting Company with specializations in App Development, Web Development, Digital Marketing, App & Web Design, Branding, Data Analytical Support, Product and Business Strategies. "
        />
        <meta name="keywords" content="404, Page Not Found, 404" />
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
      {/* <!-- Intro --> */}
      <>
        {/* <!-- Error Page --> */}
        <div className="error">
          <div className="container-floud">
            <div className="col-xs-12 ground-color text-center">
              <div className="container-error-404">
                <div className="clip">
                  <div className="shadow">
                    <span className="digit thirdDigit"></span>
                  </div>
                </div>
                <div className="clip">
                  <div className="shadow">
                    <span className="digit secondDigit"></span>
                  </div>
                </div>
                <div className="clip">
                  <div className="shadow">
                    <span className="digit firstDigit"></span>
                  </div>
                </div>
                <div className="msg">
                  OH!<span className="triangle"></span>
                </div>
              </div>
              <h2 className="h1">Sorry! Page not found</h2>
            </div>
          </div>
        </div>
        {/* <!-- Error Page --> */}
      </>
    </>
  );
};
export default NotFound;
