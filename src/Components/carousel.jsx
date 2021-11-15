import React from "react";
import logo from "../Assets/Images/baseLogo.png";
import $ from "jquery";

const AboutCarousel = () => {
  $(function () {
    $(".carousel-item").eq(0).addClass("active");
    var total = $(".carousel-item").length;
    var current = 0;
    $("#moveRight").on("click", function () {
      var next = current;
      current = current + 1;
      setSlide(next, current);
    });
    $("#moveLeft").on("click", function () {
      var prev = current;
      current = current - 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next) {
      var slide = current;
      if (next > total - 1) {
        slide = 0;
        current = 0;
      }
      if (next < 0) {
        slide = total - 1;
        current = total - 1;
      }
      $(".carousel-item").eq(prev).removeClass("active");
      $(".carousel-item").eq(slide).addClass("active");
      setTimeout(function () {}, 800);

      console.log("current " + current);
      console.log("prev " + prev);
    }
  });
  $(function () {
    $(".first-button").on("click", function () {
      $(".animated-icon1").toggleClass("open");
    });
  });

  return (
    <section id="practice" className="practice-section bg-light">
      <div
              data-aos="fade-right"
              data-aos-delay="4000"
              data-aos-duration="4000"
              className="col-lg-5 text-center text-lg-left d-flex flex-column align-self-center w-lg-30"
            >
              <h3 className="text-darkblue">
                What Differentiates <span className="text-purple"> Michel Digital</span>
              </h3>
              <hr className="hr-text mb-5" />
              <p className="text-secondary mt-4 pb-2">
              It's simple: Attention to detail. Great products are engineered when product managers truly understand the desired outcomes by actively listening to people. Our ability to be attentive to your needs and the consumers allows us to guide you in the best possible path to success. 
              </p>
            </div>
      <div className="carousel shadow-6">
        <div className="logo_div">
          <img
            className="carousel__logo"
            src={logo}
            alt="Michel Digital logo"
          />
        </div>
        <div className="carousel__nav">
          <span id="moveLeft" className="carousel__arrow">
            <svg
              className="carousel__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11p0Z"></path>
            </svg>
          </span>
          <span id="moveRight" className="carousel__arrow">
            <svg
              className="carousel__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </span>
        </div>
        <div className="carousel-item carousel-item--1">
          <div className="carousel-item__image"></div>
          <div className="carousel-item__info">
            <div className="carousel-item__container">
              <p className="carousel-item__subtitle">
                Ideate <span style={{ color: "#35EEFE" }}> &amp; </span> Design
              </p>
              <h5 className="carousel-item__title">
                Curated <span className="text-purple">Strategies</span>
              </h5>
              <p className="carousel-item__description">
                Ultimately our goal is to develop the most sustainable path for
                your business growth. We accomplish this by assesing your needs
                and applying modernized strategies for your business.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-item--2">
          <div className="carousel-item__image"></div>
          <div className="carousel-item__info">
            <div className="carousel-item__container">
              <p className="carousel-item__subtitle">
                Identify <span style={{ color: "#35EEFE" }}>&amp;</span> Analyze{" "}
              </p>
              <h5 className="carousel-item__title">Goals & Deficiencies </h5>
              <p className="carousel-item__description">
                We will work together to identify your goals and needs inorder
                to arrive at the most well-balanced and optimal strategy to
                achive your objective. Whatever your business needs are, We have
                the experience and connections to arrive at a technological
                solution curated to your specific needs. We have a strong focus
                on innovation, and always seek the optimization of your results.
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item carousel-item--3">
          <div className="carousel-item__image"></div>
          <div className="carousel-item__info">
            <div className="carousel-item__container">
              <p className="carousel-item__subtitle">
                Develop <span style={{ color: "#35EEFE" }}>&amp;</span>{" "}
                Instantiate{" "}
              </p>
              <h5 className="carousel-item__title">
                Campaigns <span style={{ color: "#35EEFE" }}>&amp;</span>{" "}
                Products
              </h5>
              <p className="carousel-item__description">
                We want to help your business deliver great products and
                experiences that move people or simplify lifestyles. Upon
                establishing a strategy and your goals, we begin to place the
                plan into action. Through thoughtful and active campaign
                strategies we expect to grow your business with loyal customers.
                We will also help improve and establish viable services and
                product designs through a phase system we guide you through
                developing.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-item--4">
          <div className="carousel-item__image"></div>
          <div className="carousel-item__info">
            <div className="carousel-item__container">
              <p className="carousel-item__subtitle">
                {" "}
                Establishing <span style={{ color: "#35EEFE" }}>
                  &amp;
                </span>{" "}
                Organizing{" "}
              </p>
              <h5 className="carousel-item__title">
                Continuity <span className="title-team">Strategy</span>
              </h5>
              <p className="carousel-item__description">
                Establishing a progressive strategy for the future will give
                your brand and business purpose and consistant growth. We
                establish analytical tools to bring to forefront your customers
                happiness with your businesses products and services. With the
                proper tools in place you will be able to make educated decision
                to improve or change your previous strategies for continual
                growth and success.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutCarousel;
