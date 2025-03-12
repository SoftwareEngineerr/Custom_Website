import React, { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Box, List, Tabs , Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { ShowLoader } from '../../../redux/actions/loader';
import { useTheme } from '@emotion/react';
import Header from './components/header';
import SlideShow from './components/slideshow';
import MultiColumn from './components/multicolumn';
import FeaturedCollection from './components/featuredcollection';
import CollectionList from './components/collectionlist';
import Footer from './components/footer';
import { IconAddressBook, IconBorderInner, IconBrandAppstore, IconSettings } from '@tabler/icons';
import AddSection from './addsection';
import RichText from './components/richtext';
import ImageWithText from './components/imageWithText';
import ImageBanner from './components/imageBanner';
import Contact from './components/contact';
import Email_signup from './components/emailsignup';
import EmailSignup from './components/emailsignup';
import Multirow from './components/multirow';


const SidebarItems = () => {
  const { pathname } = useLocation();
  const style = useTheme().palette.sidemenutext;
  const pathDirect = pathname;
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.Section)


  const makeseconds = Math.random();
  const Stringconvertion = makeseconds.toString();
  const zeroToOne = Stringconvertion.replace('0','1')

  // function myfunc(){
  //   setTimeout(()=>{
  //     dispatch(ShowLoader('0'))
  //   },1500)
  //   dispatch(ShowLoader(zeroToOne))
  // }
  // useEffect(()=>{
  //   myfunc()
  // })

  useEffect(()=>{
    console.log(data)
  },[data])

  
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  return (
    <Box pl={0} pr={2}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,
          overflow: 'hidden',
          marginBottom: '0px',
          width: '80px',
          position: 'absolute',
          marginLeft: '-24px',
          background: '#fafafa',
    }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
            sx={{
              flexDirection: 'column', // This makes the tabs stack vertically
              display: 'flex',
            }}
            orientation="vertical" //
        >
          <Tab icon={<IconBorderInner />} {...a11yProps(0)}  />
          <Tab  icon={<IconSettings />}  {...a11yProps(1)} />
          <Tab  icon={<IconBrandAppstore />}  {...a11yProps(2)} />
        </Tabs>
      </Box>
        <Box sx={{marginLeft: "50px"}}>
      <CustomTabPanel value={value} index={0}>

            {
              data != undefined ? data.map((item, ind)=>
                <>
                {
                  item.category == "header" && (
                    <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                      <Header id={ind} />
                    </List>
                  )

                }
                {
                  item.category == "slideshow" && (
                    <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                      <SlideShow id={ind} />
                    </List>
                  )
                }
                {
                  item.category == "Collection_List" && (
                    <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                      <CollectionList id={ind} />
                    </List>
                  )
                }
                {
                  item.category == "MultiColumn" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <MultiColumn id={ind} />
                  </List>
                  )
                  }
                  {
                    item.category == "FeaturedCollection" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <FeaturedCollection id={ind} />
                  </List>
                   )
                  }
                {
                  item.category == "Footer" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <Footer id={ind} />
                  </List>
                  )
                }
                {
                  item.category == "RichText" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <RichText id={ind} />
                  </List>
                  )
                }
                {
                  item.category == "Image_With_Text" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <ImageWithText id={ind} />
                  </List>
                  )
                }
                {
                  item.category == "Image_Banner" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <ImageBanner id={ind} />
                  </List>
                  )
                }
                 {
                  item.category == "Contact" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <Contact id={ind} />
                  </List>
                  )
                }
                {
                  item.category == "Email_signup" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <EmailSignup id={ind} />
                  </List>
                  )
                }

                {
                  item.category == "Multirow" && (
                  <List sx={{ pt: 0 }} key={ind} className="sidebarNav">
                    <Multirow id={ind} />
                  </List>
                  )
                }


                




                </>
              )
              :
              null
            }

      </CustomTabPanel>
      <CustomTabPanel sx={{padding: "0"}} value={value} index={1}>
        <AddSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
        </Box>
    </Box>

     
      
    </Box>
  );
};
export default SidebarItems;
