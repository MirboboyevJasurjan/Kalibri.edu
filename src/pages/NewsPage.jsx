import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import News from "../components/templates/News/News";
import NavOne from "../components/templates/NavOne/NavOne";
import Footer from "../components/templates/Footer/Footer";
function NewsPage(props) {
  return (
    <>
      <Topbar />
      <NavOne />
      <Banner>NEWS</Banner>
      <News />
      <Footer />
    </>
  );
}

export default NewsPage;
