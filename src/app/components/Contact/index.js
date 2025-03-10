import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const Contact = props => {
      const obj = useSelector((state)=>state.Section[props.getid]);
  return (
    <Box>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant='h2'>
                    {obj.heading}
                </Typography>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>

            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>

            </Grid>
        </Grid>
    </Box>
  )
}

Contact.propTypes = {}

export default Contact