import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

import logo from '../assets/images/baselogo.svg'
import titleImage from '../assets/images/blog/8waystomakeyouradsmoreeffective/titleimage.png'

const Blog8ways = () => {
  AOS.init({});
  const locationObj = document.location;

  return (
    <>
      <Helmet>
        <title>8 Ways To Make Your Ads More Effective</title>
        <meta
          name="description"
          content="These are the 8 important lessons to be learned regarding Ezine Advertising and Marketing Success"
        /> 
        <meta name="keywords" content="advertising, marketing, internet, promotion, web, email, ezine, ppc, link, banner, newsletter, blog, rss, article, ebook, forum " />
        {/* <!-- Open Graph / Facebook --> */} 
        
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          
          {/* Change Below To Adjust Sharing */}\
          <meta property="og:title" content="Michel Digital - 8 Ways To Make Your Ads More Effective" />
        <meta
          name="og:description"
          content="These are the 8 important lessons to be learned regarding Ezine Advertising and Marketing Success"
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
          <meta property="twitter:title" content="Michel Digital -" />
          <meta
            property="twitter:description"
            content="These are the 8 important lessons to be learned regarding Ezine Advertising and Marketing Success"
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
                  8 Ways To Make Your Ads More Effective
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
                If I have learned one thing about doing business on the Internet it is that the more you learn the more you don't know. However, I've managed to carve out a successful enterprise for myself. The portion of my marketing and promotional efforts has been conducted through one simple method-Ezine Advertising.
                </p>

                <p>
                These are the 8 important lessons I've learned regarding Ezine Advertising and Marketing Success:
                </p>
                
                <img src={titleImage} className="img-fluid rounded-lg shadow-light hover-lift-light my-2" alt="advertisement types" />
                
                <h4 className="mt-5 text-center">Don't do too Much</h4>

                <p className="mt-4">
                A common mistake many advertisers make is to attempt to do too much, or rather sell too much, in one ad. Sure you have lots of great products but you can't sell them all in a few lines-at least not individually.  Instead focus on the benefit your customer can achieve from all your products and promote that! People are much more likely to click on a link that <b>BENEFITS</b> them than a link that promises to sell them something.
                <br /> <br />
                <span className="mt-2">For example, <em>"Help your child reach their maximum potential"</em> instead of <em>"Try our many reading, writing, math, shapes and colors programs"</em></span>
                </p>

                <h4 className="mt-5 text-center">Be specific</h4>

                <p className="mt-4">
                More importantly, tell the customer <em>"what your product or service is going to do for him."</em> <br /> <br />
                <span className="mt-2">It is important that you identify your Unique Selling Proposition before you begin your advertising program. This will determine which Ezines (or markets) you target as well as what you should include in your ad copy. Who will be interested in your product and why? What benefits does your product offer them?</span>
                </p>

                <h4 className="mt-5 text-center">Dont't close in the ad</h4>

                <p className="mt-4">
                Don't go for the sale in your ad! You are at a disadvantage because you can't list all your products' wonderful benefits in the space allowed. Also, there is only a small percentage of any Ezine audience that is ready to buy your product at the exact moment they view your ad. Yes, maybe they should be, but most people today live in the moment and if this isn't the time they want to buy then they aren't going to buy, end of story. <br /> <br />
                <span className="mt-2">But it doesn't have to be the end of the story.  If you go for the soft sell approach your target consumer is much more likely to click on your link and then you've got the chance to go for the hard sell-again and again!</span> <br /> <br />
                <span className="mt-2">Here's an example. I'm selling a product called the Preschool Prep Power Pack. It's an educational CD for preschoolers. Now I could go for the hard sell in my promotion and I would make some sales but a lot of people who really might be interested won't even look at my site and product. However, I've chose to go the soft sell approach. Instead of selling my product in my ads, my ads offer two FREE items. I offer a free newsletter (Preschoolers Learn More) offering tips about preparing preschoolers for kindergarten. This is my target market for my product. The folks who subscribe also receive a free ABC-123 coloring book. Why wouldn't the parent of a preschooler subscribe, right?</span> <br /> <br />
                <span className="mt-2">But what's in it for me as a business person? A lot! Think about it. I now have the freely offered contact information for my target market. Now I can regularly email them information about my product. I'm confident they will buy eventually because my product provides a solution to something that concerns them-or they wouldn't have subscribed in the first place!</span>
                </p>

                <h4 className="mt-5 text-center">Give your ad enough time to work</h4>

                <p className="mt-4">
                Studies show it takes prospects an average of seven exposures to your promotion before they take the bait. Even after they have clicked through to your site visitors may need to visit your site as many as three times before they buy from you. So make sure you keep that offer in front of them. That means it may well pay to take the long-term package versus a one-shot ad.
                <span className="mt-2">People run through their emails rapidly and delete things they wish they hadn't. Make their wish come true! Give them a second, third, fourth chance. The formula is--when you're sick and tired of it, the public is just beginning to hear it.</span> <br /> <br />
                <span className="mt-2">Just because you've bought ad space doesn't mean you have to utilize every pixel or character-space. Short, punchy lines that do not use up every available space are more effective.  Think about the reader scanning down the page or screen. What will catch their eye and make them stop scanning and actually read?  White space is your friend so don't squander it. Use it to set off your important message.</span> <br /> <br />
                <span className="mt-2">Make sure you apply the same principal to your urls and e-mail addresses as well. Nothing can make an ad look more cluttered than giant web addresses with a complicated string of numbers and letters. If you have to use an address like that (perhaps for your affiliate code, for example) then it might be wise to use a redirect. There are numerous free services out there (https://snipurl.com for exmple) although perhaps it might be a good idea to use a page from your own web site with a redirect programmed in</span>
                </p>

                <h4 className="mt-5 text-center">Use your headline</h4>

                <p className="mt-4">
                Your headline is the most important part of your ad. This is usually the line that determines whether the skimming reader will stop or skip ahead.
                <span className="mt-2"> Some of the proven headline formulas include:
                  <ul className="mt-3">
                    <li> 
                      - Ask the reader a question: "Are you worried about filing your
                      tax return this year?" 
                    </li>
                    <li>
                      - Tell the reader how to do something: "How to buy a
                      car without getting a lemon." 
                    </li>
                    <li>
                      - Important news makes a good headline. "Max Electronics just went international!"
                    </li>
                    <li>
                      - Start the clock: "Buyers who act before midnight Tuesday will save an extra $50!"
                    </li>
                  </ul>
                </span>
                </p>

                <h4 className="mt-5 text-center">Dont forget your call to action</h4>

                <p className="mt-4">
                It sounds almost ridiculous, but simply giving clear, specific directions about what you want the reader to do can increase the response to your ads.
                </p>

                <h4 className="mt-5 text-center">Set a budget</h4>

                <p className="mt-4">
                One of the most difficult things to decide for any business person is how much money to spend on promotion. There really is one simple way to determine the answer. How much is a customer worth to you? That tells you a great deal about how much you can afford to spend on advertising. <br /> <br />
                <span className="mt-2">The simple formula to calculate the net worth of a visitor is: Net Profit divided by Conversion Rate.</span> <br /> <br />
                <span className="mt-2">First, what is your net profit on an average sale?  Let's say $10 to make it easy. (Hey, I'm an English professor, I need to keep it simple!)</span> <br /> <br />
                <span className="mt-1">Then consider what your conversion rate is for visitors to become customers.  Let's say one visitor out of 50 becomes a customer. (This makes your conversion rate 50 as you need 50 customers to make a sale)</span> <br />
                <span className="mt-1">With this example, a visitor is worth $0.50 to you. ($10 divided by 50)
                </span> <br />
                <span className="mt-1">So if you spend $100 on an advertising campaign that draws in 1000 visitors then you made $400 on that campaign.
                </span>
                </p>

                <h4 className="mt-5 text-center">Set realistic goals</h4>

                <p className="mt-4">
                This issue is really about control. Yes, if you could control things that you would have a high sell through but that isn't always going to happen. In fact, for most advertisers that isn't going to happen. However, if your goal is to capture customers then you are much more likely to match your goal or even exceed it. And in the end a customer is worth a lot more to you than a sale because a customer can represent many sales over years to come-sales that were fairly easy to achieve.
                <br /> <br /><span className="mt-2">As frustrating as it may be, advertising is usually about long-term versus short-term benefits.  Your ad simply serves as a lure to draw people into your site or long-term promotion. Once you've pulled them in then you need to sell them. So it is not really fair to judge an ad campaign on simple sales.</span> <br /> <br />
                <span className="mt-2">The success of an ad campaign should be measured by one or two elements only-first, how many people followed up on your offer (click-through rate) and second, how many of those visitors were you able to convert into customers (conversion rate).</span> <br />
                <span className="mt-1">Over time you will be able to judge where the weak link in your chain of customer creation exists and work to fix it.</span>
                </p>
                

                {/* <!-- Quote --> */}
                <div className="text-center my-6">
                  <span className="display-1 text-purple d-block font-georgia font-italic mb-n4 mb-md-n5">
                    “
                  </span>
                  <em className="lead text-dark w-80 mx-auto mt-2">
                  “The real fact of the matter is that nobody reads ads. People read what interests them, and sometimes it’s an ad.”
                  </em>
                  <span className="mt-4 d-block text-gray-600 font-size-sm text-mute">
                  – Howard Luck Gossage
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
export default Blog8ways;
