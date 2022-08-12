import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Teachers from "../components/templates/AllTeachers/Allteachers";
import Banner from "../components/templates/Banner/Banner";
import NavOne from "../components/templates/NavOne/NavOne";
import Footer from "../components/templates/Footer/Footer";
function TeachersPage(props) {
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>TEACHERS</Banner>
      <Teachers />
      <Footer />
    </>
  );
}

export default TeachersPage;
