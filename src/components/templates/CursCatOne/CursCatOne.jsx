import React from "react";
import Swiper from "react-id-swiper";
// import "swiper/swiper.min.css"
import '../../../staticCSS/swiper.min.css'

import {FaDesktop} from 'react-icons/fa';
import {RiMiniProgramLine} from 'react-icons/ri';
import {BsMusicNoteBeamed} from 'react-icons/bs';
import {AiFillCamera} from 'react-icons/ai';
import {GiTargeting, GiHealthNormal} from 'react-icons/gi';
import './CursCatOne.css'
const CourseCatOne = () => {
  const params = {
    
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction:true
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <section className="thm-gray-bg course-category-one">
      <div className="container-fluid curs-katicor text-center">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Browse online <br />
            course categories
          </h2>
        </div>
        <div className="course-category-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <div className="course-category-one__single color-1">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-desktop"><FaDesktop/></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">IT & Software</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-2">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-web-programming">
                    <RiMiniProgramLine />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-3">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-music-player">
                    <BsMusicNoteBeamed />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Music</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-4">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-camera">
                    <AiFillCamera />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Photography</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-5">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-targeting">
                    <GiTargeting />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Marketing</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-6">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-health">
                    <GiHealthNormal />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Health & Fitness</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-1">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-desktop"><FaDesktop/></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">IT & Software</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-2">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-web-programming">
                    <RiMiniProgramLine />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-3">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-music-player">
                    <BsMusicNoteBeamed />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Music</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-4">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-camera">
                    <AiFillCamera />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Photography</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-5">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-targeting">
                    <GiTargeting />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Marketing</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-6">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-health">
                    <GiHealthNormal />
                  </i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Health & Fitness</a>
                </h3>
              </div>
            </div>
          </Swiper>
        </div>
        <a href="#none" className="thm-btn">View All Categories</a>
         
      </div>
    </section>
  );
};
export default CourseCatOne;
