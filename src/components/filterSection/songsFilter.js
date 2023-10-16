import React,{useState} from "react"
import PropTypes from 'prop-types';
import "./songsFilter.css" 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {CardListCarouels} from "../cardCarouselSection/cardLIst";



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
  
            <Typography style={{color:"white"}}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function SongsFilter() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
       <div  class=" mt-3 border-top border-bottom border-success">
       <p class="mt-4 text-start fs-4  ms-5" style={{fontWeight:"700", color:"white"} }>Songs</p> 
        <Box sx={{ borderTop: 1, borderColor: 'divider', padding: 0  }} 
        style={{ color: "#66c65c"}}>
           
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" indicatorColor="#66c65c" >
          <Tab label="All" {...a11yProps(0)}  style={{fontWeight:"700", color:"white"}} id="underline"/>
          <Tab label="Rock" {...a11yProps(1)} style={{fontWeight:"700", color:"white"}} id="underlines"/>
          <Tab label="Pop" {...a11yProps(2)} style={{fontWeight:"700", color:"white"}} id="underlines" />
          <Tab label="Jazz" {...a11yProps(3)} style={{fontWeight:"700", color:"white"}} id="underlines" />
          <Tab label="Blues" {...a11yProps(4)} style={{fontWeight:"700", color:"white"}} id="underlines"/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <CardListCarouels />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <CardListCarouels />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} >
      <CardListCarouels />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <CardListCarouels />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4} >
      <CardListCarouels />
      </CustomTabPanel>

       </div>
        
        </>
    )
}

export default SongsFilter;