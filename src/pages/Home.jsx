import React from "react";
import Topbar from "../components/templates/TopBar/TopBar";
import NavOne from "../components/templates/NavOne/NavOne";
import SliderOne from "../components/templates/SliderOne/SliderOne";
import AboutTwo from "../components/templates/AboutTwo/AboutTwo";
import CourseOne from "../components/templates/CursOne/CursOne";
import CourseCatOne from "../components/templates/CursCatOne/CursCatOne";
import VideoOne from "../components/templates/VideoOne/VideoOne";
import CallToAction from "../components/templates/CallToAction/CallToAction";
import BrandsTwo from "../components/templates/BrandTwo/BrandTwo";
import BlogTwo from "../components/templates/BlogTwo/BlogTwo";
import TeachersHome from "../components/templates/TeachersHome/TeachersHome";
import SubscribeOne from "../components/templates/SubscrieOne/SubscrieOne";
import Footer from "../components/templates/Footer/Footer";
function Home(props) {
  return (
    <>
      <Topbar />
      <NavOne />
      <SliderOne />
      <AboutTwo />
      <CourseOne />
      <VideoOne />
      <CourseCatOne />
      <CallToAction />
      <BrandsTwo />
      <BlogTwo />
      <TeachersHome />
      <SubscribeOne />
      <Footer />
    </>
  );
}

export default Home;
