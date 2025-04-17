import React from 'react';
import { Box } from '@mui/material';

const TabPanel = ({ children, value, index, ...other }) => {
  if (value !== index) return null;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      <Box sx={{ p: 3 }}>{children}</Box>
    </div>
  );
};

export default TabPanel;
