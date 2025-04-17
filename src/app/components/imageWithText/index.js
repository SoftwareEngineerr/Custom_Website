import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const ImageWithText = props => {
  const obj = useSelector((state)=>state.Section[props.getid]);
    // alert(obj.desktop_image_placement)
  return (
    <div>
        <Grid container 
        sx={{
            alignItems: "center",
            ...(obj.top_Padding && { paddingTop: `${obj.top_Padding}px` }),
            ...(obj.bottom_Padding && { paddingBottom: `${obj.bottom_Padding}px` }),
            flexDirection: (obj.desktop_image_placement == '1' ? "flex-direction" : 'row-reverse'),


      
        }}  
        
        >
            <Grid item lg={obj.desktop_image_width == 1 && 1} md={6} sm={12} xs={12}>
                <Box 
                component="img" 
                src="https://npr.brightspotcdn.com/03/9c/3a2e47fc412a857e60875267fc30/clothing-istock-vectorikart-2021-0730.jpg" 
                sx={{
                width: '100%',
                 height: obj.desktop_image_height == 1 && '100%' || obj.desktop_image_height == 2 && "300px"  || obj.desktop_image_height == 3 && "500px"  || obj.desktop_image_height == 4 && "600px"  
                }}
                ></Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography 
                variant='h2'
                sx={{
                    padding: "8px 0px"
                }}
                >
                    {
                        obj.heading
                    }
                </Typography>
                <Box
                  sx={{
                    padding: "8px 0px"
                }}
                >
                    <Typography
                    variant='p'
                    
                    >
                        {
                            obj.description
                        }
                    </Typography>
                </Box>
                <Box>
                    <Button
                    sx={{

                    }}
                    >
                        {
                            obj.button
                        }
                    </Button>
                </Box>
            </Grid>
            
        </Grid>
    </div>
  )
}

ImageWithText.propTypes = {
      getid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default memo(ImageWithText)