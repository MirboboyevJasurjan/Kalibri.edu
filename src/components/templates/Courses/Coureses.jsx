import "./courses.css";
import React from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
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

// import courseCards from '../../../db/courses.json';

// const courcesss = courseCards; 

const Courses = () => {
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

  const createCourse = (id,img, tag, author, title, hours, lectures, price) => {
    return { id, img, tag, author, title, hours, lectures, price };
  };

  const courseCards = [
    createCourse(1,course1, "Development", "Nurlan Karshiev", "New React Bootcamp", "10 Hours", "6 Lectures", "100$" ),
    createCourse(2,course2, "Development", "Nurlan Karshiev", "New React Bootcamp", "10 Hours", "6 Lectures", "100$" ),
    createCourse(3,course3, "Development", "Nurlan Karshiev", "New React Bootcamp", "10 Hours", "6 Lectures", "100$" ),
    createCourse(4,course4, "Development", "Nurlan Karshiev", "New React Bootcamp", "10 Hours", "6 Lectures", "100$" ),
    createCourse(5,course5, "Development", "Nurlan Karshiev", "New React Bootcamp", "10 Hours", "6 Lectures", "100$" ),
    createCourse(6,course6, "Development", "Nurlan Karshiev", "New React Bootcamp", "10 Hours", "6 Lectures", "100$" )
  ];
  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          {courseCards.map((card, i) => {
            let link = `coursedetails/${i}`
            return (
            <div className="col-lg-4">
              <div className="course-one__single">
                <div className="course-one__image">
                  <img src={card.img} alt="" />
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
                    {card.tag}
                  </a>
                  <div className="course-one__admin">
                    <img src={card.img} alt="" />
                    by <Link to={link}>{card.author}</Link>
                  </div>
                  <h2 className="course-one__title">
                    <Link to={`/coursedetails/${card.id}`} >{card.title}</Link>
                  </h2>

                  <div className="course-one__meta">
                    <a href="/course-details">
                      <i className="far fa-clock"></i> {card.hours}
                    </a>
                    <a href="/course-details">
                      <i className="far fa-folder-open"></i> {card.lectures}
                    </a>
                    <a href="/course-details">{card.price}</a>
                  </div>
                  <a href="#none" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>
          )})}
        </div>
        <div className="post-pagination">
          <a href="#none">
            <i className="fa fa-angle-double-left"><FaAngleDoubleLeft /></i>
          </a>
          <a className="active" href="#none">
            1
          </a>
          <a href="#none">2</a>
          <a href="#none">3</a>
          <a href="#none">4</a>
          <a href="#none">
            <i className="fa fa-angle-double-right">
              <FaAngleDoubleRight />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
