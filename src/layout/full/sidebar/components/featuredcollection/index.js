import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';

const FeaturedCollection = (props) => {
    const [selectvalue, setSelectvalue] = React.useState('');

    const handleChange = (event) => {
      setSelectvalue(event.target.value);
      console.log([event.target.value , props.name])
    //   props.GetSelectedValue([event.target.value , props.name]);
    };
  return (
    <div>
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-FeaturedCollection"
        >
          <Typography component="span">Featured Collection</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container>
                <Grid item lg={6}  md={6} sm={6} xs={6}>
                    <Typography>
                        Desktop logo position
                    </Typography>
                </Grid>
                <Grid item lg={6}  md={6} sm={6} xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Logo</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectvalue}
                        label="Age"
                        onChange={handleChange}
                        // required={props.required == true ? true : false}
                        >
                                <MenuItem value="1">Top Left</MenuItem>
                                <MenuItem value="2">Top Center</MenuItem>
                                <MenuItem value="3">Middle Left</MenuItem>
                                <MenuItem value="4">Middle Center</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

FeaturedCollection.propTypes = {}

export default FeaturedCollection