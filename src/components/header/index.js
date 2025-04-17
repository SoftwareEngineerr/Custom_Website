import React, { memo, useEffect, useState, Suspense } from 'react';
import {
  Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography
} from '@mui/material';
import { AddBoxOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../../app/components/input/input';
import { PostRequest } from '../../redux/actions/request/request';
import { GetSectionAction, AddSectionAction } from '../../redux/actions/addsection/addsection';
import { Page_Checker, Current_Page } from '../../redux/actions/page/page';
import { fetchPages, fetchPageById, updatePage } from './Helper/apiService';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.Api);
  const pageData = useSelector((state) => state.Section);
  const [pages, setPages] = useState([]);
  const [open, setOpen] = useState(false);
  const [pageName, setPageName] = useState('');
  const [selectedPage, setSelectedPage] = useState('');
  const token = JSON.parse(sessionStorage.getItem('User_Data'))?.token;

  // Modal Controls
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Fetch all pages
  const loadPages = async () => {
    try {
      const { data } = await fetchPages(url.ShowAllPage, token);
      if (Array.isArray(data.result)) {
        setPages(data.result);
      }
    } catch (err) {
      console.error('Error loading pages:', err);
    }
  };

  // Load selected page
  const loadPageDetails = async (value) => {
    if (value === 'plp' || value === 'pdp') {
      dispatch(Current_Page(Math.random()));
      setTimeout(() => {
        dispatch(GetSectionAction(value));
        dispatch(Page_Checker(value));
      }, 1000);
    } else {
      try {
        const pageId = pages[value - 1]?.id;
        const { data } = await fetchPageById(url.ShowPage, token, pageId);
        const pageDetails = JSON.parse(data.result[0]?.Details || '{}');
        dispatch(Current_Page(Math.random()));
        setTimeout(() => {
          dispatch(Page_Checker(''));
          dispatch(GetSectionAction(pageDetails));
        }, 1000);
      } catch (err) {
        console.error('Error loading page details:', err);
      }
    }
  };

  useEffect(() => {
    loadPages();
  }, []);

  // Select Change Handler
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedPage(value);
    loadPageDetails(value);
  };

  const handleSubmitNewPage = (e) => {
    e.preventDefault();
    const payload = {
      Name: pageName,
      Details: '[]',
    };
    dispatch(PostRequest(url.Create_page, token, payload));
    handleClose();
    loadPages();
  };

  const handleSave = async () => {
    const page = pages[selectedPage - 1];
    if (!page) return;
    try {
      await updatePage(url.EditPage, token, {
        Name: page.Page_Name,
        Details: pageData,
        id: page.id,
      });
    } catch (err) {
      console.error('Save failed:', err);
    }
  };

  return (
    <Suspense fallback={<>Loading...</>}>
      <Box
        sx={{
          height: '63px',
          zIndex: 10000,
          position: 'relative',
          background: '#ebebeb',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 2
        }}
      >
        <Button onClick={handleOpen}><AddBoxOutlined /></Button>

        {/* Page Selector */}
        {pages.length > 0 && (
          <FormControl fullWidth>
            <InputLabel id="page-select-label">Select Page</InputLabel>
            <Select
              labelId="page-select-label"
              value={selectedPage}
              label="Page"
              onChange={handleChange}
            >
              {pages.map((item, idx) => (
                <MenuItem key={item.id} value={idx + 1}>{item.Page_Name}</MenuItem>
              ))}
              <MenuItem value="plp">Product List</MenuItem>
              <MenuItem value="pdp">Product Detail</MenuItem>
            </Select>
          </FormControl>
        )}

        <Button onClick={handleSave}>Save</Button>

        {/* Modal to create new page */}
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6">Add Page Name</Typography>
            <Box mt={2}>
              <form onSubmit={handleSubmitNewPage}>
                <Input
                  placeholder="Enter Page Name"
                  required
                  onChange={(e) => setPageName(e.target.value)}
                />
                <Box mt={2}>
                  <Button variant="contained" type="submit">
                    Create Page
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Suspense>
  );
};

export default memo(Header);