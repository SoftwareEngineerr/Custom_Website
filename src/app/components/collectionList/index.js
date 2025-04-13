import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux';

const Collection_List = props => {
  const collection = useSelector((state)=>state.Section[props.getid]);

      const [numbers , setNumbers] = useState(collection && (Array.from({ length: collection.columns_on_desktop_count }, (_, index) => index + 1))); // Create an array [1, 2, 3, 4, 5]
    
        // console.log(collection)
        const [columns_on_desktop , setColumns_on_desktop] = useState(12 / collection.columns_on_desktop.length)
        // console.log(Array.from({ length: collection.columns_on_desktop_count }, (_, index) => index + 1))
    
    useEffect(()=>{
        // columns_on_desktop
        // console.log(collection)
        setNumbers(Array.from({ length: collection.columns_on_desktop_count }, (_, index) => index + 1))
        // console.log(12 / )
        setColumns_on_desktop(12 / collection.columns_on_desktop_count)
    },[collection.columns_on_desktop_count])
  return (
    <Box
    sx={{
        ...(collection.Top_Padding && { paddingTop: `${collection.Top_Padding}px` }),
        ...(collection.Bottom_Padding && { paddingBottom: `${collection.Bottom_Padding}px` })
    }}
    >
        {
            collection && (
                <>
                    <Box
                 sx={{
                    ...(collection.Bottom_Padding && { paddingBottom: `${collection.padding_bottom_heading}px` })
                }}  
                
                    >
                       
                        <Typography variant= {
                            collection.heading_size == 1 && ( 'h4' ) ||
                            collection.heading_size == 2 && ( 'h3' ) ||
                            collection.heading_size == 3 && ( 'h2' ) ||
                            collection.heading_size == 4 && ( 'h1' )

                        }>
                            {collection.heading} { collection.heading_Size}
                        </Typography>
                    </Box>
                    <Box
                   
                    >
                        <Grid container >
                            {
                                numbers.map((item , ind)=>
                                    <Grid key={ind} lg={columns_on_desktop} md={columns_on_desktop}
                                    sx={{
                                        padding: "5px"
                                    }}
                                    >
                                        <Box
                                        component='img' 
                                        src="https://thumbs.dreamstime.com/b/man-gas-mask-stand…eking-around-corner-good-book-cover-285807140.jpg"
                                        sx={{
                                            width: '100%'
                                        }}
                                        >
                                        </Box>
                                        hello
                                        {columns_on_desktop}
                                    </Grid>
                                )
                            }
                        </Grid>
                    </Box>
                </>
            )
        }


    </Box>
  )
}

Collection_List.propTypes = {}

export default Collection_List