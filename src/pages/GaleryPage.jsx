import React, {useRef, useEffect} from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from "../components/templates/Banner/Banner";
import Gallery from "../components/templates/Gallery/Gallery";
import NavOne from "../components/templates/NavOne/NavOne";
import Footer from "../components/templates/Footer/Footer";
import {TweenMax, Power3} from 'gsap'
function GaleryPage(props) {
  let Galery = useRef(null);
  useEffect(()=>{
    TweenMax.to(Galery, 2.5, { opacity: 1, y: 100, ease: Power3.easeOut});

  },[])

  return (
    <>
      <Topbar />
      <NavOne />
      <Banner><span ref={el=>{Galery=el}}>Galereya</span></Banner>
      <Gallery />
      <Footer />
    </>
  );
}

export default GaleryPage;
