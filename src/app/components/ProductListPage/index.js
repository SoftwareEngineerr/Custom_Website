import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';

const productData = [
  {
    heading: 'This is Best Shirt',
    image:
      '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328',
    link: '/',
    price: '19.99 USD',
  },
  {
    heading: 'This is Best Shirt',
    image:
      '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328',
    link: '/',
    price: '19.99 USD',
  },
  {
    heading: 'This is Best Shirt',
    image:
      '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328',
    link: '/',
    price: '19.99 USD',
  },
  {
    heading: 'This is Best Shirt',
    image:
      '//thecutprice.com/cdn/shop/files/1_0683e858-e435-4f9e-ba27-e9e18e73bb25.jpg?v=1743010328',
    link: '/',
    price: '19.99 USD',
  },
  // Duplicate or more objects here...
];

const ProductCard = memo(({ heading, image, price }) => (
  <Box>
    <Box
      component="img"
      width="100%"
      src={image}
      srcSet={`
        ${image}?width=165 165w,
        ${image}?width=360 360w,
        ${image}?width=533 533w,
        ${image}?width=720 720w,
        ${image}?width=940 940w,
        ${image}?width=1066 1066w,
        ${image} 2048w
      `}
      sizes="(max-width: 600px) 100vw, 25vw"
      alt={heading}
      loading="lazy"
      sx={{
        borderRadius: 1,
        objectFit: 'cover',
      }}
    />
    <Typography variant="body1" mt={1}>
      {heading}
    </Typography>
    <Typography variant="h6" color="primary">
      {price}
    </Typography>
  </Box>
));

ProductCard.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

const ProductListPage = () => {
  return (
    <Grid container spacing={2}>
      {productData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ProductCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ProductListPage);
