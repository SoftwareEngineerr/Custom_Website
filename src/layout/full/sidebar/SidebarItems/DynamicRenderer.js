import React, { lazy, Suspense } from 'react';

// Map of components
const components = {
  Header: lazy(() => import('../components/header')),
  Plp: lazy(() => import('../components/Plp/Plp')),
  Slideshow: lazy(() => import('../components/slideshow')),
  Collection_List: lazy(() => import('../components/collectionlist')),
  College: lazy(() => import('../components/College')),
  FeaturedCollection: lazy(() => import('../components/featuredcollection')),
  Footer: lazy(() => import('../components/footer')),
  RichText: lazy(() => import('../components/richtext')),
  ImageWithText: lazy(() => import('../components/imageWithText')),
  Image_Banner: lazy(() => import('../components/imageBanner')),
  Contact: lazy(() => import('../components/contact')),
  Email_signup: lazy(() => import('../components/emailsignup')),
  Multirow: lazy(() => import('../components/multirow')),
  CustomAppMulticolumn: lazy(() => import('../components/customMulticolumn')),
  Collapible_content: lazy(() => import('../components/Collapible_content')),
};

const DynamicRenderer = ({ item, index }) => {

    if (!item || !item.category) return null;
    const Component = components[item.category];
    if (!Component) return null;


  return (
    <Suspense fallback={<div>Loading {item.category}...</div>}>
      <Component id={index} />
    </Suspense>
  );
};

export default DynamicRenderer;
