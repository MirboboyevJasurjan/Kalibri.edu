import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./UserPanel.css";
import Courses from "../Courses/Coureses";
import team1 from "../../images/team-1-1.jpg";
import course1 from "../../images/course-1-1.jpg";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import Course from "../Course/Course";
import axios from "axios";

const menuHandler = () => {
  const element = document.querySelector(".like_icons1");
  const element2 = document.querySelector(".like_icons2");

  if (element.style.opacity === "1") {
    element.style.opacity = "0";
    element2.style.opacity = "1";
  } else {
    element.style.opacity = "1";
    element2.style.opacity = "0";
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="tabPanel"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs({
  course = [],
  courseImg,
  courseMiniImg,
  CourseHours,
  CourseLectures,
  CoursePrice,
  CourseTeacher,
  CourseName,
  onClickPlus,
  // onFavorite,
  cartItems,
}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [favorites, setFavorites] = React.useState([]);
  const [allCourse, setAllCourse] = useState([]);
  const [favoriteCourse, setFavoriteCourse] = useState([]);

  React.useEffect(() => {
    fetch("https://6309e6f632499100327d641a.mockapi.io/course")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setAllCourse(json);
      });
   
  }, []);
  React.useEffect(()=>{
    fetch("https://6309e6f632499100327d641a.mockapi.io/favorites")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setFavoriteCourse(json);
    });
  },[])
  const onFavorite = (obj) =>{
    axios.post('https://6309e6f632499100327d641a.mockapi.io/favorites', obj);
    setFavoriteCourse(prev=>[...prev, obj]);
  }
  // const onFavorite = async (obj) => {
  //   try {
  //     if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
  //       axios.delete(`https://6309e6f632499100327d641a.mockapi.io/favorites/${obj.id}`);
  //       setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
  //     } else {
  //       const { data } = await axios.post(
  //         'https://6309e6f632499100327d641a.mockapi.io/favorites',
  //         obj,
  //       );
  //       setFavorites((prev) => [...prev, data]);
  //     }
  //   } 
  //   catch (error) {
  //     alert('Не удалось добавить в фавориты');
  //     console.error(error);
  //   }
  // };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
      className="MuiBox"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        className="BoxTabs"
      >
        <Tab className="TabsText" label="Mening kurslarim" {...a11yProps(0)} />
        <Tab className="TabsText"  label="Barcha kurslar" {...a11yProps(1)} />
        <Tab className="TabsText" label="Yoqqan kurslar" {...a11yProps(2)} />
        <Tab className="TabsText" label="Tolovlar" {...a11yProps(3)} />
        <Tab className="TabsText" label="Xaridlar tarihi" {...a11yProps(4)} />
        <Tab className="TabsText" label="Savol javob" {...a11yProps(5)} />
        <Tab className="TabsText" label="Sozlamalar" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h2
          style={{
            fontSize: "45px",
            fontFamily: "Roboto",
            color: "#022c46",
            fontWeight: "800",
          }}
        >
          MENING KURSLARIM
        </h2>
        
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2
          style={{
            fontSize: "45px",
            fontFamily: "Roboto",
            color: "#022c46",
            fontWeight: "800",
          }}
        >
          Barcha kurslar
        </h2>
        {/* <Courses className="MyCourses"/> */}
        <div className="course-one__single">
          <div className="course-one__image">
            <section className="course-one course-page">
              <div className="container">
                <div className="row" items={cartItems}>
                  {allCourse.map((item, index) => (
                    <Course
                      key={index}
                   
                      onClickPlus={console.log(item)}
                      onFavorite={(obj) => onFavorite(obj)}
                      id={item.id}
                      {...item}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2 style={{ fontSize: "50px", color: "green" }}>
          Yoqqan kurslar
        </h2>
        <div className="course-one__single">
          <div className="course-one__image">
            <section className="course-one course-page">
              <div className="container">
                <div className="row" items={cartItems}>
                  {favoriteCourse.map((item, index) => (
                 <Course
                      key={index}
                      mainImg={item.mainImg}
                      miniImg={item.miniImg}
                      hour={item.hour}
                      lectures={item.lectures}
                      price={item.price}
                      teacher={item.teacher}
                      courseName={item.courseName}
                      onClickPlus={console.log(item)}
                      onFavorite={(obj) => onFavorite(obj)}
                      id={item.id}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2 style={{ fontSize: "50px", color: "red" }}>QURTSIZ !</h2>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Courses />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
