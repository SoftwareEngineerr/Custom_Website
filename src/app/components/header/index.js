import * as React from 'react';
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

// Ensure pages and settings are initialized as arrays
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const [obj , setObj ] = React.useState(TempObj.header)
  const obj = useSelector((state)=>state.Section[props.getid]);
  console.log(props.getid)

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

  // Helper function to safely map over arrays
  const safeMap = (array) => {
    try {
      // Check if it's an array before mapping
      if (Array.isArray(array)) {
        return array.map((item) => (
          <MenuItem key={item} onClick={handleCloseNavMenu}>
            <Typography sx={{ textAlign: 'center' }}>{item}</Typography>
          </MenuItem>
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
        )
    })
    ||
    obj.color && {
      color: obj.color,

    }
    )
  }
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
