import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import AppInput from '../input';
import CustomButton from '../button';

const Contact = props => {
    const obj = useSelector((state)=>state.Section[props.getid]);
    const [checker , setChecker ] = useState(obj)
    console.log(props.getid,obj )
    useEffect(()=>{
        setChecker(obj)
        console.log(obj)
    },[obj])
      
  return (
    <>
        {
            checker ?
            <Box>
                <Grid container sx={{
                        padding : `${obj.top_Padding ? obj.top_Padding : 0}px ${obj.bottom_Padding ? obj.bottom_Padding : 0}px`
                }}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant={
                            obj.heading_Size == '1' ? 'h2' : obj.heading_Size == '2' ? 'h3' : obj.heading_Size == '3' ? 'h4' : null
                        }>
                            {obj.heading}
                        </Typography>
                        <br />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} p={1}>
                        <AppInput data='Name' name='name' />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}  p={1}>
                        <AppInput data='Email' name='Email' />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} p={1}>
                        <AppInput data='Phone Number' name='phone' />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} p={1}>
                        <TextField
                            label="Your Message"
                            multiline
                            rows={4} // Adjust number of rows (height) of the textarea
                            variant="outlined" // Use "filled", "outlined", or "standard"
                            fullWidth // Optional: make the textarea take up the full width of its container
                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12} p={1}>
                        <CustomButton data={obj.first_button} getstyle={{
                                padding : `${obj.button_TL_Padding ? obj.button_TL_Padding : 0}px ${obj.button_LR_Padding ? obj.button_LR_Padding : 0}px`,
                        }} />
                    </Grid>
                </Grid>
            </Box>
            :
            null

        }
    </>
  )

}

Contact.propTypes = {
      getid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default memo(Contact)