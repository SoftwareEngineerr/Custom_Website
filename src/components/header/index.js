import React, { memo, useEffect, useState } from 'react';
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

  sessionStorage.setItem('User_Data', `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W3siU3JuIjoyMCwiVGVhY2hlclN0YWZmU3JuIjo2MywiV2ViU3JuIjo3LCJFeHBlbnNlIjoxLCJEb25hdGlvbiI6MSwiSW5jb21lIjoxLCJSZXN1bHQiOjEsIkFkbWluIjoxLCJsYmxIb21lIjoxLCJsYmxUZWFjaGVyIjoxLCJsYmxNYW5hZ2VtZW50IjoxLCJJbnZlbnRvcnkiOjEsIlRlYWNoZXJSZWciOjEsIktoYXRhIjoxLCJQcm9kdWN0X0F2YWlsYWJsZSI6MSwiS2hhdGFfQmlsbCI6MX1dLCJwcml2YXRlIjp7IlNybiI6MCwiV2ViU3JuIjo3LCJSb2xsTnVtIjo2MywiTmFtZSI6InRlc3RpbiIsIklkTm8iOjk5ODksIkZOYW1lIjoic3llZCIsIlRlbGxObzEiOjcwMDAxMjU2NSwiVGVsbE5vMiI6MCwiUmVmZXJlbmNlIjoiIiwiQWRtaXNzaW9uRmVlIjowLCJNb250aGx5RmVlIjo2MDAsIkNsYXNzIjoidW5kZWZpbmVkIiwiY2xhc3NJRCI6MCwiQWRkcmVzcyI6IiIsIkFkbWlzc2lvbkRhdGUiOiI4IE1hcmNoIDIwMjQiLCJFbmdsaXNoQ2VudGVyIjowLCJBcmFiaWNDZW50ZXIiOjAsIkNvbXB1dGVyQ2VudGVyIjowLCJIb2x5UXVyYW4iOjAsIkRPQiI6IjI0IEphbnVhcnkgMjAxOCIsIkV4aXREYXRlIjoidW5kZWZpbmVkIiwiQ29tbWVudHMiOiIiLCJQaWN0dXJlIjoiNy8xNzI4NTYwNjE2NzY5LTQ0MzI0MzI1LmpwZyIsIkhvc3RlbEZhY2lsaXR5IjowLCJUcmFuc3BvcnRGYWNpbGl0eSI6MCwiT3JwaGFuIjowLCJHYXJpZ29yaWFuRGF0ZSI6Itux27TbsNuyINit2YjYqiDbsduyLCDYtNmG2KjZhyIsIklzbGFtaWNEYXRlIjoi2KfZhNiz2KjYqtiMINmiINmF2KfYsdizINmi2aDZotmkIiwiRG9iSXNsYW1pY0RhdGUiOiIiLCJEb2JHckRhdGUiOiIiLCJTdHVkZW50VGVhY2hlclN0YWZmIjowLCJOYW1lX1AiOiLZhtuM2YYiLCJGTmFtZV9QIjoi2pPbjNqTIiwiUmVmZXJlbmNlX1AiOiIiLCJBZGRyZXNzX1AiOiIiLCJPbGRBc3Nhc05vIjowLCJEYXRlIjoiMjAyNC0wMy0wMlQwODowMDowMC4wMDBaIiwiY3JlYXRlZEJ5QWRtaW4iOiI1OCIsInBhc3N3b3JkIjoidGVzdGtkciIsInJvbGUiOiIiLCJhY2Nlc3NpYmlsaXR5IjoiIiwiZW1haWwiOiJuZXdUZWFjaGVyIiwiYXBwcm92ZWQiOiJ0cnVlIn0sImlhdCI6MTc0NTU5OTE0NSwiZXhwIjoxNzQ1NjA2MzQ1fQ.e_65LIOcZZ6XUSlZr1QR881jkDtxHAEGTETga4ojO6M",
    "roles": [
        {
            "Srn": 20,
            "TeacherStaffSrn": 63,
            "WebSrn": 7,
            "Expense": 1,
            "Donation": 1,
            "Income": 1,
            "Result": 1,
            "Admin": 1,
            "lblHome": 1,
            "lblTeacher": 1,
            "lblManagement": 1,
            "Inventory": 1,
            "TeacherReg": 1,
            "Khata": 1,
            "Product_Available": 1,
            "Khata_Bill": 1
        }
    ],
    "userimage": "7/1728560616769-44324325.jpg"
}`);
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
  );
};

export default memo(Header);