import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Helmet } from "react-helmet";
// import { AnimatePresence } from "framer-motion";

import Navbar from "./components/navbar";
import Home from "./components/home";
import AboutUs from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Services from "./components/services";
import Blog from "./components/blog";
// import Post from "./Components/blogpost";
import Blog8ways from "./components/blog-8WaysToMakeYourAdsMoreEffective";
import BlogPM from "./components/blog-themostproductivestrategyforproductmanagement";
import BlogDM from "./components/whatisdigitalmarketing";
import BlogBrand from "./components/blog-thevitalneedsofestablishingabrand";
import BlogAppDev from "./components/blog-appdevelopmentmistakes";
import BlogSEO from "./components/whyusesearchengineoptimization";
import NotFound from "./components/404";

import "./App.css";
import "./assets/css/navbar.css";
import "./assets/css/home.css";
import { Router } from "@reach/router";



class App extends React.Component {
  state = {
    loading: true,
  };
  
  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector("#loader-wrapper");
      console.log(process.env.PUBLIC_URL);
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
          <Home path={'/'} />
          <Services path={'/services'} />
          <AboutUs path={'/about'} />
          <Contact path={'/contact'} />
          <Blog path={'/insights'}/>
            <Blog8ways path={'/insights/8WaysToMakeYourAdsMoreEffective'} />
            <BlogPM path={'/insights/themostproductivestrategyforproductmanagement'} />
            <BlogDM path={'/insights/whatisdigitalmarketing'} />
            <BlogSEO path={'/insights/whyusesearchengineoptimization'} />
            <BlogBrand path={'/insights/thevitalneedsofestablishingabrand'} />
            <BlogAppDev path={'/insights/appdevelopmentmistakestoavoid'} />
          <NotFound default />
        </Router>
        {/* </AnimatePresence> */}
        <Footer />
      </>
    );
  }
}

export default App;
