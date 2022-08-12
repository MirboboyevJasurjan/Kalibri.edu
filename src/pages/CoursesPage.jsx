import React from 'react';
import Topbar from "../components/templates/TopBar/TopBar";
import Banner from '../components/templates/Banner/Banner';
import Courses from '../components/templates/Courses/Coureses';
import NavOne from '../components/templates/NavOne/NavOne';
import Footer from "../components/templates/Footer/Footer";
function CoursesPage(props) {
    return (
        <>
            <Topbar />
            <NavOne />
            <Banner>COURSES</Banner>
            <Courses />
            <Footer />
        </>
    );
}

export default CoursesPage;