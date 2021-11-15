import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"



const Post = () => {
  AOS.init({
  });
  const locationObj = document.location.href;
  
  return (
    <>
     <Helmet>
        <title>Michel Digital - Blog</title>
        <meta
          name="description"
          content=""
        /> 
        <meta name="keywords" content="" />
        {/* <!-- Open Graph / Facebook --> */} 
        
        <meta property="og:type" content="website" />
          <meta property="og:url" content={locationObj} />
          
          {/* Change Below To Adjust Sharing */}\
          <meta property="og:title" content="Michel Digital - " />
        <meta
          name="og:description"
          content=""
        />
          <meta property="og:image" content="" />
          <meta property="og:site_name" content="Michel Digital - " />

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
            content=""
          />
          <meta property="twitter:image" content="" />
        
        
       
      </Helmet>
        {/* <!-- Hero --> */}
  <section className="bg-cover position-relative h-550 pt-11 jarallax" data-jarallax data-speed="0.8">
    <div className="container">
      {/* <!-- Post title --> */}
      <h1 className="display-4 text-white text-center fx-fade-up">
        Seneca: on the <br/>Shortness of Life
      </h1>
    </div>

    {/* <!-- Author & social --> */}
    <div className="position-absolute bottom-0 w-100 mb-4">
      <div className="container d-flex flex-column flex-sm-row align-items-center">
        <div className="d-flex">
          <div className="avatar mr-4">
            <img src="assets/img/uifaces/13.jpg" className="avatar-image rounded-circle" alt=""/>
          </div>
          <div className="flex-1">
            <span className="text-white text-uppercase-bold-sm">
              John Harrison
            </span>
            <span className="text-light opacity-90 font-size-sm d-block">
              Posted on April 14, 2020
            </span>
          </div>
        </div>

        {/* <!-- Social Share Links --> */}
        <div className="mt-4 mt-sm-0 ml-sm-auto">
          <a href="#" className="icon-circle icon-circle-sm bg-white text-dark hover-lift-light mr-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="icon-circle icon-circle-sm bg-white text-dark hover-lift-light mr-2">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="icon-circle icon-circle-sm bg-white text-dark hover-lift-light">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Article --> */}
  <section className="mt-6">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* <!-- Intro phrase --> */}
          <p className="lead text-darkblue text-center border-bottom border-gray-100 pb-5">
            Of all things which wisdom provides to make life entirely happy, much the greatest is the possession of friendship. It is not so much our friends' help that helps us, as the confidence of their help.
          </p>

          <p className="my-5">
            The things in our control are by nature free, unrestrained, unhindered; but those not in our control are weak, slavish, restrained, belonging to others. Remember, then, that if you suppose that things which are slavish by nature are also free, and that what belongs to others is your own, then you will be hindered. You will lament, you will be disturbed, and you will find fault both with gods and men.
          </p>

          <p className="my-5">
            But if you suppose that only to be your own which is your own, and what belongs to others such as it really is, then no one will ever compel you or restrain you. Further, you will find fault with no one or accuse no one. You will do nothing against your will. No one will hurt you, you will have no enemies, and you not be harmed.
          </p>

          {/* <!-- Picture with caption --> */}
          <img src="assets/img/unsplash/57.jpeg" className="img-fluid rounded-lg shadow-light hover-lift-light my-2" alt=""/>
          <div className="text-center font-size-sm text-muted mt-2 mb-5">Haselschacher Buck, Vogtsburg, Germany</div>

          <p>
            Instead, you must entirely quit some things and for the present postpone the rest. But if you would both have these great things, along with power and riches, then you will not gain even the latter, because you aim at the former too: but you will absolutely fail of the former, by which alone happiness and freedom are achieved.
          </p>

          {/* <!-- Bullets --> */}
          <ul className="list-unstyled my-5">
            <li className="mb-3">
              <div className="icon-circle icon-circle-sm bg-pastel-success mr-2">
                <i className="fas fa-chevron-right fa-xs text-success"></i>
              </div>
              The happiness of your life depends upon the quality of your thoughts
            </li>
            <li className="mb-3">
              <div className="icon-circle icon-circle-sm bg-pastel-success mr-2">
                <i className="fas fa-chevron-right fa-xs text-success"></i>
              </div>
              You have power over your mind, not outside events
            </li>
            <li>
              <div className="icon-circle icon-circle-sm bg-pastel-success mr-2">
                <i className="fas fa-chevron-right fa-xs text-success"></i>
              </div>
              The things you think about determine the quality of your mind
            </li>
          </ul>

          <p className="my-5">
            Of all things which wisdom provides to make life entirely happy, much the greatest is the possession of friendship. It is not so much our friends' help that helps us, as the confidence of their help.
          </p>

          <h4 className="mb-4">
            Stoicism as a day to day philosophy
          </h4>

          <p>
            Remember that following desire promises the attainment of that of which you are desirous; and aversion promises the avoiding that to which you are averse. However, he who fails to obtain the object of his desire is disappointed, and he who incurs the object of his aversion wretched. If, then, you confine your aversion to those objects only which are contrary to the natural use of your faculties, which you have in your own control, you will never incur anything to which you are averse. But if you are averse to sickness, or death, or poverty, you will be wretched.
          </p>

          {/* <!-- Quote --> */}
          <div className="text-center my-5">
            <span className="display-1 text-purple d-block font-georgia font-italic mb-n4 mb-md-n5">“</span>
            <p className="lead text-dark w-md-80 mx-auto mt-2">
              "Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well."
            </p>
            <span className="d-block text-gray-600 font-size-sm mt-4">Epictetus, The Enchiridion</span>
          </div>

          <p>
            Remove aversion, then, from all things that are not in our control, and transfer it to things contrary to the nature of what is in our control. But, for the present, totally suppress desire: for, if you desire any of the things which are not in your own control, you must necessarily be disappointed; and of those which are, and which it would be laudable to desire, nothing is yet in your possession. Use only the appropriate actions of pursuit and avoidance; and even these lightly, and with gentleness and reservation.
          </p>

          {/* <!-- Author & social --> */}
          <div className="d-flex flex-column flex-sm-row align-items-center mt-6">
            <div className="d-flex">
              <div className="avatar mr-4">
                <img src="assets/img/uifaces/13.jpg" className="avatar-image rounded-circle" alt=""/>
              </div>
              <div className="flex-1">
                <span className="text-dark text-uppercase-bold-sm">
                  John Harrison
                </span>
                <span className="text-muted opacity-90 font-size-sm d-block">
                  Posted on April 14, 2020
                </span>
              </div>
            </div>

            {/* <!-- Social Share links --> */}
            <div className="mt-4 mt-sm-0 ml-sm-auto">
              <a href="#" className="text-decoration-none text-muted mr-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-decoration-none text-muted mr-3">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-decoration-none text-muted">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Subscribe --> */}
  <section className="bg-light text-center text-lg-left mt-7 py-6">
    <div className="container">
      <div className="d-flex flex-column flex-lg-row align-items-center">
        <div>
          <h3 className="font-weight-normal">
            Subscribe to the blog
          </h3>
          <p className="text-muted">
            Receive our posts from the archive monthly.
          </p>
        </div>

        <form className="d-flex justify-content-center ml-lg-auto">
          <input type="text" className="form-control form-control-lg border-gray-200 w-100 w-md-250 w-xl-300" placeholder="Your email here"/>
          <button type="button" className="btn btn-purple btn-lg hover-lift-light mt-3 mt-md-0 ml-md-3">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>

  {/* <!-- Related posts --> */}
  <section className="bg-light">
    <div className="container border-top border-bottom border-gray-200 pt-6 pb-7">
      <h4 className="font-weight-normal">
        Related posts
      </h4>

      <div className="d-flex flex-wrap mt-4">
        {/* <!-- Post --> */}
        <div className="p-1 w-100 w-md-50">
          <div className="hover-mask h-250 h-md-300 rounded-lg">
            {/* <!-- Featured image --> */}
            <div className="hover-mask-image">
            </div>

            <a href="#!" className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
              <h3 className="text-white font-weight-normal mb-auto">
                Best cities to live in
              </h3>

              <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>John Williams</span>
                <span className="ml-auto">13 Aug, 2020</span>
              </span>
            </a>
          </div>
        </div>

        {/* <!-- Post --> */}
        <div className="p-1 w-100 w-md-50">
          <div className="hover-mask h-250 h-md-300 rounded-lg">
            {/* <!-- Featured image --> */}
            <div className="hover-mask-image" >
            </div>

            <a href="#!" className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
              <h3 className="text-white font-weight-normal text-right mb-auto">
                Top 10 places you should go
              </h3>

              <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>David Gilmour</span>
                <span className="ml-auto">15 Nov, 2020</span>
              </span>
            </a>
          </div>
        </div>

        {/* <!-- Post --> */}
        <div className="p-1 w-100 w-md-60">
          <div className="hover-mask h-250 h-md-300 rounded-lg">
            {/* <!-- Featured image --> */}
            <div className="hover-mask-image" >
            </div>

            <a href="#!" className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
              <h3 className="text-white font-weight-normal mb-auto">
                Become a professional photographer
              </h3>

              <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>Roger Waters</span>
                <span className="ml-auto">11 Jul, 2020</span>
              </span>
            </a>
          </div>
        </div>

        {/* <!-- Post --> */}
        <div className="p-1 w-100 w-md-40">
          <div className="hover-mask h-250 h-md-300 rounded-lg">
            {/* <!-- Featured image --> */}
            <div className="hover-mask-image" >
            </div>

            <a href="#!" className="hover-mask-content d-flex flex-column opacity-100 text-decoration-none p-4">
              <h3 className="text-white font-weight-normal text-right mb-auto">
                Get inspired by nature
              </h3>

              <span className="d-flex text-white text-uppercase-xs font-weight-bold">
                <span>Bob Dylan</span>
                <span className="ml-auto">04 May, 2020</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};
export default Post;
