import React, { useState} from 'react';
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
import axios from "axios";





function CoursesPage(props) {
    const [course, setCourse] = useState([])
    const [cartItems, setCartItems] = React.useState([ ]);
    const [favorites, setFavorites] = React.useState([]);
    


 
    React.useEffect(()=>{
    fetch('https://6309e6f632499100327d641a.mockapi.io/course').then((res)=>{
        return res.json();
        })
        .then((json)=>{
            setCourse(json);
        })
    },[])

    // const onFavorite = (obj)=>{
    //     axios.post('https://6309e6f632499100327d641a.mockapi.io/favorites', obj);
    //     setCartItems(prev=>[...prev, obj]);
    //   }
    const onFavorite = (obj) =>{
      axios.post('https://6309e6f632499100327d641a.mockapi.io/favorites', obj);
      setFavorites(prev=>[...prev, obj]);
    }
      // const onFavorite = async (obj) => {
      //   try {
      //     if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      //       axios.delete(`https://6309e6f632499100327d641a.mockapi.io/favorites/${obj.id}`);
      //       setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      //     } else {
      //       const { data } = await axios.post(
      //         'https://6309e6f632499100327d641a.mockapi.io/favorites',
      //         obj,
      //       );
      //       setFavorites((prev) => [...prev, data]);
      //     }
      //   } 
      //   catch (error) {
      //     alert('Не удалось добавить в фавориты');
      //     console.error(error);
      //   }
      // };
    return (
        <>
            <Topbar />
            <NavOne />
            <Banner>Kurslar</Banner>
            {/* <Courses /> */}
            <section className="course-one course-page">
                <div className="container">
                    <div className="row" course={cartItems}>
                    
        
                        {course.map((item, index) => (
                            <Course key={index} className="mainCourse"
                            course={cartItems}
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
                         
                    </div>
                </div>
            </section>
  
         
            <Footer />
        </>
    );
}

export default CoursesPage;