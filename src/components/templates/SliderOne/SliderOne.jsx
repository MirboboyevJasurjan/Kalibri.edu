import React, { useState } from "react";
import Slider from "react-slick";
import slidestrech from "../../images/slider-img.png";
// import slidestrech1 from "../../images/uo.jpg";
import person2 from "../../images/scratch-1-1.png";
import { FaGraduationCap } from "react-icons/fa";
import "./SliderOne.css";
import { BsArrowRight } from "react-icons/bs";
const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <section getSwiper={setSwiper}>
          <Slider>
            <div className="banner-one__slide banner-one__slide-one">
              <div className="container">
                <div className="aaab">
                  <img src={person2} className="banner-one__person " alt="" />
                  <img
                    src={slidestrech}
                    alt=""
                    className="banner-one__scratch"
                  />
                </div>

                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <h3 className="banner-one__title banner-one__light-color">
                      Biz sizga <br />
                      'Конкрет' bilim beramiz
                    </h3>
                    <p className="banner-one__tag-line">
                      Tayyormisiz ?
                    </p>
                    <a href="#none" className="thm-btn banner-one__btn">
                      Ko'proq ma'lumot
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>
      </section>
      <div className="banner-one__cta">
        <div className="banner-one__cta-icon">
          <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head">
            <FaGraduationCap />
          </i>
        </div>
        <div className="banner-one__cta-title">
          <h3 className="banner-one__cta-text">
            <a href="#none">Talabalarimizni qanday o'qitmoqdamiz</a>
          </h3>
        </div>
        <div className="banner-one__cta-link">
          <a href="#none">
            <BsArrowRight />
            <i className="kipso-icon-right-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SliderOne;
