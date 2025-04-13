import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Icon3dRotate, IconBorderInner, IconMessage, IconMessageCircle, IconPageBreak, IconPlaylistAdd } from '@tabler/icons'
import { useDispatch } from 'react-redux'
import { AddSectionAction } from '../../../../redux/actions/addsection/addsection'

const  AddSection = (props) => {
    const dispatch = useDispatch()
    const arr = [
        {data:"Header", icon:<IconBorderInner />},
        {data:"Featured collection", icon:<IconBorderInner />},
        {data:"Featured product", icon:""},
        {data:"Collection List", icon:""},
        {data:"Rich Text", icon:""},
        {data:"Image with Text", icon:""},
        {data:"Image Banner", icon:""},
        {data:"Slide Show", icon:""},
        {data:"College", icon:""},
        {data:"Multicolumn", icon:""},
        {data:"Multirow", icon:""},
        {data:"Collapible content", icon:""},
        {data:"Email signup", icon:<IconMessageCircle />},
        {data:"Contact", icon:""},
        {data:"Video", icon:""},
        {data:"Blog post", icon:""},
        {data:"Custom Liquid", icon:""},
        {data:"Page", icon:<IconPageBreak />}
    ]

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      
    //   let randomInRange = getRandomNumber(1, 100);

    const myfunc = (getparam) => {
        let data = {}
        if(getparam == "Header"){
            data = {
                category:"header",
                data: "item",
                Logo: 1,
                // 1 Top Left
                // 2 Top Center
                // 3 Middle Left
                // 4 Middle Center
                background: "white",
                color: "blue",
            }
        }
        if(getparam == "Slide Show"){
            data = {
                category:"slideshow",
                data: "item 1",
            }
        }
        if(getparam == "Featured collection"){
            data = {
                category:"Featured_collection",
                heading:"Featured Collection",
                bold:0,
                italic: 0,
                data: "item 1",
                heading_size: 0,
                padding_bottom_heading: 0,
                Top_Padding: 2,
                Bottom_Padding: 2,
                button: "off",
                mobile_Layout: 1,
                top_Padding: 0,
                bottom_Padding: 0,
                columns_on_desktop_count: 2,
                columns_on_desktop: [
                    {data: "wellcome" , image:"image"},
                    {data: "wellcome" , image:"image"},
                    // {data: "wellcome" , image:"image"}
                ]
            }
        }
        if(getparam == "Collection List"){
            data = {
                category:"Collection_List",
                heading:"Collection",
                bold:0,
                italic: 0,
                data: "item 1",
                heading_size: 0,
                padding_bottom_heading: 0,
                Top_Padding: 2,
                Bottom_Padding: 2,
                button: "off",
                mobile_Layout: 1,
                top_Padding: 0,
                bottom_Padding: 0,
                columns_on_desktop_count: 2,
                columns_on_desktop: [
                    {data: "wellcome" , image:"image"},
                    {data: "wellcome" , image:"image"},
                    // {data: "wellcome" , image:"image"}
                ]
            }
        }
        if(getparam == "Rich Text"){
            data = {
                category:"RichText",
                data: "item 1",
                desktop_Content_Position: 0,
                content_Alignment: 0,
                top_Padding: 0,
                bottom_Padding: 0,
                heading: "Talk about your brand",
                heading_size: "1",
                description: "Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.",
                button: "button label",
                button_TL_Padding: 2,
                button_LR_Padding: 2

            }
        }
        if(getparam == "Image with Text"){
            data = {
                category:"Image_With_Text",
                desktop_image_height: 0,
                desktop_image_width: 0,
                desktop_image_placement: 0,
                desktop_content_position: 0,
                desktop_content_alignment: 0,
                content_layout: 0,
                heading: 'Image with text',
                description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                button: 'Button Label',
                button_TL_Padding: 2,
                button_LR_Padding: 2,
                top_Padding: 0,
                bottom_Padding: 0,

            }
        }
        if(getparam == "Image Banner"){
            data = {
                category:"Image_Banner",
                Image: "https://assets.weforum.org/article/image/YlqprZMVrDcJUXbdjc5rAP6uqoO_YT1xZNby3HjH_KM.jpg",
                Image_overlay_opacity: 2,
                Banner_height: 0,
                Desktop_content_position: 5,
                desktop_content_alignment: 0,
                heading: 'Image with text',
                description: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                first_button: 'Button Label',
                second_button: 'Button Label',
                button_TL_Padding: 2,
                button_LR_Padding: 2,
                top_Padding: 0,
                bottom_Padding: 0,

            }
        }
        if(getparam == "Contact"){
            data = {
                category:"Contact",
                heading_Size: 2,
                heading: 'Contact Form',
                first_button: 'Button Label',
                button_TL_Padding: 2,
                button_LR_Padding: 2,
                top_Padding: 0,
                bottom_Padding: 0,

            }
        }
        if(getparam == "Email signup"){
            data = {
                category:"Email_signup",
                heading_Size: 2,
                heading: 'Subscribe to our emails',
                description: 'Be the first to know about new collections and exclusive offers.',
                top_Padding: 0,
                bottom_Padding: 0,

            }
        }
        if(getparam == "College"){
            data = {
                category:"College",
                image: "",
                product: '',
                collection: "",
                heading: 'Multimedia collage',
                heading_Size: 2,
                Desktop_Layout: 0,
                top_Padding: 0,
                bottom_Padding: 0,

            }
        }
        if(getparam == "Multirow"){
            data = {
                category:"Multirow",
                imageheight: 3,
                imagewidth: 2,
                heading_Size: 2,
                textstyle: 1,
                buttonstyle: 1,
                button_TL_Padding: 2,
                button_LR_Padding: 2,

                desktop_content_position: 1,
                content_Alignment: 0,
                desktop_image_placement: 1,

                firstimage: "",
                firstcaption: 'Caption.',
                firstheading: 'Row',
                firstdescription: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                firstbutton: 'Button label',
                firstlink: '',

                secondimage: "",
                secondcaption: 'Caption.',
                secondheading: 'Row',
                seconddescription: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                secondbutton: 'Button label',
                secondlink: '',

                thirdimage: "",
                thirdcaption: 'Caption.',
                thirdheading: 'Row',
                thirddescription: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                thirdbutton: 'Button label',
                thirdlink: '',

                top_Padding: 0,
                bottom_Padding: 0,

            }
        }
        if(getparam == "Multicolumn"){
            data = {
                category:"Multicolumn",
                heading: 'MutliColumns',
                heading_Size: 2,
                imagewidth: 2,
                number_of_columns: 2,
                columns_Alignment: 0,
                button: 'Button label',
                buttonlink: '',
                button_TL_Padding: 2,
                button_LR_Padding: 2,


                firstimage: "",
                firstheading: 'Row',
                firstdescription: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                

                secondimage: "",
                secondheading: 'Row',
                seconddescription: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                

                thirdimage: "",
                thirdheading: 'Row',
                thirddescription: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                

                top_Padding: 0,
                bottom_Padding: 0,

            }
        }
        if(getparam == "Collapible content"){
            data = {
                category:"Collapible_content",
                heading: 'Collapible Content',
                heading_Size: 2,
                heading_Alignment: 2,
                desktop_Content_Position: 1,
                number_of_content: 2,
                top_Padding: 0,
                bottom_Padding: 0,


                heading1: 'Content',
                description1: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                
                heading2: 'Content',
                description2: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                
                heading3: 'Content',
                description3: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                
                heading4: 'Content',
                description4: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                
                heading5: 'Content',
                description5: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                
                heading6: 'Content',
                description6: 'Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.',
                
                

            }   
        }

        dispatch(AddSectionAction(data))

    }
  return (
    <div>
        <Grid container sx={{padding: 0}}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                {
                    arr.map((item , ind)=>
                        <Button key={ind} display="flex" alignItems="center" justifyContent="space-between" sx={{
                            transition: ".3s",
                            width: "100%",
                            "&:hover": {
                                backgroundColor: "#e3e3e3", // Change background on hover
                                cursor: "pointer", // Show pointer cursor
                                transform: "scale(1.05)", // Slight zoom effect
                            },
                            "&:hover #add": {
                                opacity: "1"
                            },
                        }}
                        onClick={()=>myfunc(item.data)}
                        >
                            <Box sx={{
                                padding: "0 10px",
                                paddingTop: "5px"
                                }}>

                                {item.icon}
                            </Box>
                            {item.data}
                            <Box id="add" sx={{
                            transition: ".3s",
                            opacity: 0,
                            marginTop: "5px",
                            padding: '0 6px',
                        }}>
                                <IconBorderInner />
                            </Box>
                        </Button>

                    )
                }
            </Grid>
        </Grid>
    </div>
  )
}

AddSection.propTypes = {}

export default AddSection