import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CollapsibleContent from '../collape_component';

/**
 * Extracts structured data for the CollapsibleContent component
 * based on a dynamic number of content items.
 */
const getStructuredContent = (sectionData = {}, count = 0) => {
  if (!count || typeof count !== 'number') return [];

  return Array.from({ length: count }, (_, index) => {
    const i = index + 1;
    return {
      heading: sectionData[`heading${i}`] || '',
      Description: sectionData[`description${i}`] || ''
    };
  });
};

const CollapibleContent = ({ getid }) => {
  const sectionData = useSelector((state) => state.Section[getid]);

  const content = useMemo(() => {
    return getStructuredContent(sectionData, sectionData?.number_of_content);
  }, [
    sectionData?.number_of_content,
    sectionData?.heading1,
    sectionData?.heading2,
    sectionData?.heading3,
    sectionData?.heading4,
    sectionData?.heading5,
    sectionData?.heading6,
    sectionData?.description1,
    sectionData?.description2,
    sectionData?.description3,
    sectionData?.description4,
    sectionData?.description5,
    sectionData?.description6,
  ]);

  if (!content.length) return null;

  return <CollapsibleContent data={content} />;
};

CollapibleContent.propTypes = {
  getid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default memo(CollapibleContent);
