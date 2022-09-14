import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import NewsDetails from "../components/templates/NewsDetailts/NewsDetails";
import NavOne from "../components/templates/NavOne/NavOne";
import Footer from "../components/templates/Footer/Footer";
function NewsDetailsPage(props) {
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>Yangiliklar haqida</Banner>
      <NewsDetails />
      <Footer />
    </>
  );
}

export default NewsDetailsPage;
