import { Box, Slider } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { DynamicState } from "../../../../redux/actions/addsection/addsection"

export const SliderComponent = (props) => {
    const data = useSelector((state)=>state.Section[props.id])
    const dispatch = useDispatch()

    const [sliderdata , setSliderdata] = useState(data ? data[props.name] : null)
    function valuetext(value) {
        setSliderdata(value.target.value)
        // props.sliderdata(value)

    dispatch(DynamicState(props.id,value.target.value , value.target.name))


      }



    return(
      <Box display="flex">
      <Slider
          aria-label="Small steps"
          defaultValue={2}
        //   getAriaValueText={valuetext}
        //   getAriaValueText={(e)=>setSliderdata(e)}
            value={sliderdata}  // Bind slider value to local state
            onChange={valuetext}  // Handle value change
            name={props.name}
          step={props.step}
          marks
          min={props.min}
          max={props.max}
          valueLabelDisplay="auto"
      />
      <Box
          sx={{
              width: '28px',
              background: '#f2f2f2',
              padding: '0',
              textAlign: 'center',
              marginLeft: '9px',
              borderRadius: '5px',
              boxShadow: '0 0 10px 0 #eeeeee',
          }}
      >
          {sliderdata } 
      </Box>
      </Box>
    )
}