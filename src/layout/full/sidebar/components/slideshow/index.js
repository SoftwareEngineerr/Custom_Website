import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { Main } from '../../../../../constant';
import { useDispatch } from 'react-redux';
import CustomMenu from '../../../../../components/selectitem';

const SlideShow = (props) => {
    const [selectvalue, setSelectvalue] = useState('');
    const [data , setData ] = useState(Main().header.menu)
    const [inputValues, setInputValues] = useState(Main().header);
    const dispatch = useDispatch()

    const handleChange = (event) => {
      setSelectvalue(event.target.value);
      console.log([event.target.value , props.name])
    //   props.GetSelectedValue([event.target.value , props.name]);
    };

    const ChangeOnSelect = (getparam) => {
      console.log(getparam[1])
      setInputValues((oldData)=> ({
          ...oldData,
          [getparam[1]]:getparam[0]
      })
      )
      if(getparam[1] == 'Logo'){
        //  dispatch(LogoPosition(props.id,getparam[0]))
      }
  }
  return (
    <div>
        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-SlideShow"
        >
          <Typography component="span">Slide Show</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container>
                <CustomMenu data={data} ChangeOnSelect={ChangeOnSelect} />

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

SlideShow.propTypes = {}

export default SlideShow