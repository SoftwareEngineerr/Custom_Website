import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Main } from '../../../../../constant';
import CustomMenu from '../../../../../components/selectitem';

const College = (props) => {
        const [data , setData ] = useState(Main().College.menu)
      return (
        <div>
            <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-ImageBanner"
            >
              <Typography component="span">College</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container>
                  <CustomMenu id={props.id}  data={data} />
                </Grid>
            </AccordionDetails>
          </Accordion>
        </div>
      )
}

College.propTypes = {}

export default College