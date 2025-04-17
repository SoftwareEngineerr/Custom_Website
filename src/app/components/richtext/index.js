import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import CustomButton from '../button';

const RichText = (props) => {
  const obj = useSelector((state)=>state.Section[props.getid]);
//   alert(obj.content_Alignment)
  return (
    <Box
    sx={{
      padding: "50px",
      display: 'flex',
      flexDirection: 'column',
      alignItems: obj.content_Alignment == 1 ? 'center' : 
      (obj.content_Alignment == 2 ? 'flex-end' : obj.content_Alignment == 0 ? 'flex-start' : null),  // Corrected here
      textAlign: obj.desktop_Content_Position == 1 ? 'center' : 
      (obj.desktop_Content_Position == 2 ? 'right' : obj.desktop_Content_Position == 0 ? 'left' : null), 
    }}
  >
    
            <Typography variant='h2'
            sx={{
                paddingBottom: "20px",
                width: '100%'
            }}
            >
                {obj.heading}
            </Typography>
            <Typography variant='p'>
                {obj.description}
            </Typography>
            <Typography variant='h2'>
                <CustomButton
                getstyle={{
                    padding: `
                        ${obj.button_TL_Padding}px ${obj.button_LR_Padding}px
                        `,                   
                }}
                data={obj.button}
                />
            </Typography>
    </Box>
  )
}

RichText.propTypes = {
    getid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default memo(RichText)