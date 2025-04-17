import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Radio from '@mui/material/Radio'; // Import Radio component
import RadioGroup from '@mui/material/RadioGroup'; // Import RadioGroup for handling the selection
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel'; // Import FormControlLabel for the labels of radio buttons
import { useDispatch } from 'react-redux';
import { DynamicState } from '../../../../../redux/actions/addsection/addsection';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const url = useSelector((state) => state.Api);
  const [imageLinks, setImageLinks] = React.useState([]);
  const [selectedImage, setSelectedImage] = React.useState(null); // Track selected image
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (param) => {
    if(param){
      console.log(param)
      dispatch(DynamicState(props.id,param , props.name))
    }
    setOpen(false);

  };

  // Call the API to get image links
  const fetchImages = async () => {
    const userToken = JSON.parse(sessionStorage.getItem('User_Data'))?.token || undefined;
    try {
      console.log("Fetching images from URL:", url.ShowImage); // Log the URL to ensure it's correct
      const response = await axios.get(url.ShowImage, {
        headers: {
          'Content-Type': 'application/json', // Correct content type for GET request
          'Authorization': `Bearer ${userToken}`,
        },
      });
      console.log("API Response: ", response.data); // Log the response to verify
      if (response.data.success && Array.isArray(response.data.imageLinks)) {
        setImageLinks(response.data.imageLinks); // Set the image links in state
      } else {
        console.log('No images found or wrong response structure');
      }
    } catch (error) {
      console.error('Error fetching images:', error.message); // Log the error message for clarity
    }
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  // Handle image selection
  const handleImageSelect = (link) => {
    setSelectedImage(link); // Set the selected image to the clicked image link
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Upload Image
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select Images
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {imageLinks.map((link, index) => (
                <div key={index} style={{ margin: '10px' }}>
                  <img
                    src={link}
                    alt={`Image ${index}`}
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                      border: selectedImage === link ? '2px solid blue' : 'none', // Highlight the selected image
                    }}
                  />
                  <RadioGroup value={selectedImage} onChange={() => handleImageSelect(link)}>
                    <FormControlLabel
                      value={link}
                      control={<Radio />}
                      label="Select"
                    />
                  </RadioGroup>
                </div>
              ))}
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>handleClose(selectedImage)}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
