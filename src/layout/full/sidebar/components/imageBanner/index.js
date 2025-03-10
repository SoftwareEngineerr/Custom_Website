import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Main } from '../../../../../constant';
import { useDispatch } from 'react-redux';
import CustomMenu from '../../../../../components/selectitem';
import { DynamicState, HeadingSize } from '../../../../../redux/actions/addsection/addsection';

const ImageBanner = (props) => {
    const [data , setData ] = useState(Main().ImageBanner.menu)
  return (
    <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-ImageBanner"
        >
          <Typography component="span">Image Banner</Typography>
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

ImageBanner.propTypes = {}

export default ImageBanner
