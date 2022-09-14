import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import CourseDetails from "../components/templates/CoursesDetails/CoursesDetalis";
import Footer from "../components/templates/Footer/Footer";
import NavOne from "../components/templates/NavOne/NavOne";
import { useParams } from 'react-router-dom';
// import {courses} from '../db/courses.json';



function CoursesDetailsPage(props) {
  // alert('salom');
  // console.log(courses);
  // const onAddToCard = (obj) =>{
  //   setCartItems((prev)=>[...prev, obj]);
  // };
  
  let { id } = useParams();
  
  console.log(id);

  
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>Kurslar haqida</Banner>
      <CourseDetails />
      <Footer />
    </>
  );
}

export default CoursesDetailsPage;
