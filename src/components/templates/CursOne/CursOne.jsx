import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
// import "swiper/swiper.min.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./CursOne.css";
import course1 from "../../images/course-1-1.jpg";
import course2 from "../../images/course-1-2.jpg";
import course3 from "../../images/course-1-3.jpg";
import course4 from "../../images/course-1-4.jpg";
import course5 from "../../images/course-1-5.jpg";
import course6 from "../../images/course-1-6.jpg";
import team1 from "../../images/team-1-1.jpg";
import team2 from "../../images/team-1-2.jpg";
import team3 from "../../images/team-1-3.jpg";
import team4 from "../../images/team-1-4.jpg";
import team5 from "../../images/team-1-1.jpg";
import team6 from "../../images/team-1-2.jpg";

const CourseOne = () => {
  const menuHandler = () => {
    const element = document.querySelector(".like_icons1");
    const element2 = document.querySelector(".like_icons2");

    if (element.style.opacity === "1") {
      element.style.opacity = "0";
      element2.style.opacity = "1";
    } else {
      element.style.opacity = "1";
      element2.style.opacity = "0";
    }
  };
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div>
      <section className="course-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Explore our <br />
              popular courses
            </h2>
          </div>
        </div>
        <div className="course-one__top-title__curve"></div>
      </section>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel">
            <Swiper {...params}>
              <div className="col-lg-4">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src={course1} alt="" />
                    <i className="like_icons">
                      <AiOutlineHeart
                        onClick={menuHandler}
                        className="like_icons1"
                      />
                      <AiFillHeart
                        onClick={menuHandler}
                        className="like_icons2"
                      />
                    </i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      development
                    </a>
                    <div className="course-one__admin">
                      <img src={team1} alt="" />
                      by <Link to="/teachersdetalis">Lou Guerrero</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/coursedetalis">New react bootcamp</Link>
                    </h2>

                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src={course2} alt="" />
                    <i className="like_icons">
                      <AiOutlineHeart
                        onClick={menuHandler}
                        className="like_icons1"
                      />
                      <AiFillHeart
                        onClick={menuHandler}
                        className="like_icons2"
                      />
                    </i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      It &amp; Software
                    </a>
                    <div className="course-one__admin">
                      <img src={team2} alt="" />
                      by <Link to="/teachersdetalis">Cora Diaz</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/coursedetalis">Improve editing sk</Link>
                    </h2>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src={course3} alt="" />
                    <i className="like_icons">
                      <AiOutlineHeart className="like_icons1" />
                      <AiFillHeart className="like_icons2" />
                    </i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a>
                    <div className="course-one__admin">
                      <img src={team3} alt="" />
                      by <Link to="/teachersdetalis">Ruth Becker</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/coursedetalis">Marketing strategi</Link>
                    </h2>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src={course4} alt="" />
                    <i className="like_icons">
                      <AiOutlineHeart className="like_icons1" />
                      <AiFillHeart className="like_icons2" />
                    </i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      Photography
                    </a>
                    <div className="course-one__admin">
                      <img src={team4} alt="" />
                      by <Link to="/teachersdetalis">Ernest Rodriquez</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/coursedetalis">Basics of photogra</Link>
                    </h2>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src={course5} alt="" />
                    <i className="like_icons">
                      <AiOutlineHeart className="like_icons1" />
                      <AiFillHeart className="like_icons2" />
                    </i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      marketing
                    </a>
                    <div className="course-one__admin">
                      <img src={team5} alt="" />
                      by <Link to="/teachersdetalis">Isabella Stanley</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/coursedetalis">Affiliate bootcamp</Link>
                    </h2>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-one__single">
                  <div className="course-one__image">
                    <img src={course6} alt="" />
                    <i className="like_icons">
                      <AiOutlineHeart className="like_icons1" />
                      <AiFillHeart className="like_icons2" />
                    </i>
                  </div>
                  <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                      Health &amp; Fitness
                    </a>
                    <div className="course-one__admin">
                      <img src={team6} alt="" />
                      by <Link to="/teachersdetalis">Katherine Collins</Link>
                    </div>
                    <h2 className="course-one__title">
                      <Link to="/coursedetalis">Healthy workout ti</Link>
                    </h2>
                    <div className="course-one__meta">
                      <a href="/course-details">
                        <i className="far fa-clock"></i> 10 Hours
                      </a>
                      <a href="/course-details">
                        <i className="far fa-folder-open"></i> 6 Lectures
                      </a>
                      <a href="/course-details">$18</a>
                    </div>
                    <a href="#none" className="course-one__link">
                      See Preview
                    </a>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseOne;
