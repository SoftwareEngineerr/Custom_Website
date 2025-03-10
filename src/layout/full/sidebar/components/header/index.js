import React , { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import CustomMenu from '../../../../../components/selectitem';
import { Main } from '../../../../../constant';
import { useDispatch } from 'react-redux';
import { LogoPosition } from '../../../../../redux/actions/addsection/addsection';
// import { LogoPosition } from '../../../../../redux/actions/theme/theme';

const Header = (props) => {
    const [selectvalue, setSelectvalue] = useState('');
    const [ menuselector , setMenuselector ] = useState('')
    const [data , setData ] = useState(Main().header.menu)
    const [inputValues, setInputValues] = useState(Main().header);
    const dispatch = useDispatch()

    const handleChange = (event) => {
      setSelectvalue(event.target.value);
      console.log([event.target.value , props.name])
    //   props.GetSelectedValue([event.target.value , props.name]);
    };
    const MenuChange = (event) => {
      setMenuselector(event.target.value);
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
         dispatch(LogoPosition(props.id,getparam[0]))
      }
  }
  return (
    <div>
        <Accordion 
        // defaultExpanded
        >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container>
              <CustomMenu id={props.id} data={data} ChangeOnSelect={ChangeOnSelect} />
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

Header.propTypes = {}

export default Header