import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import CustomButton from '../button';

const Multirow = props => {
    const obj = useSelector((state) => state.Section[props.getid]);

    const [data , setData ] = useState([
        {
            Caption: obj.firstcaption,
            Heading : obj.firstheading,
            Description: obj.firstdescription,
            Button: obj.firstbutton,
            Link: obj.firstlink,
            Images: obj.firstimage,
        },
        {
            Caption: obj.secondcaption,
            Heading : obj.secondheading,
            Description: obj.seconddescription,
            Button: obj.secondbutton,
            Link: obj.secondlink,
            Images: obj.secondimage,
        },
        {
            Caption: obj.thirdcaption,
            Heading : obj.thirdheading,
            Description: obj.thirddescription,
            Button: obj.thirdbutton,
            Link: obj.thirdlink,
            Images: obj.thirdimage,
        },
    ])

    const [getheight, setGetheight] = useState(
        obj.imageheight === 1 ? '100%' :
        obj.imageheight === 2 ? '100%' :
        obj.imageheight === 3 ? '400px' :
        obj.imageheight === 4 ? '600px' :
        null  
    );

    const [getwidth, setGetwidth] = useState(
        obj.imagewidth === 1 ? 8 : 
        obj.imagewidth === 2 ? 6 :
        obj.imagewidth === 3 ? 4 : 
        null  
    );

    // Don't set secondwidth as initial state, calculate it dynamically in the render/JSX.
    const  [secondwidth , setSecondwidth ] = useState(
        obj.imagewidth === 1 ? 4 : 
        obj.imagewidth === 2 ? 6 :
        obj.imagewidth === 3 ? 8 : 
        null  
    );

    useEffect(() => {
        setGetheight(
            obj.imageheight === 1 ? '100%' :
            obj.imageheight === 2 ? '100%' :
            obj.imageheight === 3 ? '400px' :
            obj.imageheight === 4 ? '600px' :
            null  
        );

        setGetwidth(
            obj.imagewidth === 1 ? 8 : 
            obj.imagewidth === 2 ? 6 :
            obj.imagewidth === 3 ? 4 : 
            null  
        );

        setSecondwidth(
            obj.imagewidth === 1 ? 4 : 
            obj.imagewidth === 2 ? 6 :
            obj.imagewidth === 3 ? 8 : 
            null  
        );


        setData([
            {
                Caption: obj.firstcaption,
                Heading : obj.firstheading,
                Description: obj.firstdescription,
                Button: obj.firstbutton,
                Link: obj.firstlink,
                Images: obj.firstimage,
            },
            {
                Caption: obj.secondcaption,
                Heading : obj.secondheading,
                Description: obj.seconddescription,
                Button: obj.secondbutton,
                Link: obj.secondlink,
                Images: obj.secondimage,
            },
            {
                Caption: obj.thirdcaption,
                Heading : obj.thirdheading,
                Description: obj.thirddescription,
                Button: obj.thirdbutton,
                Link: obj.thirdlink,
                Images: obj.thirdimage,
            },
        ])
        // alert(getwidth)

    }, [obj.imagewidth ,
        obj.imageheight ,
        obj.desktop_content_position , 
        

        obj.firstcaption,
        obj.firstheading,
        obj.firstdescription,
        obj.firstbutton,
        obj.firstlink,
        obj.firstimage,

        obj.secondcaption,
        obj.secondheading,
        obj.seconddescription,
        obj.secondbutton,
        obj.secondlink,
        obj.secondimage,


        obj.thirdcaption,
        obj.thirdheading,
        obj.thirddescription,
        obj.thirdbutton,
        obj.thirdlink,
        obj.thirdimage,
    
    ]); // Dependency on obj to reactively update the state when obj changes

    return (
        <div>
            <Grid container 
             sx={{
                padding : `${obj.top_Padding ? obj.top_Padding : 0}px ${obj.bottom_Padding ? obj.bottom_Padding : 0}px`
            }}
            >
                {
                    data.map((item , ind)=>
                        <Grid item key={ind} lg={12} md={12} sm={12} xs={12}>
                              
                            <Grid container
                            sx={{
                                ...(
                                     obj.desktop_image_placement === 1
                                    ? { flexDirection: ind % 2 === 0 ? 'row' : 'row-reverse' }
                                    :
                                    obj.desktop_image_placement === 2
                                    ? { flexDirection: ind % 2 === 0 ? 'row-reverse' : 'row' }
                                    :
                                    obj.desktop_image_placement === 3
                                    ? { flexDirection: 'row' }
                                    :
                                    obj.desktop_image_placement === 4
                                    ? { flexDirection: 'row-reverse' }
                                    :
                                    {}
                                )
                            }}
                            
                            >

                            {
                                getwidth && (
                                    <Grid item lg={getwidth} md={getwidth} sm={12} xs={12} p={1}>
                                        {console.log(item)}
                                        {
                                            item.Images == undefined &&  item.Images == '' ?
                                            <svg class="placeholder-svg" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 980 700" fill="none" xmlns="http://www.w3.org/2000/svg"><clipPath id="clip0_663_1534"><path d="M0 0h980v700H0z"></path></clipPath><g clip-path="url(#clip0_663_1534)"><path d="M0 0h980v700H0z" fill="#e5e6e6"></path><path d="M735.8 366.9c-1.5-1.5-4.7-4.5-4.7-4.5l-.5-.1L498.7 507c-8.3 5.2-18.9 5-27-.3-1.1-.7-2.2-1.6-3.1-2.5-26-24.5-52-49-77.9-73.5L256.4 303.8c-.5-.5-1-.9-1.5-1.4-1.9 1.8-3.8 3.6-5.6 5.3-7.3 6.9-7.3 18.5 0 25.4 71.8 67.8 143.7 135.6 215.6 203.5 8.3 7.8 20.8 9.1 30.4 3l53.3-33.3 37.3-23.3 47.6-29.8 46.9-29.3c17.8-11.1 35.5-22.2 53.2-33.3 8.4-5.3 9.5-17 2.2-23.7z" fill="#187f80"></path><path d="M727.5 394.7h-.4c-15.5 9.7-31.1 19.5-46.7 29.2l-46.9 29.3-47.6 29.8-37.3 23.3-53.3 33.3c-9.6 6.1-22.1 4.8-30.4-3-71.2-67.3-142.4-134.4-213.6-201.6h-.1c-1.9 1.8-3.7 3.5-5.5 5.2-7.3 6.9-7.3 18.5 0 25.4l215.6 203.5c8.3 7.8 20.8 9.1 30.4 3l53.3-33.3 37.3-23.3 47.7-29.8 46.9-29.3c17.8-11.1 35.6-22.3 53.3-33.4 8.4-5.2 9.5-16.9 2.3-23.7z" fill="#1d5d67"></path><path d="M739.8 334.8c-72.4-68.4-144.7-136.9-217.1-205.4-7.1-6.7-17.4-8.7-26.4-5.1l-40.8 16.2-26.9 12 7.7 7.3c30.4 28.7 26.2 69.9-9.4 92.1s-88.9 16.9-119.3-11.8l-7.7-7.3-46.8 42.5c-7.3 6.9-7.2 18.5 0 25.4L468.3 504c8.3 7.8 20.8 9 30.4 3l238.5-148.8c8.5-5 9.7-16.7 2.6-23.4z" fill="#59b1ab"></path><path d="M418.3 159c-2.6 1.6-4.8 3.5-6.5 5.7l-7.3 9.2c-2.3 2.9-4.9 5.7-7.6 8.4-1.3 1.3-2.6 2.5-4 3.7l21 19.8c1.1 1.1 1 2.6-.3 3.4L375.4 233c-1.3.8-3.3.6-4.4-.4l-21-19.8c-1.8.8-3.7 1.5-5.5 2.2-4 1.5-8 2.9-12.2 4l-13.2 3.6c-3.1.9-6 2.1-8.6 3.7l-10.4 6.5 7.7 7.3c30.4 28.7 83.8 34 119.3 11.8s39.7-63.4 9.4-92.2l-7.7-7.3z" fill="#187f80"></path><path d="M371 232.6c1.1 1.1 3.1 1.3 4.4.4l38.1-23.8c1.3-.8 1.5-2.3.4-3.4l-21-19.8c-4.3 3.8-9.2 7.5-14.4 10.7l-12 7.5c-5.1 3.2-10.8 6.1-16.6 8.6z" fill="#fff"></path><path d="m630.6 308.4-12.8 18.2c-3.7 5.2-9.8 9-17.2 10.7l-25.9 5.8c-7.5 1.7-15.9-.4-21-5.2l-55.8-53c-2.6-2.5-2.2-6 .9-7.9l63.4-39.4c3.1-1.9 7.7-1.5 10.3 1l55.8 53c5.2 4.8 6.1 11.4 2.3 16.8z" fill="#3a9c97"></path><path d="m562.3 237.5-63.4 39.4c-3.1 1.9-3.5 5.5-.9 7.9l14.1 13.4 74.6-46.3-14.1-13.4c-2.6-2.5-7.2-2.9-10.3-1z" fill="#187f80"></path><path d="M0 298.1V700h424.3z" fill="#d2d6d3"></path><path d="M478.4 576h110.7c9.4 0 18.7-2.7 26.6-7.7L837.3 429c13.9-8.7 15.7-28.2 3.8-39.4l-207.8-195c-7.1-6.6-17.4-8.6-26.4-5l-14.4 5.8L740 334.8c7.2 6.8 6 18.5-2.5 23.7l-6.4 3.9 5 4.5c7.4 6.7 6.3 18.6-2.2 23.9l-6.4 3.9 5.2 4.9c7.1 6.8 6 18.4-2.3 23.6l-238.6 149c-4.1 2.5-8.7 3.8-13.4 3.8z" fill="#901941" opacity=".03"></path><path d="M431.7 145c-3.7 1.7-4.6 6.6-1.6 9.4l1.4 1.4c30.4 28.7 26.2 70-9.4 92.2s-88.9 16.9-119.3-11.8l-3.9-3.7c-2.1-2-5.4-2.1-7.7-.2l-12 10.3c-2.6 2.2-2.7 6.2-.2 8.5 41.6 39.3 114.8 46.5 163.5 16.1s54.4-86.9 12.8-126.3l-1.9-1.8c-1.7-1.6-4.2-2-6.3-1.1z" fill="#3f9e98"></path><path d="m701.7 360.5-232 144.7c8.2 6.8 20 7.7 29.2 2l238.5-148.8c1.6-1 2.9-2.2 4-3.6 4.2-5.5 4.2-13.3-.4-18.8l-1.2-1.2c-.4-.4-145.7-137.8-217.1-205.4-6.8-6.4-16.6-8.5-25.4-5.4l208.3 197.1c12 11.3 10 30.7-3.9 39.4z" fill="#78c2bd"></path></g></svg>
                                            :
                                            <>
                                            <Box component='img' width="100%" src={item.Images} ></Box>
                                                
                                            </>
                                        }
                                    </Grid>
                                )
                            }
                            {
                                secondwidth && (
                                    <Grid item lg={secondwidth} md={secondwidth} sm={6} xs={6} p={1} display='flex' flexDirection='column'
                                    sx={{
                                        justifyContent: 
                                        obj.desktop_content_position == 0 ? 'flex-start' :
                                        obj.desktop_content_position == 1 ? 'center' :
                                        obj.desktop_content_position == 2 ? 'flex-end' :
                                        null,
                                        alignItems: 
                                        obj.content_Alignment == 0 ? 'flex-start' :
                                        obj.content_Alignment == 1 ? 'center' :
                                        obj.content_Alignment == 2 ? 'flex-end' :
                                        null,
                                        textAlign: 
                                        obj.content_Alignment == 0 ? 'left' :
                                        obj.content_Alignment == 1 ? 'center' :
                                        obj.content_Alignment == 2 ? 'right' :
                                        null,
                                    }}
                                    >
                                        <Typography variant='small'>
                                            {item.Caption}
                                        </Typography>
                                        <Typography variant={
                                            obj.heading_Size == '1' ? 'h2' : obj.heading_Size == '2' ? 'h3' : obj.heading_Size == '3' ? 'h4' : null
                                        } mt={1}>
                                            {item.Heading}
                                        </Typography>
                                        <br />
                                        <Typography variant='p' sx={{
                                                fontSize: `${obj.textstyle == 1 ? '14' : '16'}px`,
                                            }}>
                                            {item.Description}
                                        </Typography>
                                        <br />
                                        <CustomButton data={item.Button}
                                         getstyle={{
                                            padding: `
                                                ${obj.button_TL_Padding}px ${obj.button_LR_Padding}px
                                                `,                   
                                        }}
                                        />
                                    </Grid>
                                )
                            }
                            </Grid>
                              
                        </Grid>
                    )
                }
            </Grid>
        </div>
    );
}

Multirow.propTypes = {
      getid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default memo(Multirow);
