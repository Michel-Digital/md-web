import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Helmet } from "react-helmet";
// import { AnimatePresence } from "framer-motion";

import Navbar from "./Components/navbar";
import Home from "./Components/home";
import AboutUs from "./Components/about";
import Footer from "./Components/footer";
import Contact from "./Components/contact";
import Services from "./Components/services";
import Blog from "./Components/blog";
// import Post from "./Components/blogpost";
import Blog8ways from "./Components/blog-8WaysToMakeYourAdsMoreEffective";
import BlogPM from "./Components/blog-themostproductivestrategyforproductmanagement";
import BlogDM from "./Components/whatisdigitalmarketing";
import BlogBrand from "./Components/blog-thevitalneedsofestablishingabrand";
import BlogAppDev from "./Components/blog-appdevelopmentmistakes";
import BlogSEO from "./Components/whyusesearchengineoptimization";


import "./App.css";
import "./Assets/CSS/navbar.css";
import "./Assets/CSS/home.css";
import { Router } from "@reach/router";
import NotFound from "./Components/404";


class App extends React.Component {
  state = {
    loading: true,
  };
  
  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector("#loader-wrapper");
      // const bod = document.body.classList;
      if (el) {
        el.remove(); // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
    (function (d, s, id) {
      var js,
        tjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://app.termly.io/embed-policy.min.js";
      tjs.parentNode.insertBefore(js, tjs);
    })(document, "script", "termly-jssdk");
  }

  fakeRequest = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  };

  render() {
    while (this.state.loading === true) {
      return null; //app is not ready (fake request is in process)
    }
    // const locationObj = document.location.href;

    return (
      <>
        <Navbar />
        {/* <AnimatePresence exitBeforeEnter initial={false}>  */}
        <Router>
          <Home path="/" />
          <Services path="/services" />
          <AboutUs path="/about" />
          <Contact path="/contact" />
          <Blog path="/insights"/>
            <Blog8ways path="/insights/8WaysToMakeYourAdsMoreEffective" />
            <BlogPM path="/insights/themostproductivestrategyforproductmanagement" />
            <BlogDM path="/insights/whatisdigitalmarketing" />
            <BlogSEO path="/insights/whyusesearchengineoptimization" />
            <BlogBrand path="/insights/thevitalneedsofestablishingabrand" />
            <BlogAppDev path="/insights/appdevelopmentmistakestoavoid" />
          <NotFound default />
        </Router>
        {/* </AnimatePresence> */}
        <Footer />
      </>
    );
  }
}

export default App;
