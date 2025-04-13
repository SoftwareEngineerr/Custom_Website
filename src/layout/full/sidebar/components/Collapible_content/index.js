import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Main } from '../../../../../constant';
import CustomMenu from '../../../../../components/selectitem';
import { useSelector } from 'react-redux';

const Collapible_content = (props) => {
        const [getdata , setGetdata ] = useState(Main().Collapible_content.menu)
        const obj = useSelector((state) => state.Section[props.id]);
        
        const [data , setData ] = useState()
        useEffect(()=>{
            // alert(obj.number_of_content)
            const customdata = []
            for(var x=1; x<=obj.number_of_content; x++){
                let y = x;
                customdata.push(
                    {feildtype:"line"},
                {feildtype:"heading" , data:`Collap Content ${y}`},

                {data:'Heading', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
                {data: 'Input', type: 'text', required: true, name: `heading${y}`, feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
                { feildtype:'space'},

                {data:'Description', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
                {data: 'Input', type: 'text', required: true, name: `description${y}`, feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
                { feildtype:'space'},
                
                )
            }
            const staticdata = [...getdata , ...customdata]
            setData(staticdata)
        },[obj.number_of_content])


      return (
        <Box sx={{
            padding : `${obj.top_Padding ? obj.top_Padding : 0}px ${obj.bottom_Padding ? obj.bottom_Padding : 0}px`
        }}>
            <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-ImageBanner"
            >
              <Typography component="span">Multicolumn</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container>
                    {
                        data && (
                            <CustomMenu id={props.id}  data={data} />
                        )
                    }
                </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      )
}

Collapible_content.propTypes = {}

export default Collapible_content