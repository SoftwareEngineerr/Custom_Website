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

const RichText = (props) => {
    const [selectvalue, setSelectvalue] = useState('');
    const [data , setData ] = useState(Main().RichText.menu)
    // alert(props.id)
    // const [inputValues, setInputValues] = useState(Main().RichText);
    const dispatch = useDispatch()



    const handleChange = (event) => {
      setSelectvalue(event.target.value);
      console.log([event.target.value , props.name])
    //   props.GetSelectedValue([event.target.value , props.name]);
    };

    const ChangeOnSelect = (getparam) => {
      console.log(getparam[1] , props.id,getparam[0])
      // setInputValues((oldData)=> ({
      //     ...oldData,
      //     [getparam[1]]:getparam[0]
      // })
      // )
      if(getparam[1] == 'heading_size'){
         dispatch(HeadingSize(props.id,getparam[0]))
      }
  }
  const sliderdata = (v, n) => {
    // alert(v)
    console.log(props.id,v , n)
    // alert(props.id)
    dispatch(DynamicState(props.id,v.target.value , v.target.name))
  }
  // DynamicState
  return (
    <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-RichText"
        >
          <Typography component="span">Rich Text</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container>
              <CustomMenu id={props.id} getValue={sliderdata} data={data} ChangeOnSelect={ChangeOnSelect}  
              sliderdata={sliderdata} 
              />
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

RichText.propTypes = {}

export default RichText