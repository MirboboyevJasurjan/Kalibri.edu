import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import CourseDetails from "../components/templates/CoursesDetails/CoursesDetalis";
import Footer from "../components/templates/Footer/Footer";
import NavOne from "../components/templates/NavOne/NavOne";

function CoursesDetailsPage(props) {
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>COURSES DETAILS</Banner>
      <CourseDetails />
      <Footer />
    </>
  );
}

export default CoursesDetailsPage;
