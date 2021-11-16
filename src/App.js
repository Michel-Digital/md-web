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
import { Routes, Route } from "react-router-dom";



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
        <Routes>
          <Route exact path={'#' + process.env.PUBLIC_URL + '/'} element={<Home/>}/>
          <Route path={process.env.PUBLIC_URL + '/services'} element={<Services/>}/>
          <Route path={process.env.PUBLIC_URL + '/about'} element={<AboutUs/>}/>
          <Route path={process.env.PUBLIC_URL + '/contact'} element={<Contact/>}/>
          <Route path={process.env.PUBLIC_URL + '/insights'} element={<Blog/>}/>
          <Route path={process.env.PUBLIC_URL + '/insights/8WaysToMakeYourAdsMoreEffective'} element={<Blog8ways/>}/>
          <Route path={process.env.PUBLIC_URL + '/insights/themostproductivestrategyforproductmanagement'} element={<BlogPM/>}/>
          <Route path={process.env.PUBLIC_URL + '/insights/whatisdigitalmarketing'} element={<BlogDM/>}/>
          <Route path={process.env.PUBLIC_URL + '/insights/whyusesearchengineoptimization'} element={<BlogSEO/>}/>
          <Route path={process.env.PUBLIC_URL + '/insights/thevitalneedsofestablishingabrand'} element={<BlogBrand/>}/>
          <Route path={process.env.PUBLIC_URL+'/insights/appdevelopmentmistakestoavoid'} element={<BlogAppDev/>}/>
          <Route path="*" element={<NotFound/>}/>
          {/* <Home path={process.env.PUBLIC_URL + '/'} />
          <Services path={process.env.PUBLIC_URL + '/services'} />
          <AboutUs path={process.env.PUBLIC_URL + '/about'} />
          <Contact path={process.env.PUBLIC_URL + '/contact'} />
          <Blog path={process.env.PUBLIC_URL + '/insights'}/>
            <Blog8ways path={process.env.PUBLIC_URL + '/insights/8WaysToMakeYourAdsMoreEffective'} />
            <BlogPM path={process.env.PUBLIC_URL + '/insights/themostproductivestrategyforproductmanagement'} />
            <BlogDM path={process.env.PUBLIC_URL + '/insights/whatisdigitalmarketing'} />
            <BlogSEO path={process.env.PUBLIC_URL + '/insights/whyusesearchengineoptimization'} />
            <BlogBrand path={process.env.PUBLIC_URL + '/insights/thevitalneedsofestablishingabrand'} />
            <BlogAppDev path={process.env.PUBLIC_URL + '/insights/appdevelopmentmistakestoavoid'} />
          <NotFound path="*" /> */}
        </Routes>
        {/* </AnimatePresence> */}
        <Footer />
      </>
    );
  }
}

export default App;
