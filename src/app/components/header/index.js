import React, { useEffect, useState, useCallback, memo } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import BasicMenu from "./dropdown";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = ({ getid }) => {
  const [pages, setPages] = useState([]);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const obj = useSelector((state) => state.Section[getid]);
  const url = useSelector((state) => state.Api);
  const userToken = JSON.parse(sessionStorage.getItem('User_Data'))?.token;

  const fetchMenuData = useCallback(async () => {
    try {
      const res = await axios.get(url?.ShowMenu, {
        headers: { Authorization: `Bearer ${userToken}` }
      });
      if (res.status === 200) setPages(res.data.result || []);
    } catch (error) {
      console.error("Menu fetch error:", error);
    }
  }, [url, userToken]);

  useEffect(() => {
    if (userToken) fetchMenuData();
  }, [fetchMenuData, userToken]);

  const handleNavMenuOpen = useCallback((e) => setAnchorElNav(e.currentTarget), []);
  const handleUserMenuOpen = useCallback((e) => setAnchorElUser(e.currentTarget), []);
  const handleMenuClose = useCallback(() => {
    setAnchorElNav(null);
    setAnchorElUser(null);
  }, []);

  const renderLogo = () => {
    if ([1, 2, 3].includes(obj?.Logo)) {
      return (
        <Grid container sx={obj.Logo === 3 ? { width: 'fit-content' } : {}}>
          <Grid item xs={12} sx={obj.Logo === 2 ? {
            textAlign: 'center', display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute'
          } : {}}>
            <Typography variant="h6" component="a" href="#"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              LOGO sami
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return null;
  };

  const renderPageLinks = (arr) => (
    Array.isArray(arr) ? arr.map((item, i) => (
      <Box key={i}>
        <Link style={{ textDecoration: 'none', color: 'black' }}>
          <BasicMenu name={item?.Name || item} submenu={item?.submenu} />
        </Link>
      </Box>
    )) : null
  );

  return obj ? (
    <AppBar
      position="static"
      sx={{
        background: obj.background || 'inherit',
        color: obj.background === 'white' ? 'black' : 'inherit',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {renderLogo()}

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleNavMenuOpen} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleMenuClose}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {renderPageLinks(pages)}
            </Menu>
          </Box>

          {/* Logo for Mobile */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
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

          {/* Desktop Menu */}
          {[3, 4].includes(obj.Logo) && (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}>
              {renderPageLinks(pages)}
            </Box>
          )}

          {/* Logo for Type 4 */}
          {obj.Logo === 4 && renderLogo()}

          {/* User Avatar Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleUserMenuOpen} sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleMenuClose}
            >
              {renderPageLinks(settings)}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Desktop Menu for Logo 1 & 2 */}
      {[1, 2].includes(obj.Logo) && (
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            ...(obj.Logo === 2 && { justifyContent: 'center' })
          }}
        >
          {renderPageLinks(pages)}
        </Box>
      )}
    </AppBar>
  ) : null;
};



export default memo(Header);
