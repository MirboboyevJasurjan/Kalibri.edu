import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import TeachersDetalis from "../components/templates/TeacherDetails/Teacherdetails";
import NavOne from "../components/templates/NavOne/NavOne";
import Footer from "../components/templates/Footer/Footer";
const TeachersDetailsPage = () => {
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>TEACHERS DETAILS</Banner>
      <TeachersDetalis />
      <Footer />
    </>
  );
};

export default TeachersDetailsPage;
