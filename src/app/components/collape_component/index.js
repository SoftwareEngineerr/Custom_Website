import React, { memo, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const Multirow = (props) => {
      return (
        <div>
            {
                props.data.map((item , ind)=>
                    <Box mt={1}>
                        <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-ImageBanner"
                        >
                        <Typography component="span">
                            {item.heading}
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.Description}
                        </AccordionDetails>
                    </Accordion>
                    </Box>
                )
            }
        </div>
      )
}

Multirow.propTypes = {
    data : PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string,
            Description: PropTypes.string 
        })
    ).isRequired
}

export default memo(Multirow)