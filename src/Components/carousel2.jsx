import React from "react";
import logo from "../assets/images/baseLogo.png";
import $ from "jquery";

const TeamCarousel = () => {
    $(function () {
        $(".carousel-item2").eq(0).addClass("active2");
        var total = $(".carousel-item2").length;
        var current = 0;
        $("#moveRight2").on("click", function () {
            var next = current;
            current = current + 1;
            setSlide(next, current);
        });
        $("#moveLeft2").on("click", function () {
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
            $(".carousel-item2").eq(prev).removeClass("active2");
            $(".carousel-item2").eq(slide).addClass("active2");
            setTimeout(function () { }, 800);

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
        <section id="practice" className="practice-section">
            <div className="carousel shadow-6">
                <div className="logo_div">
                    <img
                        className="carousel__logo"
                        src={logo}
                        alt="Michel Digital logo"
                    />
                </div>
                <div className="carousel__nav">
                    <span id="moveLeft2" className="carousel__arrow">
                        <svg
                            className="carousel__icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11p0Z"></path>
                        </svg>
                    </span>
                    <span id="moveRight2" className="carousel__arrow">
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
                <div className="carousel-item2 carousel-item--5">
                <div className="carousel-item__image hvrbox">
                        <div className="hvrbox-layer_top">
                            <div className="hvrbox-text">
                            <h5 className="d-flex align-items-center"><hr className="border-gray-100 flex-fill mr-4" style={{ color: "#35EEFE" }}/> Carlos Michel <hr className="border-gray-100 flex-fill ml-4" style={{ color: "#35EEFE" }}/> </h5>Founder <span style={{ color: "#35EEFE" }}> &amp; </span> Chief Executive Officer </div>
                        </div>
                    </div>
                    <div className="carousel-item__info">
                        <div className="carousel-item__container ">
                            <p className="carousel-item__subtitle">
                               Mission <span style={{ color: "#35EEFE" }}>&amp;</span> Vision
                            </p>
                            <h5 className="carousel-item__title d-flex align-items-center">
                            <hr className="border-gray-100 flex-fill mr-4" style={{ color: "#35EEFE" }}/> Who We Are<hr className="border-gray-100 flex-fill ml-4" style={{ color: "#35EEFE" }}/>
                            </h5>
                            <p className="carousel-item__description">
                            We are a unique and diverse team from a vareity of backgrounds who strive to make your growth exponential by being resourceful, organized and creative.
                            </p>
                            <h5 className="carousel-item__title d-flex align-items-center">
                            <hr className="border-gray-100 flex-fill mr-4" style={{ color: "#35EEFE" }}/> Our Vision<hr className="border-gray-100 flex-fill ml-4" style={{ color: "#35EEFE" }}/>
                            </h5>
                            <p className="carousel-item__description">
                            To inspire our clients and ourselves in everything we do, by always achieving optimal results through effective and efficient engagement with our clients and their consumers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item2 carousel-item--6">
                <div className="carousel-item__image hvrbox">
                        <div className="hvrbox-layer_top">
                            <div className="hvrbox-text">
                            <h5 className="d-flex align-items-center"><hr className="border-gray-100 flex-fill mr-4" style={{ color: "#35EEFE" }}/> Annette Cutillas <hr className="border-gray-100 flex-fill ml-4" style={{ color: "#35EEFE" }}/> </h5> Founder <span style={{ color: "#35EEFE" }}> &amp; </span> Chief Financial Officer </div>
                        </div>
                    </div>
                    <div className="carousel-item__info">
                        <div className="carousel-item__container ">
                            <p className="carousel-item__subtitle">
                               Mission <span style={{ color: "#35EEFE" }}>&amp;</span> Vision
                            </p>
                            <h5 className="carousel-item__title d-flex align-items-center">
                            <hr className="border-gray-100 flex-fill mr-4" style={{ color: "#35EEFE" }}/> Who We Are<hr className="border-gray-100 flex-fill ml-4" style={{ color: "#35EEFE" }}/>
                            </h5>
                            <p className="carousel-item__description">
                            We are a unique and diverse team from a vareity of backgrounds who strive to make your growth exponential by being resourceful, organized and creative.
                            </p>
                            <h5 className="carousel-item__title d-flex align-items-center">
                            <hr className="border-gray-100 flex-fill mr-4" style={{ color: "#35EEFE" }}/> Our Vision<hr className="border-gray-100 flex-fill ml-4" style={{ color: "#35EEFE" }}/>
                            </h5>
                            <p className="carousel-item__description">
                            To inspire our clients and ourselves in everything we do, by always achieving optimal results through effective and efficient engagement with our clients and their consumers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TeamCarousel;