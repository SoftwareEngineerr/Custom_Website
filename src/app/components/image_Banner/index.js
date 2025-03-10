import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const Image_Banner = props => {
  const obj = useSelector((state)=>state.Section[props.getid]);
    // alert(obj.desktop_image_placement)
  return (
    <div>
        <Grid container 
        sx={{
            // alignItems: "center",
            ...(obj.top_Padding && { paddingTop: `${obj.top_Padding}px` }),
            ...(obj.bottom_Padding && { paddingBottom: `${obj.bottom_Padding}px` }),
            ...(obj.Image && { backgroundImage: `url(${obj.Image})` }),
            alignContent: ((obj.Desktop_content_position == '1' || obj.Desktop_content_position == '2' || obj.Desktop_content_position == '3') ? "flex-start" : (obj.Desktop_content_position == '4' || obj.Desktop_content_position == '5' || obj.Desktop_content_position == '6') ? 'center' : ' flex-end'),
            justifyContent: ((obj.Desktop_content_position == '1' || obj.Desktop_content_position == '4' || obj.Desktop_content_position == '7') ? "flex-start" : (obj.Desktop_content_position == '2' || obj.Desktop_content_position == '5' || obj.Desktop_content_position == '8') ?  'Center':'flex-end' ),
            // justifyContent: (obj.Desktop_content_position == '1' ? "flex-direction" : 'row-reverse'),
            minHeight: (obj.Banner_height == 1 ? 'fit-content': obj.Banner_height == 2 ? '400px': obj.Banner_height == 3 ? '500px' : obj.Banner_height == 4 ? '600px' : null),
            width: "100%",
            overflow:"hidden",
            position:  'relative',
            padding: '70px 0',


                "&::before": {
                            content: '""', // Make sure content is defined for the pseudo-element
                            display: 'block', // Ensure the pseudo-element takes up space
                            position: 'absolute', // Typically you'd use absolute positioning for a pseudo-element
                            top: 0, // You might need to adjust this based on your layout
                            left: 0, // Same as above
                            width: '100%', // Ensure it covers the full width
                            height: '100%', // Ensure it covers the full height
                            backgroundColor: "black", // Set background color
                            cursor: "pointer", // Show pointer cursor
                            transform: "scale(1.05)", // Slight zoom effect
                            transition: 'transform 0.3s ease', // Optional: Add transition for smooth scaling
                            opacity: `.${obj.Image_overlay_opacity}`,
                        },
        }}  
        
        >
            <Box
                sx={{
                    background:"white",
                    maxWidth: "600px",
                    position: 'relative',
                    padding : `${obj.top_Padding ? obj.top_Padding : 0}px ${obj.bottom_Padding ? obj.bottom_Padding : 0}px`
                }}
            >
                <Typography variant='h2'>
                    {obj.heading}
                </Typography>
                <br />
                <Typography variant='p'>
                    {obj.description}
                </Typography>
                <br />
                <br />


                 <Box>
                    <Button
                    sx={{
                        padding : `${obj.button_TL_Padding ? obj.button_TL_Padding : 0}px ${obj.button_LR_Padding ? obj.button_LR_Padding : 0}px`,
                        // margin: '10px '

                    }}
                    >
                        {
                            obj.first_button
                        }
                    </Button>
                    <Button
                    sx={{
                        padding : `${obj.button_TL_Padding ? obj.button_TL_Padding : 0}px ${obj.button_LR_Padding ? obj.button_LR_Padding : 0}px`,
                        margin: '10px'
                    }}
                    >
                        {
                            obj.second_button
                        }
                    </Button>
                </Box>
            </Box>
        </Grid>
    </div>
  )
}


Image_Banner.propTypes = {}

export default Image_Banner