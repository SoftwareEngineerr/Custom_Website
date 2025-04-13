import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid } from '@mui/material';
import { TempObj } from '../../../constant/temporaryObj';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from "react-router-dom";
import BasicMenu from "./dropdown";

// Ensure pages and settings are initialized as arrays


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header(props) {
  const [pages , setPages] = useState();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [obj , setObj ] = useState(TempObj.header)
  const obj = useSelector((state)=>state.Section[props.getid]);
  const userToken = JSON.parse(sessionStorage.getItem('User_Data'))?.token || undefined;
  const url = useSelector((state) => state.Api);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    const showMenu = async() =>{
      try {
        const response = await axios.get(url.ShowMenu, {
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`, // Ensure userToken is valid and present
          },
      });
      if (response.status == 200) {
  
        function fixAndParse(inputString) {
          // Step 1: Replace single quotes with double quotes
          let fixedString = inputString.replace(/'/g, '"');
      
          // Step 2: Add double quotes around property names if missing
          fixedString = fixedString.replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
      
          // Step 3: Now, parse the corrected string
          try {
              const cusData = JSON.parse(fixedString);
              // Return the first object in the array
              console.log(cusData)
              return cusData;
          } catch (error) {
              console.error("Invalid JSON format:", error);
              return null;
          }
      }
  
      const getda = response.data.result
      // console.log(getda)
        setPages(response.data.result);
      }
    } catch (error) {
      console.error(error);
  }
    }
    useEffect(()=>{
      showMenu()
    },[])


  // Helper function to safely map over arrays
  const safeMap = (array) => {
    try {
      // Check if it's an array before mapping
      if (Array.isArray(array)) {
        return array.map((item) => (
          // <MenuItem key={item} onClick={handleCloseNavMenu} >
            <>
            <Link 
            // to={`/${item.Link}`} 
            style={{ 
              textAlign: 'center',
              textDecoration: 'none',
              color: 'black',
              padding: '0'
              }}
            > 
              <BasicMenu name={item.Name} submenu={item.submenu} />
              {/* {item.Name} */}
              </Link>
            </>
          // </MenuItem>
        ));
      } else {
        console.warn('Expected an array but got:', array);
        return [];
      }
    } catch (error) {
      console.error('Error while mapping:', error);
      return [];
    }
  };

  return (
    obj != undefined && (
    <AppBar position="static"
    sx={
      (obj != undefined && ( obj.background && {
        background: obj.background,
        ...(
          obj.background == "white" ? {"color" : "black"} : null

        ),
        boxShadow: "none"

    })
    ||
    obj.color && {
      color: obj.color,
      boxShadow: "none"

    }
    )
  }
    >
      <Container maxWidth="xl" sx={{
        boxShadow: "none"
      }}>
        <Toolbar disableGutters sx={{
          boxShadow: "none"
        }}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* {

          } */}
    {
        (obj.Logo == 1 || obj.Logo == 2 || obj.Logo == 3) && (
        
          <Grid container sx={
            obj.Logo == 3 && {
              width: "fit-content"
            }
            }>
            <Grid item lg={12} md={12} sm={12}
            sx={
              
                obj.Logo == 2 && 
                  {
              textAlign: 'center',
              display: 'flex ',
              justifyContent: 'center',
              width: '100%',
              position: 'absolute',
              // background: 'blue',
              marginTop: -'10px',
            }
          }
            >
            <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    
                  }}
                >
                  LOGO sami
                </Typography>

            </Grid>
          </Grid>
                )

              }

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {safeMap(pages)}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            
              
            }}
          >
            LOGO
          </Typography>
          {
          ( obj.Logo == 3 || obj.Logo == 4) && (
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,flexWrap: 'wrap', }}>
            {safeMap(pages)}
          </Box> 
          )}
           {
        (obj.Logo == 4) && (
        
          <Grid container>
            <Grid item lg={12} md={12} sm={12}
            sx={{

            }}
            >
            <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  LOGO sami
                </Typography>

            </Grid>
          </Grid>
                )

              }

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {safeMap(settings)}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      {
        (obj.Logo == 1 ||  obj.Logo == 2) &&  (
          <Box 
          sx={{
            flexGrow: 1, 
            display: { 
              xs: 'none', 
              md: 'flex', 
              ...(obj.Logo == 2 && { 
                display: 'flex', 
                justifyContent: 'center' 
              })
            }
          }}
        >
              {safeMap(pages)}
            </Box>
      )
      }
    </AppBar>
    )
  );
}

export default Header;
