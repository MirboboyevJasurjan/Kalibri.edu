import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './UserPanel.css'
import Courses from '../Courses/Coureses';

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
        <h2 style={{fontSize:"30px", paddingLeft: "25px", color:"blue"}}>MENING KURSLARIM</h2><br/>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2 style={{fontSize:"45px", fontFamily: "Roboto", color:"#022c46", fontWeight:"800"}}>ALL COURSES</h2>
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
