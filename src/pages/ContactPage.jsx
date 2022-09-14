import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import Contact from "../components/templates/Contact/Contact";
import NavOne from "../components/templates/NavOne/NavOne";
import Footer from "../components/templates/Footer/Footer";

function ContactPage(props) {
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>Bo'glanish</Banner>
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
