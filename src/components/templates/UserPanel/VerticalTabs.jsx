import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './UserPanel.css'
import Courses from '../Courses/Coureses';
import team1 from "../../images/team-1-1.jpg";
import course1 from "../../images/course-1-1.jpg";
import { Link } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';


const menuHandler = () => {
  const element = document.querySelector('.like_icons1');
  const element2 = document.querySelector('.like_icons2');
  
  if (element.style.opacity === "1") {
    element.style.opacity = "0";
    element2.style.opacity = "1";
  } else {
    element.style.opacity = "1";
    element2.style.opacity = "0";
  }
}

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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      className="MuiBox"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className="BoxTabs"
      >
        <Tab label="Mening kurslarim" {...a11yProps(0)} />
        <Tab label="Barcha kurslar" {...a11yProps(1)} />
        <Tab label="Yoqqan kurslar" {...a11yProps(2)} />
        <Tab label="Tolovlar" {...a11yProps(3)} />
        <Tab label="Xaridlar tarihi" {...a11yProps(4)} />
        <Tab label="Savol javob" {...a11yProps(5)} />
        <Tab label="Sozlamalar" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <h2 style={{fontSize:"45px", fontFamily: "Roboto", color:"#022c46", fontWeight:"800"}}>MENING KURSLARIM</h2>
        <div style={{width: "33.3%", padding:"0 12px"}}>
        <div className="course-one__single">
              <div className="course-one__image">
                <img src={course1} alt="" />
                <i className="like_icons">
                  <AiOutlineHeart onClick={menuHandler} className="like_icons1" />
                  <AiFillHeart onClick={menuHandler} className="like_icons2" />
                </i>
              </div>
              <div className="course-one__content">
                <a href="#none" className="course-one__category">
                  development
                </a>
                <div className="course-one__admin">
                  <img src={team1} alt="" />
                  by <Link to="/teachersdetalis">Lou Guerrero</Link>
                </div>
                <h2 className="course-one__title">
                  <Link to="/coursedetails">New react bootcamp</Link>
                </h2>
                
                <div className="course-one__meta">
                  <a href="/course-details">
                    <i className="far fa-clock"></i> 10 Hours
                  </a>
                  <a href="/course-details">
                    <i className="far fa-folder-open"></i> 6 Lectures
                  </a>
                  <a href="/course-details">$18</a>
                </div>
                <a href="#none" className="course-one__link">
                  See Preview
                </a>
              </div>
            </div>
          </div>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 style={{fontSize:"45px", fontFamily: "Roboto", color:"#022c46", fontWeight:"800"}}>Barcha kurslar</h2>
        <Courses className="MyCourses"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2 style={{fontSize:"50px", color:"green"}}>SIZ</h2>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2 style={{fontSize:"50px", color:"red"}}>QURTSIZ !</h2>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Courses/>
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
