import { useSelector } from "react-redux";
// import Showclasses from "../components/showclasses";
import { useState } from "react";

const remarks = [
    {name:'Excellent'},
    {name:'Very Good'},
    {name:'Good'},
    {name: 'Average'},
    {name:'Poover'}
];

export const Main = ()=> {
    // const imageUrl = useSelector((State)=>State.Api.Imagelink);
    //   const [classData , setClassData] = useState(useSelector((state) => state.Showclasses.classes));

    // debugger;
    return{
    header:{
        menu:[
            {data:'Desktop logo position', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Desktop logo position', type: 'text', required: true, name: 'Logo', feildtype:'menuItemSelect',selectitems:['Top Left' ,'Top Center','Middle Left','Middle Center'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Menu', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Desktop logo position', type: 'text', required: true, name: 'Main Menu', feildtype:'menuItemSelect',selectitems:['Replace' ,'Edit','Remove Menu'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Desktop menu type', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Desktop logo position', type: 'text', required: true, name: 'Drop Down', feildtype:'menuItemSelect',selectitems:['Drop Down' ,'Mega Menu','Drawer'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Sticky header', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Desktop logo position', type: 'text', required: true, name: 'Header', feildtype:'menuItemSelect',selectitems:['None' ,'On Scroll up','Always', 'Always,reduce logo size'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {feildtype:"line"},

            {feildtype:"heading" , data:"color"},

            {data:'Color Schemme', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Desktop logo position', type: 'text', required: true, name: 'Scheme', feildtype:'menuItemSelect',selectitems:['Secheme 1','Secheme 2','Secheme 3','Secheme 4','Secheme 5', ], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Menu color scheme', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Desktop logo position', type: 'text', required: true, name: 'Header', feildtype:'menuItemSelect',selectitems:['Secheme 1','Secheme 2','Secheme 3','Secheme 4','Secheme 5', ], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {feildtype:"line"},


        ]
    },
    collectionList: {
        menu:[

            {data:'Heading', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Input', type: 'text', required: true, name: 'heading', feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            {data:'Heading Size', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'heading_size', feildtype:'menuItemSelect',selectitems:['Small' ,'Medium','Large','Extra Large'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Image Ratio', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Image Ratio', type: 'text', required: true, name: 'image_Ratio', feildtype:'menuItemSelect',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Image Ratio', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Image Ratio', max:6,min:0,step:1, type: 'text', required: true, name: 'columns_on_desktop_count', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            
            {feildtype:"line"},
            {feildtype:"heading" , data:"Head Padding"},
            {data:'Bottom Padding of Heading', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding of Heading', type: 'text',  max:100,min:0,step:2, required: true, name: 'padding_bottom_heading', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {feildtype:"line"},
            {feildtype:"heading" , data:"Section Padding"},

            {data:'Top Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max:100,min:0,step:2, required: true, name: 'Top_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', type: 'text', required: true, name: 'Bottom_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            
            
        ]
    },
    RichText: {
        menu:[

            {data:'Heading', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Input', type: 'text', required: true, name: 'heading', feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},
            
            {data:'Heading Size', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'heading_size', feildtype:'menuItemSelect',selectitems:['Small' ,'Medium','Large','Extra Large'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Paragraph', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {data: 'Input', type: 'text', required: true, name: 'description', feildtype:'text', lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            
            {feildtype:"line"},
            {feildtype:"heading" , data:"Button"},
            
            {data:'Button Content', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Input', type: 'text', required: true, name: 'button', feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Top & Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max: 30 ,min:0,step:2, required: true, name: 'button_TL_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Right & Left Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', max: 30 ,min:0,step:2,  type: 'text', required: true, name: 'button_LR_Padding', feildtype:'slider', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {feildtype:"line"},
            {feildtype:"heading" , data:"Positions"},

            {data:'Desktop Content Position', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {name: 'desktop_Content_Position', feildtype:'tabs',items:['Left','Center','Right'], lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Content Alignment', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {name: 'content_Alignment', feildtype:'tabs',items:['Left','Center','Right'], lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            

            

            {feildtype:"line"},
            {feildtype:"heading" , data:"Section Padding"},

            {data:'Top Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max:100,min:0,step:2, required: true, name: 'top_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            {data:'Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', type: 'text', required: true, name: 'bottom_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            
            
        ]
    },
    ImageWithText:{
        menu:[

            
            {data:'Image height', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'desktop_image_height', feildtype:'menuItemSelect',selectitems:['Adapt to Image' ,'Small','Medium','Large'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Desktop image width', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'desktop_image_width', feildtype:'menuItemSelect',selectitems:['Small','Medium','Large'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Desktop image placement', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'desktop_image_placement', feildtype:'menuItemSelect',selectitems:['Image First','Image Second'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Desktop content position', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {name: 'desktop_content_position', feildtype:'tabs',items:['Top','Middle','Bottom'], lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Desktop content alignment', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {name: 'desktop_content_alignment', feildtype:'tabs',items:['Left','Center','Right'], lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {data:'Content layout', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {name: 'content_layout', feildtype:'tabs',items:['No overlap','Overlap'], lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            

            {feildtype:"line"},
            {feildtype:"heading" , data:"Content"},

            {data:'Heading', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {data: 'Input', type: 'text', required: true, name: 'heading', feildtype:'text', lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Description', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {data: 'Input', type: 'text', required: true, name: 'description', feildtype:'text', lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {feildtype:"line"},
            {feildtype:"heading" , data:"Button"},
            
            {data:'Button Content', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Input', type: 'text', required: true, name: 'button', feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Top & Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max: 30 ,min:0,step:2, required: true, name: 'button_TL_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Right & Left Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', max: 30 ,min:0,step:2,  type: 'text', required: true, name: 'button_LR_Padding', feildtype:'slider', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            
            // {feildtype:"line"},
            // {feildtype:"heading" , data:"Button"},

            

            

            {feildtype:"line"},
            {feildtype:"heading" , data:"Section Padding"},

            {data:'Top Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max:100,min:0,step:2, required: true, name: 'top_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            {data:'Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', type: 'text', required: true, name: 'bottom_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            
            
        ]
    },
    ImageBanner:{
        menu:[
            // {data:'Image overlay opacity', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            {data:'Image overlay opacity', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max:100,min:0,step:2, required: true, name: 'Image_overlay_opacity', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            
            
            {data:'Banner height', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'Banner_height', feildtype:'menuItemSelect',selectitems:['Adapt to Image' ,'Small','Medium','Large'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Desktop content position', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'Desktop_content_position', feildtype:'menuItemSelect',selectitems:['Top Left', 'Top Center','Top Right','Middle Left','Middle Center','Middle Right','Bottom Left','Bottom Center','Bottom Right'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Desktop content alignment', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {name: 'desktop_content_alignment', feildtype:'tabs',items:['Top','Middle','Bottom'], lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

           
            

            {feildtype:"line"},
            {feildtype:"heading" , data:"Content"},

            {data:'Heading', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {data: 'Input', type: 'text', required: true, name: 'heading', feildtype:'text', lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {data:'Description', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {data: 'Input', type: 'text', required: true, name: 'description', feildtype:'text', lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},

            {feildtype:"line"},
            {feildtype:"heading" , data:"Button"},
            
            {data:'First Button Content', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Input', type: 'text', required: true, name: 'first_button', feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Second Button Content', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Input', type: 'text', required: true, name: 'second_button', feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Top & Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max: 30 ,min:0,step:2, required: true, name: 'button_TL_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Right & Left Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', max: 30 ,min:0,step:2,  type: 'text', required: true, name: 'button_LR_Padding', feildtype:'slider', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            
            // {feildtype:"line"},
            // {feildtype:"heading" , data:"Button"},

            

            

            {feildtype:"line"},
            {feildtype:"heading" , data:"Section Padding"},

            {data:'Top Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max:100,min:0,step:2, required: true, name: 'top_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            {data:'Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', type: 'text', required: true, name: 'bottom_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            
            
        ]
    },
    Contact:{
        menu:[
            

            
            
            {data:'Heading Size', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Heading Size', type: 'text', required: true, name: 'heading_Size', feildtype:'menuItemSelect',selectitems:['Small','Medium','Large'], lg: 6 , md: 6, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},



            {feildtype:"line"},
            {feildtype:"heading" , data:"Content"},

            {data:'Heading', feildtype:'label' , lg: 12 , md: 12, sm: 12, xs: 12},
            { feildtype:'space'},
            {data: 'Input', type: 'text', required: true, name: 'heading', feildtype:'text', lg: 12 , md: 12, sm: 12, xs: 12, lang: 'en'},
            { feildtype:'space'},


            {feildtype:"line"},
            {feildtype:"heading" , data:"Button"},
            
            {data:'First Button Content', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Input', type: 'text', required: true, name: 'first_button', feildtype:'text', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Top & Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max: 30 ,min:0,step:2, required: true, name: 'button_TL_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            {data:'Right & Left Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', max: 30 ,min:0,step:2,  type: 'text', required: true, name: 'button_LR_Padding', feildtype:'slider', lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            
            // {feildtype:"line"},
            // {feildtype:"heading" , data:"Button"},

            

            

            {feildtype:"line"},
            {feildtype:"heading" , data:"Section Padding"},

            {data:'Top Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Top Padding', type: 'text',  max:100,min:0,step:2, required: true, name: 'top_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},


            {data:'Bottom Padding', feildtype:'label' , lg: 6 , md: 6, sm: 6, xs: 6},
            {data: 'Bottom Padding', type: 'text', required: true, name: 'bottom_Padding', feildtype:'slider',selectitems:['Adpat to Image' ,'Portrait','Square'], lg: 6 , md: 6, sm: 6, xs: 6, lang: 'en'},
            { feildtype:'space'},

            
            
        ]
    }
  
}
}