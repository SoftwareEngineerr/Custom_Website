import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicState, HeadingSize } from '../../redux/actions/addsection/addsection';

export const Selector = (props)=> {
  // const data = useSelector((state)=>state.Section[props.id])
  const getid = props.id;
  // alert(getid)
    const data = useSelector((state)=>state.Section[props.id])
  const [selectvalue, setSelectvalue] = React.useState(data != undefined ? data[props.name] : null);
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSelectvalue(event.target.value);
    // console.log([event.target.value , props.name])
      // setInputValues((oldData)=> ({
      //     ...oldData,
      //     [getparam[1]]:getparam[0]
      // })
      // )
      if(props.name == 'heading_size'){
         dispatch(HeadingSize(props.id,event.target.value))
      }
      else{
        console.log(props.id,event.target.value , props.name)
        dispatch(DynamicState(props.id,event.target.value , props.name))

      }

  
    // props.GetSelectedValue([event.target.value , props.name]);
  };
  React.useEffect(()=>{
    // console.log(data && data[props.name])
    setSelectvalue(data != undefined ? data[props.name] : null)
  },[data])

  React.useEffect(()=>{
    // console.log(data && data[props.name])
    setSelectvalue(data != undefined ? data[props.name] == 0 ? data[props.name]+1 : data[props.name] : null)
  },[])
  return (
    <Box 
    sx={props.style || {}}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectvalue}
          label="Age"
          onChange={handleChange}
          required={props.required == true ? true : false}
          sx={
            props.style && props.style
          }
        >
            {
                props.items &&(
                props.items.map((item , ind)=>
                <MenuItem key={ind} value={ind+1}>{item}</MenuItem>
                )
                )
            }
        </Select>
      </FormControl>
    </Box>
  );
}

