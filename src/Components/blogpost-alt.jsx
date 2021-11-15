import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
// import { motion } from "framer-motion"

const PostAlt = () => {
  AOS.init({});
  const locationObj = document.location;

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
                  src="assets/img/uifaces/9.jpg"
                  className="rounded-circle avatar-image shadow"
                  alt=""
                />
              </div>

              {/* <!-- Title --> */}
              <h2 className="text-center font-weight-normal mt-4">
                Inertia is now available worldwide
              </h2>

              {/* <!-- Author --> */}
              <div className="text-center text-muted font-size-sm mt-3">
                <span className="mr-3">
                  <span className="svg-icon svg-icon-sm text-muted relative-top--1 mr-1">
                    {/* @@include("assets/img/ionicons/pencil-outline.svg") */}
                  </span>
                  By Maria Hudson
                </span>
                <span className="ml-3">
                  <i className="far fa-calendar fa-xs mr-1 relative-top--1"></i>
                  April, 2020
                </span>
              </div>

              <img
                src="assets/img/waves.png"
                className="d-block mx-auto mt-4 mb-5"
                alt=""
              />

              {/* <!-- Article --> */}
              <div className="text-dark">
                <p>
                  The things in our control are by nature free, unrestrained,
                  unhindered; but those not in our control are weak, slavish,
                  restrained, belonging to others. Remember, then, that if you
                  suppose that things which are slavish by nature are also free,
                  and that what belongs to others is your own, then you will be
                  hindered. You will lament, you will be disturbed, and you will
                  find fault both with gods and men.
                </p>

                <p>
                  Of all things which wisdom provides to make life entirely
                  happy, much the greatest is the possession of friendship. It
                  is not so much our friends' help that helps us, as the
                  confidence of their help.
                </p>

                {/* <!-- Gallery --> */}
                <div className="my-6">
                  <div className="row">
                    <div className="col-sm-6">
                      <img
                        src="assets/img/unsplash/58.jpeg"
                        className="img-fluid rounded shadow-light"
                        alt=""
                      />
                    </div>
                    <div className="col-sm-6 mt-4 mt-sm-0">
                      <img
                        src="assets/img/unsplash/43.jpeg"
                        className="img-fluid rounded shadow-light mb-4"
                        alt=""
                      />
                      <img
                        src="assets/img/unsplash/46.jpeg"
                        className="img-fluid rounded shadow-light mt-2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <p>
                  But if you suppose that only to be your own which is your own,
                  and what belongs to others such as it really is, then no one
                  will ever compel you or restrain you. Further, you will find
                  fault with no one or accuse no one. You will do nothing
                  against your will. No one will hurt you, you will have no
                  enemies, and you not be harmed.
                </p>

                <h4 className="mt-5">New powerful features</h4>

                <p className="mt-4">
                  Remember that following desire promises the attainment of that
                  of which you are desirous; and aversion promises the avoiding
                  that to which you are averse. However, he who fails to obtain
                  the object of his desire is disappointed, and he who incurs
                  the object of his aversion wretched. If, then, you confine
                  your aversion to those objects only which are contrary to the
                  natural use of your faculties, which you have in your own
                  control, you will never incur anything to which you are
                  averse. But if you are averse to sickness, or death, or
                  poverty, you will be wretched.
                </p>

                {/* <!-- Quote --> */}
                <div className="text-center my-6">
                  <span className="display-1 text-purple d-block font-georgia font-italic mb-n4 mb-md-n5">
                    “
                  </span>
                  <p className="lead text-dark w-80 mx-auto mt-2">
                    "Don't demand that things happen as you wish, but wish that
                    they happen as they do happen, and you will go on well."
                  </p>
                  <span className="mt-4 d-block text-gray-600 font-size-sm">
                    Marcus Aurelius, Founder at Rome Studios
                  </span>
                </div>

                <p>
                  Remove aversion, then, from all things that are not in our
                  control, and transfer it to things contrary to the nature of
                  what is in our control.
                </p>

                <h4 className="mt-5">Wrapping up</h4>

                <p className="mt-4">
                  But, for the present, totally suppress desire: for, if you
                  desire any of the things which are not in your own control,
                  you must necessarily be disappointed; and of those which are,
                  and which it would be laudable to desire, nothing is yet in
                  your possession. Use only the appropriate actions of pursuit
                  and avoidance; and even these lightly, and with gentleness and
                  reservation.
                </p>
              </div>

              {/* <!-- Author & social --> */}
              <div className="d-flex flex-column flex-sm-row align-items-center border-top border-gray-200 mt-6 py-5">
                {/* <!-- Avatar --> */}
                <div className="d-flex">
                  <div className="avatar mr-4">
                    <img
                      src="assets/img/uifaces/9.jpg"
                      className="avatar-image rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-darkblue text-uppercase-xs font-weight-bolder">
                      Maria Fisher
                    </span>
                    <span className="text-muted font-size-sm d-block">
                      Posted on April 21, 2020
                    </span>
                  </div>
                </div>

                {/* <!-- Social links --> */}
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
    </>
  );
};
export default PostAlt;
