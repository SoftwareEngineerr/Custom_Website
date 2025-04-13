import { Box, Grid, Slider, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { DynamicState, HeadingSize } from "../../redux/actions/addsection/addsection"
import { Selector } from "../select"
import MainInput from "./components/input"
import { Input } from "./components/input/input"
import { SliderComponent } from "./components/slider/slider"
import NavTabs from "./components/tabs"
import Fileimage from "./components/image/Fileimage"

const CustomMenu = (props) => {
    const dispatch = useDispatch()
    const sliderdata = (v, n) => {
        // alert(v)
        console.log(props.id,v , n)
        dispatch(DynamicState(props.id,v.target.value , v.target.name))
      }
     

      
return props.data.map((item, ind) => (
    
    (item.feildtype == 'menuItemSelect' && 
    (
        <Grid item lg={item.lg} key={ind} md={item.md} sm={item.sm} xs={item.xs}>
            <Selector
            items={item.selectitems} 
            GetSelectedValue={(e)=>props.ChangeOnSelect(e)} 
            name={item.name}
            id={props.id}
            />
        </Grid>
    )
    )
    ||
    (item.feildtype == 'label' && (
        <Grid item lg={item.lg} md={item.md} sm={item.sm} key={ind} xs={item.xs}>
         <Box>
            <Typography variant="p"
             component="label" htmlFor='password' mb="5px" >
                {item.data}
            </Typography>
            </Box>
        </Grid>
    ))
    ||
    (item.feildtype == 'space' &&
    (
        <Grid item lg={12} key={ind} sm={12} md={12} xs={12}>
            <Box sx={{width:"100%", height:"10px"}}></Box>
        </Grid>
    )
    ||
    (item.feildtype == 'line' &&
    (
        <Grid item lg={12} key={ind} sm={12} md={12} xs={12}>
            <Box sx={{width:"100%", height:"1px", background:"black",margin:"10px 0px"}}></Box>
        </Grid>
    )
    ||
    (item.feildtype == 'heading' &&
    (
        <Grid item lg={12} key={ind} sm={12} md={12} xs={12}>
            <Box sx={{width:"100%", height:"1px",margin:"10px 0px 40px 0px"}}>
                <Typography variant="h6">
                    {item.data}
                </Typography>
            </Box>
        </Grid>
    ))
    ||
    (item.feildtype == 'slider' &&
    (
    <Grid item lg={item.lg} md={item.md} sm={item.sm} key={ind} xs={item.xs}>
      <SliderComponent
        name={item.name} 
        id={props.id} 
        // sliderdata={(v, n)=>props.sliderdata(v , n)} 
        step={item.step}
        max={item.max}
        min={item.min}
        />
    </Grid>
    ))
    ||
    (item.feildtype == 'text' &&
    (
    <Grid item lg={item.lg} md={item.md} sm={item.sm} key={ind} xs={item.xs}>
      <MainInput
        name={item.name} 
        id={props.id} 
        onChange={(e)=>sliderdata( e , e)} 
        // value={}
        />
    </Grid>
    ))
    ||
    (item.feildtype == 'tabs' &&
    <Grid item  lg={item.lg} md={item.md} sm={item.sm} key={ind} xs={item.xs}>
    <NavTabs items={item.items} name={item.name}
        key={ind}
        onChange={(e)=>sliderdata( e , e)} 
        id={props.id} 
    
    />

    
  </Grid>
    )
    ||
    (item.feildtype == 'image' &&
    <Grid item  lg={item.lg} md={item.md} sm={item.sm} key={ind} xs={item.xs}>
    <Fileimage items={item.items} name={item.name}
        key={ind}
        onChange={(e)=>sliderdata( e , e)} 
        id={props.id} 
    
    />

    
  </Grid>
    )

          
    )
    )
    )
    )
}

CustomMenu.propTypes = {}

export default CustomMenu