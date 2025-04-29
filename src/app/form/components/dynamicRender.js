import React, { lazy, memo, Suspense } from 'react';
import PropTypes from 'prop-types';

const allComponents = {
  Header: lazy(() => import('../../components/header')),
  Slideshow: lazy(() => import('../../components/slideshow')),
  Collection_List: lazy(() => import('../../components/collectionList')),
  FeaturedCollection: lazy(() => import('../../components/FeaturedCollection')),
  RichText: lazy(() => import('../../components/richtext')),
  ImageWithText: lazy(() => import('../../components/imageWithText')),
  Image_Banner: lazy(() => import('../../components/image_Banner')),
  Contact: lazy(() => import('../../components/Contact')),
  Email_signup: lazy(() => import('../../components/EmailSignup')),
  College: lazy(() => import('../../components/College')),
  Multirow: lazy(() => import('../../components/Multirow')),
  CustomAppMulticolumn: lazy(() => import('../../components/CustomAppMulticolumn')),
  Collapible_content: lazy(() => import('../../components/Collapible_content')),
};

const DynamicRender = (props) => {
  const Component = allComponents[props.data.category];

  if (!Component) return null;

  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
        <Component getid={props.id} />
        </Suspense>
    </div>
  );
};

DynamicRender.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
  }).isRequired,
  id: PropTypes.number,
};

export default memo(DynamicRender);
