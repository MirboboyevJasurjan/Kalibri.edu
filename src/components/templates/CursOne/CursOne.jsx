import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Course from "../Course/Course";
import axios from "axios";
import '../../../staticCSS/swiper.min.css'
import "./CursOne.css";


const CourseOne = () => {
 
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
     cssEasing: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
     infinite: true,
     responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]

  };
  const [favorites, setFavorites] = React.useState([]);
  const [course, setCourse] = useState([])

  React.useEffect(()=>{
    fetch('https://6309e6f632499100327d641a.mockapi.io/course').then((res)=>{
        return res.json();
        })
        .then((json)=>{
            setCourse(json);
        })
    },[])

    const onFavorite = (obj) =>{
      axios.post('https://6309e6f632499100327d641a.mockapi.io/favorites', obj);
      setFavorites(prev=>[...prev, obj]);
    }
    
  function ToTop(){
    window.scrollTo(0,0)
  }
 
  return (
    <div>
      <section className="course-one__top-title home-one">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Bizning kurslar  <br />
              bilan tanishing
            </h2>
          </div>
        </div>
        <div className="course-one__top-title__curve"></div>
      </section>

      <section className="course-one course-one__teacher-details home-one">
        <div className="container">
          <div className="course-one__carousel">
            <Slider {...settings} className="course-one__carousel__slider" >
            
                   
                   {course.map((item, index) => (
                            <Course key={index} className="mainCourse"
                            mainImg={item.mainImg}
                            miniImg={item.miniImg}
                            hour={item.hour}
                            lectures={item.lectures}
                            price={item.price}
                            teacher={item.teacher} 
                            courseName={item.courseName}
                            onClickPlus={console.log(item)}
                            onFavorite={(obj) => onFavorite(obj)}
                            id={item.id}                          
                            />

                        ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CourseOne;
