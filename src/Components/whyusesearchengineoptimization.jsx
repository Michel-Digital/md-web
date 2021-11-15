import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import logo from '../Assets/Images/baselogo.svg'
import titleImage from '../Assets/Images/blog/whyusesearchengineoptimization/seo.png'

const BlogSEO = () => {
  AOS.init({});
  var locationObj = document.location.href;

  return (
    <>
      <Helmet>
        <title>Why Use Search Engine Optimization?</title>
        <meta
          name="description"
          content="If you are newer to the concept of SEO (short for Search Engine Optimization) you might be wondering what all the fuss is about. However if you have been running a website for a while you have probably noticed the necessity for this practice which is essentially the fine art of making your website easier to find for people searching it using “niche language."
        /> 
        <meta name="keywords" content="home business,work at home,home based business,online business,affiliate,affiliate program,affiliate marketing,internet marketing,work from home,internet business,SEO,search engine optimization " />
        {/* <!-- Open Graph / Facebook --> */} 
        
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          
          {/* Change Below To Adjust Sharing */}\
          <meta property="og:title" content="Why Use Search Engine Optimization?" />
        <meta
          name="og:description"
          content="If you are newer to the concept of SEO (short for Search Engine Optimization) you might be wondering what all the fuss is about. However if you have been running a website for a while you have probably noticed the necessity for this practice which is essentially the fine art of making your website easier to find for people searching it using “niche language."
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
          <meta property="twitter:title" content="Why Use Search Engine Optimization?" />
          <meta
            property="twitter:description"
            content="If you are newer to the concept of SEO (short for Search Engine Optimization) you might be wondering what all the fuss is about. However if you have been running a website for a while you have probably noticed the necessity for this practice which is essentially the fine art of making your website easier to find for people searching it using “niche language."
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
              Why Use Search Engine Optimization?
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
                If you are newer to the concept of SEO (short for Search Engine Optimization) you might be wondering what all the fuss is about. However if you have been running a website for a while you have probably noticed the necessity for this practice which is essentially the fine art of making your website easier to find for people searching it using “niche language.” 
                </p>
                
                <img src={titleImage} className="img-fluid rounded-lg shadow-light hover-lift-light my-2" alt="advertisement types" />

                <p className="mt-4">
                Niche language simply means using terms and phrases in your website or blog copy that are most commonly used by people when they type what they are looking for into a search engine. These phrases are also noted and collected by the search engine bots and spiders that belong to the search engines. The more friendly the copy in your web site is to the search engine spiders, the more likely people are to find you (which of course increases your sales.) In addition, the more hits you get from people searching for your products or services the higher your web site will be indexed on the search engine pages.
                </p>

                <p className="mt-4">
                Remember how web pages work! It is basically one big popularity contest. Essentially the more hits you have, the higher your ranking is in the search engines. This leads to more business and more hits and a website that is the equivalent of a wealthy rising cyber star! 
                </p>

                <p className="mt-4">
                To use a metaphor – let’s say that the launching of your web site is like a launch party. Launching a website without any type of SEO is like throwing a party and forgetting to invite people. <br /> <br />
                Or you can also compare it to a party where the invitations are sent out in a language that is not recognized by the guests.
                </p>

                <h4 className="mt-5 text-center">How To Avoid SEO Blackholes</h4>

                <p className="mt-4">
                Launching your website should be an exciting event. The reasons events (and the launches of new web sites) often fail is because: 
                </p>
                <div>
                  <ol>
                    <li>
                    1. You fail to list your website's URL properly in search engines or when you completely ignore the section in URL submission sites that ask you to fill out keywords.
                    </li>
                    <li>
                    2. Your customers can't find the party. This can happen when you decide to go the cheap route and opt for a free hosted domain instead of your own domain name. This is a case where customers can’t find your address. A good example is the person who opts for a split domain, which very often leads a visitor to your host’s site and not to your’s. The free bravenet.com and freeserver.com sites are notorious examples of free websites that offer split domain names for nothing.
                    </li>
                    <li>
                    3. They have found your website address but are greeted with 404 message that that informs you that a site has mysteriously disappeared or been removed. This can also happen because you opted for a free domain name or a host with limited bandwidth. 
                    </li>
                  </ol>
                </div>

                <p className="mt-4">
                In a nutshell, Search Engine Optimization is the process of making your web site as identifiable as possible to both people and search engines. If this sounds like it might be difficult and schizophrenic thing to accomplish it is. <br /> <br />
                This is because having a people-friendly web site is not the same as having a search engine friendly web site. A search engine friendly web site is one that appeals to tiny robots called “spiders” that search the World Wide Web for your site every time some one types in a search for information. The idea is to have copy on your website that is a combination of both.
                </p>
                <p className="mt-4">
                The intention of SEO copywriting is to elevate your site's ranking in the search engines by including what are called targeted keywords and keyword descriptions right in the body of the text. These keywords are obtained by finding out how people phrase their requests when they input a request into the search engines.
                </p>
                <p className="mt-4">
                Most people obtain their keywords by doing a bit of market research. The keyword content is located by using a keyword search tool such as the Overture keyword search tool. Once the top ten to twenty most-searched-for keywords are found, articles are then created around each of these key phrases and posted to the web site. Each of these new search engine optimized articles creates new pages or the search engines to spider when people type in those key phrases during a search. So in essence the search engine optimized article is mainly a way to increase sales or membership conversions by increasing your visibility in the search engines. <br /> <br />
                Being savvy about SEO is not rocket science. However it does means knowing a bit about html and keyword optimization. It entails knowing how to phrase things so that computers understand the language of what it is you are trying to convey or sell when you submit your site to the search engines. <br /><br />
                Practicing effective SEO techniques can involve using simple market research skills but it is not as technical as it sounds. Some of the best marketers in fact would say that to some extent it also involves using your intuition to second-guess what your customers might be looking for every time they use a search engine such as Google or Yahoo to search for a product.<br /><br />
                The reason it is so important for you to know how to talk to robots is because it is an aspect of web site and e commerce marketing that is vital to the branding and marketing of your product or service. By doing just a few simple things, you can give your web site an edge over the competition’s by making your business recognizable to both spiders and potential visitors alike.
                </p>

                {/* <!-- Quote --> */}
                <div className="text-center my-6">
                  <span className="display-1 text-purple d-block font-georgia font-italic mb-n4 mb-md-n5">
                    “
                  </span>
                  <em className="lead text-dark w-80 mx-auto mt-2">
                  On a broad scale, I see SEO becoming a normalized marketing tactic, the same way TV, radio, and print are traditionally thought of as marketing tactics.”
                  </em>
                  <span className="mt-4 d-block text-gray-600 font-size-sm text-mute">
                  – Duane Forrester, Senior Product Manager, Bing
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
export default BlogSEO;
