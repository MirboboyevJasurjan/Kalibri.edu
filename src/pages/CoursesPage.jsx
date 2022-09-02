import React, { useState } from 'react';
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from '../components/templates/Banner/Banner';
import Courses from '../components/templates/Courses/Coureses';
import NavOne from '../components/templates/NavOne/NavOne';
import Footer from "../components/templates/Footer/Footer";
import Course from '../components/templates/Course/Course';

import course1 from "../components/images/course-1-1.jpg";
import course2 from "../components/images/course-1-2.jpg";
import course3 from "../components/images/course-1-3.jpg";
import '../components/templates/Courses/courses.css'
import {axios} from 'react-axios'


// const course = [ 
//     {mainImg: course1,
//     miniImg: course1,
//     hour:"15 hours",
//     lectures:"15",
//     price: 15000,
//     teacher:"Jasur",
//     courseName:"Frontend"},
//     {mainImg: course2,
//     miniImg: course2,
//     hour:"16 hours",
//     lectures:"16",
//     price: 16000,
//     teacher:"Jas",
//     courseName:"Backend"},
//     {mainImg: course3,
//     miniImg: course3,
//     hour:"17 hours",
//     lectures:"17",
//     price: 17000,
//     teacher:"Qurt",
//     courseName:"FullStack"}
// ]

function CoursesPage(props) {
    const [course, setCourse] = useState([])
    const [cartItems, setCartItems] = React.useState([ ]);

    const [cartCourse, setCartCourse] = useState([
            {mainImg: course1,
    miniImg: course1,
    hour:"15 hours",
    lectures:"15",
    price: 15000,
    teacher:"Jasur",
    courseName:"Frontend"}
    ])
    React.useEffect(()=>{
    fetch('https://6309e6f632499100327d641a.mockapi.io/course').then((res)=>{
        return res.json();
        })
        .then((json)=>{
            setCourse(json);
        })
    },[])
    const onClickPlus = (obj)=>{
        axios.post('https://6309e6f632499100327d641a.mockapi.io/favorites', obj);
        setCartItems(prev=>[...prev, obj]);
      }
    return (
        <>
            <Topbar />
            <NavOne />
            <Banner>Kurslar</Banner>
            {/* <Courses /> */}
            <section className="course-one course-page">
                <div className="container">
                    <div className="row">
                    
        
                        {course.map((item, index) => (
                            <Course key={index}
                            courseImg={item.mainImg}
                            courseMiniImg={item.miniImg}
                            CourseHours={item.hour}
                            CourseLectures={item.lectures}
                            CoursePrice={item.price}
                            CourseTeacher={item.teacher} 
                            CourseName={item.courseName}
                            onClickPlus={onClickPlus}
                            onFavorite={()=>console.log("ZAKLADKI")}
                            id={item.id}                          
                            />

                        ))}
                         
                    </div>
                </div>
            </section>
  
         
            <Footer />
        </>
    );
}

export default CoursesPage;