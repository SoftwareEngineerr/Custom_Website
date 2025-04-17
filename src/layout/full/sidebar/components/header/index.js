import React, { lazy, Suspense, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';

import { LogoPosition } from '../../../../../redux/actions/addsection/addsection';
import { Main } from '../../../../../constant';

// Lazy load CustomMenu component
const CustomMenu = lazy(() => import('../../../../../components/selectitem'));

const Header = ({ id, name }) => {
  const dispatch = useDispatch();

  // Use useMemo to cache the config
  const headerConfig = useMemo(() => Main().header, []);
  const [menuData] = useState(headerConfig.menu);
  const [inputValues, setInputValues] = useState(headerConfig);

  // Callback for dropdown value change
  const handleSelectChange = useCallback(
    ([value, key]) => {
      setInputValues((prev) => ({
        ...prev,
        [key]: value,
      }));

      if (key === 'Logo') {
        dispatch(LogoPosition(id, value));
      }
    },
    [dispatch, id]
  );

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="header-panel-content"
        id="header-panel-header"
      >
        <Typography component="span" variant="subtitle1">
          Header
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container>
          <Suspense fallback={<div>Loading menu...</div>}>
            <CustomMenu id={id} data={menuData} ChangeOnSelect={handleSelectChange} />
          </Suspense>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

Header.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
};

export default Header;
