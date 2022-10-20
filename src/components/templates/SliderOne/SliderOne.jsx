import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import slidestrech from "../../images/slider-img.png";
import Jamshid from "../../images/Jamshid.png"
// import slidestrech1 from "../../images/uo.jpg";
import person2 from "../../images/scratch-1-1.png";
import { FaGraduationCap } from "react-icons/fa";
import "./SliderOne.css";
import { BsArrowRight } from "react-icons/bs";
import {TweenMax, Expo,Power3} from 'gsap'
import { Link } from "react-router-dom";
const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);

  // let mainText = useRef(null);
  // let mainText2 = useRef(null);
  // let teacherImg = useRef(null);


  // useEffect(() => {
  //   TweenMax.to(mainText, 2.2, { opacity: 1, y: -55, delay: 0.5, ease: Power3.easeOut, repeat: 20});
  //   TweenMax.to(mainText2, 2.2, { opacity: 1, y: -55, delay: 0.5, ease: Power3.easeOut, repeat: 20});
  //   TweenMax.to(teacherImg, 2.2, { opacity: 1, y: -10, x: -100, delay: 0.5, ease: Expo.easeOut, repeat: 20});
 


  
  // });
  function ToTop(){
    window.scrollTo(0,0)
  }
  const settings = {
    // dots: true,
    arrows:true,

    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
     cssEasing: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
     infinite: true
   

  };

  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <section getSwiper={setSwiper}>
          <Slider {...settings} style={{overflow:"hidden"}}>
            <div className="banner-one__slide banner-one__slide-one">
              <div className="container">
                <div className="aaab">
                  <img src={person2} className="banner-one__person " alt="" />
                  <img
                  //  ref={el=>{teacherImg=el}}
                    src={Jamshid}
                    alt=""
                    className="banner-one__scratch" style={{width: "360px", height:"700px", objectFit: "cover", zIndex:"1"}}
                  />
                </div>

                <div className="row no-gutters">
                  <div className="col-xl-12">

                    <h3 
                    // ref={el=>{mainText=el}} style={{opacity: 1}}
                     className="banner-one__title banner-one__light-color">
                      Biz bilan <br />
                      O'rganing
                    </h3>
                    <p
                    //  ref={el=>{mainText2=el}} style={{opacity: 1}}
                     className="banner-one__tag-line">
                    O'rganishga tayyormisiz?
                    </p>
                    <Link to="/courses" onClick={ToTop} className="thm-btn banner-one__btn">
                    Ko'proq ma'lumot
{/* >>>>>>> 19a924da95affb93b740a70cb1798478e0000617 */}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        
            
            <div className="banner-one__slide banner-one__slide-one">
              <div className="container">
                <div className="aaab">
                  <img src={person2} className="banner-one__person " alt="" />
                  <img 
                    src={Jamshid}
                    alt=""
                    className="banner-one__scratch" style={{width: "360px", height:"700px", objectFit: "cover"}}
                  />
                </div>

                <div className="row no-gutters">
                  <div className="col-xl-12">

                    <h3  style={{opacity: 1}} className="banner-one__title banner-one__light-color">
                      Biz bilan <br />
                      O'rganing
                    </h3>
                    <p  style={{opacity: 1}} className="banner-one__tag-line">
                    O'rganishga tayyormisiz?
                    </p>
                    <Link to="/courses" onClick={ToTop} className="thm-btn banner-one__btn">
                    Ko'proq ma'lumot
                    </Link>
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
