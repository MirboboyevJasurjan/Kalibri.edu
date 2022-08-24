import React from "react";
import '../Courses/courses.css'
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";


function Course({courseImg, courseMiniImg, CourseHours, CourseLectures, CoursePrice, CourseTeacher, CourseName, onClickPlus}) {
  const [isFavorite, setIsFavorite] = React.useState(false);


    // const onClickButton = () => {
    //   onPlus({ courseImg, courseMiniImg, CourseHours, CourseLectures, CoursePrice, CourseTeacher, CourseName });
    //   setIsAdded(!isAdded);
    // };
    const onClickButton =()=> {
      // console.log(props)
    }
    const onFavorite =()=> {
      console.log("закладки")
      setIsFavorite(!isFavorite)
    }

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
      
      return (
        <div className="col-lg-4">
            <div className="course-one__single">
              <div className="course-one__image">
                <img src={courseImg} alt="" />
                <i className="like_icons" onClick={onFavorite}>{isFavorite?<AiFillHeart/>:<AiOutlineHeart/>}
                  {/* <AiOutlineHeart
                    onClick={menuHandler}
                    className="like_icons1"
                  />
                  <AiFillHeart onClick={menuHandler} className="like_icons2" /> */}
                </i>
              </div>
              <div className="course-one__content">
                <a href="#none" className="course-one__category">
                  development
                </a>
                <div className="course-one__admin">
                  <img src={courseMiniImg} alt="" />
                  by <Link to="/teachersdetalis">{CourseTeacher}</Link>
                </div>
                <h2 className="course-one__title">
                  <Link to="/coursedetalis">{CourseName}</Link>
                </h2>

                <div className="course-one__meta">
                  <a href="/course-details">
                    <i className="far fa-clock"></i> {CourseHours}
                  </a>
                  <a href="/course-details">
                    <i className="far fa-folder-open"></i> {CourseLectures}
                  </a>
                  <a href="/course-details">{CoursePrice}</a>
                </div>
                <a href="#none" className="course-one__link" onClick={onClickPlus}>
                  See Preview
                </a>
              </div>
            </div>
        </div>
  );
}

export default Course;
