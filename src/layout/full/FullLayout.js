import React, { lazy, useEffect, useState } from "react";
import { styled, Container, Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Sidebar = lazy(()=>import('./sidebar/Sidebar'))
const Header = lazy(()=>import('../../components/header'))

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
}));

const FullLayout = () => {
  const [checker , setChecker] = useState();
  const naviage = useNavigate();
  const [data , setData ] = useState();
  const dispatch = useDispatch()


  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  return (
    <>
    <Header />
    <MainWrapper
      className='mainwrapper'
    >
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      <Sidebar isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)} />
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper
        className="page-wrapper"
      >
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- */}
        {/* <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} toggleMobileSidebar={() => setMobileSidebarOpen(true)} /> */}
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Container sx={{
          paddingTop: "20px",
          maxWidth: '100% !important',
        }}
        >
          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          <Box id='test1' sx={{ minHeight: 'calc(100vh - 170px)' }}>
{/*           
            {
              checker
            } */}
              <Outlet />
             

          </Box>
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Container>
        {/* <Label /> */}
      </PageWrapper>
    </MainWrapper>
    </>
  );
};

export default FullLayout;
