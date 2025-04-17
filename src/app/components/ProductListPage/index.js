import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'

const ProductListPage = props => {
    const data = [
        {
            heading: 'This is Best Shirt' ,
            image: '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=165 165w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=360 360w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=533 533w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=720 720w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=940 940w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=1066 1066w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328 2048w',
            link:'/' ,
            price:'19.99 usd',
        },
        {
            heading: 'This is Best Shirt' ,
            image: '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=165 165w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=360 360w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=533 533w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=720 720w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=940 940w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=1066 1066w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328 2048w',
            link:'/' ,
            price:'19.99 usd',
        },
        {
            heading: 'This is Best Shirt' ,
            image: '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=165 165w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=360 360w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=533 533w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=720 720w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=940 940w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=1066 1066w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328 2048w',
            link:'/' ,
            price:'19.99 usd',
        },
        {
            heading: 'This is Best Shirt' ,
            image: '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=165 165w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=360 360w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=533 533w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=720 720w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=940 940w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328&width=1066 1066w,//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328 2048w',
            link:'/' ,
            price:'19.99 usd',
        },
    ]
  return (
    <>
        <Grid container>
            {
            data.map((item,ind)=>(
            <Grid item lg={3} sm={3} md={4} key={ind} p={1}>
            <Box component='img' width="100%" src={item.image} ></Box>
            <Typography variant='p'>
                {item.heading}
            </Typography>
            <Typography variant='h6'>
                {item.price}
            </Typography>
            </Grid>
            ))
            }
        </Grid>
    </>
  )
}

ProductListPage.propTypes = {
    
}

export default memo(ProductListPage)
