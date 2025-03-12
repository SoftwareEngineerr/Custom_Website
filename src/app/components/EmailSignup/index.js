import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { ArrowRightAlt } from '@mui/icons-material';
import AppInput from '../input';
import CustomButton from '../button';
import zIndex from '@mui/material/styles/zIndex';

const EmailSignup = props => {
    const obj = useSelector((state)=>state.Section[props.getid]);
  return (
    <div>
        <Box
        sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding : `${obj.top_Padding ? obj.top_Padding : 0}px ${obj.bottom_Padding ? obj.bottom_Padding : 0}px`
            
        }}
        >
            <Box>
                <Typography variant={
                    obj.heading_Size == '1' ? 'h2' : obj.heading_Size == '2' ? 'h3' : obj.heading_Size == '3' ? 'h4' : null
                }>
                    {obj.heading}
                </Typography>
            </Box>
            <br />
            <Box>
                <Typography variant='p'>
                    {obj.description}
                </Typography>
            </Box>
            <br />
            <form onSubmit={()=>alert('welcome')}>
                <Box sx={{
                    maxWidth: "400px",
                    width: "400px",
                    position: 'relative'
                }}>
                    <CustomButton
                        getstyle={{
                            position: 'absolute',
                            right: '6px',
                            fontSize: '34px',
                            top: '9px',
                            zIndex: '1'
                        }}
                        type="submit"
                        data={ <ArrowRightAlt
                            />}
                    />
                    <AppInput type='email' name="email" placeholder="email"  required="true" />
                </Box>
            </form>
        </Box>
    </div>
  )
}

EmailSignup.propTypes = {}

export default EmailSignup