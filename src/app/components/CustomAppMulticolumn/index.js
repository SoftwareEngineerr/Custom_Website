import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import CustomButton from '../button';

const CustomAppMulticolumn = props => {
    const obj = useSelector((state) => state.Section[props.getid]);
    const [data , setData ] = useState([
        {
            image: obj.firstimage,
            heading: obj.firstheading,
            description: obj.firstdescription
        },
        {
            image: obj.secondimage,
            heading: obj.secondheading,
            description: obj.seconddescription
        },
        {
            image: obj.thirdimage,
            heading: obj.thirdheading,
            description: obj.thirddescription
        },
    ])

    useEffect(()=>{

        setData([
            {
                image: obj.firstimage,
                heading: obj.firstheading,
                description: obj.firstdescription
            },
            {
                image: obj.secondimage,
                heading: obj.secondheading,
                description: obj.seconddescription
            },
            {
                image: obj.thirdimage,
                heading: obj.thirdheading,
                description: obj.thirddescription
            },
        ])

    },[obj.number_of_columns])
  return (
    <Box
    sx={{
        padding : `${obj.top_Padding ? obj.top_Padding : 0}px ${obj.bottom_Padding ? obj.bottom_Padding : 0}px`
    }}
    >
        
        <Grid container
        
        >
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography variant={
                    obj.heading_Size == '1' ? 'h2' : obj.heading_Size == '2' ? 'h3' : obj.heading_Size == '3' ? 'h4' : null
                }>
                    {
                        obj.heading
                    }
                </Typography>
            </Grid>
            <br />
            <br />

            {
                data.map((item , ind)=>
                <Grid item lg={12/obj.number_of_columns} md={12/obj.number_of_columns} ind={ind} p={1}>
                    <Box
                    p={2}
                    sx={{
                        background: '#ededed',
                        textAlign: obj.columns_Alignment == 1 ? 'center' : 'left'
                    }}
                    >
                        <Typography variant='h4'>
                            {item.heading}
                        </Typography>
                        <br />
                        <Typography variant='p'>
                            {item.description}
                        </Typography>
                    </Box>
                </Grid>
                )
            }


        </Grid>
            {
                obj.button != '' ?
                    <CustomButton data={obj.button} getstyle={{
                        padding: `
                        ${obj.button_TL_Padding}px ${obj.button_LR_Padding}px
                        `,   
                    }}  />
                :
                null
            }
    </Box>
  )
}

CustomAppMulticolumn.propTypes = {}

export default CustomAppMulticolumn