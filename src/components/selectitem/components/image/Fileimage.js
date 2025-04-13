import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid, Input } from '@mui/material';
import { DeleteOutlined, DriveFolderUploadOutlined } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import axios from 'axios';
import CustomizedDialogs from './showimage';
import { ShowLoader } from '../../../../redux/actions/showmodel'

const Fileimage = (props) => {
  const style = useTheme().palette.Components.uploadimage;
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.Section[props.id])
  const [value, setValue] = React.useState(data ? parseInt(data.desktop_Content_Position) : 0);
  const [link, setLink] = useState();
  const url = useSelector((state) => state.Api.Imagelink);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [butnVisiablity, setButnVisiablity] = useState(true);
  const [imageName, setImageName] = useState(props.value ? props.value : '');

  // Handle file selection and preview images
  const handleFileChange = async (event) => {
    const files = event.target.files;
    const newSelectedFiles = [...files];
    setSelectedFiles(newSelectedFiles);

    const newPreviewImages = [];

    // Generate previews for the selected files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = function (e) {
        newPreviewImages.push(e.target.result);

        if (newPreviewImages.length === files.length) {
          setPreviewImages(newPreviewImages);
        }
      };

      await reader.readAsDataURL(file);
    }
    setButnVisiablity(false);
    handleUpload(files);
  };

  // Handle file upload
  const handleUpload = async (files) => {
    try {
      const formData = new FormData();

      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }
      formData.append('folderName', 'sami');

      const userToken = JSON.parse(sessionStorage.getItem('User_Data'))?.token || undefined;

      dispatch(ShowLoader('1'));
      const res = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${userToken}`,
        },
      });

      if (res.status === 200) {
        setLink(res.data.link);
        dispatch(ShowLoader('0'));
        const myfunc = async () => {
          setImageName(res.data.link);
          document.getElementById('demo').value = res.data.link;
          let splitlink = await res.data.link.split('/', 6);
          const mainlink = `${splitlink[4]}/${splitlink[5]}`;
          await props.GetSelectedValue([mainlink, props.name]);
        };
        await myfunc();
      } else {
        dispatch(ShowLoader('0'));
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  // Handle image deletion
  const handleDelete = (index) => {
    setButnVisiablity(true);
    const newPreviewImages = [...previewImages];
    newPreviewImages.splice(index, 1);
    setPreviewImages(newPreviewImages);

    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);

    setImageName('');
  };

  const dummyOnchange = () => {};

  return (
    <>
      <Grid container>
        <Grid item lg={7} md={7} sm={7} xs={7} >
          <Box 
          // sx={{ display: butnVisiablity === true ? 'block' : 'none' }}
          >
            <Box sx={{...style.mainimageContainer,
                  overflow: 'hidden'}}>
              <Input
                type="file"
                name={props.name}
                sx={{
                  ...style.file,
                }}
                onChange={handleFileChange}
                inputProps={{ multiple: true }} // Allow multiple file selection
              />
              <DriveFolderUploadOutlined />
              <input
                type="text"
                name={props.name}
                id="demo"
                style={{display: 'none'}}
                value={imageName}
                onChange={dummyOnchange}
                required={props.required}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}>
          <CustomizedDialogs 
          id={props.id} 
          name={props.name} />
          
        </Grid>
      </Grid>
      

    </>
  );
};

Fileimage.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Fileimage;
