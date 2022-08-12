import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import Gallery from "../components/templates/Gallery/Gallery";
import NavOne from "../components/templates/NavOne/NavOne";
import Footer from "../components/templates/Footer/Footer";
function GaleryPage(props) {
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>Gallery</Banner>
      <Gallery />
      <Footer />
    </>
  );
}

export default GaleryPage;
