import React from "react";
import '../Courses/courses.css'
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";


function Course({mainImg, miniImg, hour, lectures, price, teacher, courseName, onClickPlus,onFavorite, id}) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const obj = [mainImg, miniImg, hour, lectures, price, teacher, courseName,id]
  
  function ToTop(){
    window.scrollTo(0,0)
  }


    // const onClickButton = () => {
    //   onPlus({ mainImg, miniImg, hour, lectures, price, teacher, courseName });
    //   setIsAdded(!isAdded);
    // };
    const onClickButton =()=> {
      // console.log(props)
    }
    const onClickFavorite =()=> {
      onFavorite(obj);
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
                <img src={mainImg} alt="" />
                <i className="like_icons" onClick={onClickFavorite}>{isFavorite?<AiFillHeart/>:<AiOutlineHeart/>}
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
                  <img src={miniImg} alt="" />
                  by <Link to={`/teachersdetalis/${id}`}>{teacher}</Link>
                </div>
                <h2 className="course-one__title">
                  <Link to={`/coursedetalis/${id}`} onClick={ToTop}>{courseName}</Link>
                </h2>

                <div className="course-one__meta">
                  <a href="/course-details">
                    <i className="far fa-clock"></i> {hour}
                  </a>
                  <a href="/course-details">
                    <i className="far fa-folder-open"></i> {lectures}
                  </a>
                  <Link to={`/coursedetalis/${id}`} onClick={ToTop}>{price}</Link>
                </div>
                <Link to={`/coursedetalis/${id}`} onClick={ToTop} className="course-one__link">{""}
                  See Preview{""}
                </Link>
              </div>
            </div>
        </div>
  );
}

export default Course;
