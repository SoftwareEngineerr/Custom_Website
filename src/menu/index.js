import React, { lazy, useEffect, useState } from "react";
import { Box, Button, List, Typography } from "@mui/material";
import { AddBoxOutlined, Delete, DeleteOutline, DragIndicatorOutlined } from "@mui/icons-material";
// import { Input } from "../components/selectitem/components/input/input.js";
import SubMenuitem from "./component/submenuitem.js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { DeleteRequest, PostRequest } from "../redux/actions/request/request.js";

const Input = lazy(()=>import('../components/selectitem/components/input/input.js'))


export default function CustomMenu() {

  const [categories, setCategories] = useState(
);
  const url = useSelector((state) => state.Api);
const [ showInput,setShowInput] = useState(false)
const [ inputValue , setInputValue ] = useState('')
const [ linkValue , setLinkValue ] = useState('')
const [ counter , setCounter ] = useState(0)
const userToken = JSON.parse(sessionStorage.getItem('User_Data'))?.token || undefined;
const [ data , setData ] = useState();
const dispatch = useDispatch();


  const [items, setItems] = useState();
      const [selectedItem, setSelectedItem] = useState(null);
  
      // Handle drag start event
      const handleDragStart = (e, index) => {
          e.dataTransfer.setData("draggedIndex", index);
      };

  const showMenu = async() =>{
    try {
      const response = await axios.get(url.ShowMenu, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userToken}`, // Ensure userToken is valid and present
        },
    });
    if (response.status == 200) {

      function fixAndParse(inputString) {
        // Step 1: Replace single quotes with double quotes
        let fixedString = inputString.replace(/'/g, '"');
    
        // Step 2: Add double quotes around property names if missing
        fixedString = fixedString.replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
    
        // Step 3: Now, parse the corrected string
        try {
            const cusData = JSON.parse(fixedString);
            // Return the first object in the array
            console.log(cusData)
            return cusData;
        } catch (error) {
            console.error("Invalid JSON format:", error);
            return null;
        }
    }

    const getda = response.data.result
    // console.log(getda)
      setItems(response.data.result);
    }
  } catch (error) {
    console.error(error);
}
  }
      useEffect(()=>{
        showMenu()
      },[])
  
      // Handle drop event
      const handleDrop = (e, dropIndex) => {
          const draggedIndex = e.dataTransfer.getData("draggedIndex");
          
          // Create a copy of the items to avoid direct mutation
          const updatedItems = [...items];
          
          // Swap the items
          const [draggedItem] = updatedItems.splice(draggedIndex, 1);
          updatedItems.splice(dropIndex, 0, draggedItem);
          
          // Update state with new item order
          setItems(updatedItems);
  
          // Dispatch the updated items to Redux store
        //   dispatch(SelectIndex(updatedItems));
      };
  
      // Handle drag over event
      const handleDragOver = (e) => {
          e.preventDefault(); // Allow drop
      };
  
      // Handle item click event
      const handleItemClick = (index) => {
          setSelectedItem(index);
      };
  

  const submitform = async(e)=>{
    e.preventDefault();
    // alert(Math.random())
    // setItems([...items,

    //     {
    //         link: linkValue,
    //         name: inputValue,
    //         submenu: [
    //         //   { id: "abc", name: "First" },
    //         //   { id: "def", name: "Second" }
    //         ]
    //       },
    // ])
    setInputValue('')
    setLinkValue('')
    const inputValues = {
      Name: inputValue,
      Link: linkValue
    }
     await dispatch(PostRequest(url.Addmenu,  JSON.parse(sessionStorage.getItem("User_Data")).token , inputValues))
     setTimeout(()=>{
        showMenu()

     },300)
    
    // dispatch()
  }
const deleteMenuitem = async(getparam) => {
    console.log(getparam)
    await dispatch(DeleteRequest(url.DeleteMenu,  JSON.parse(sessionStorage.getItem("User_Data")).token , {id:getparam}))
    showMenu()
   
    
  } 
  
  const subitem = async(index , e , id)=>{
    // items[index].submenu.push(
    //     {
    //         name: e.name,
    //         link: e.link
    //     }
    // )

    const inputValues = {
      Name: e.name,
      Link: e.link,
      MenuId:id
    }
    console.log(inputValues)
    await dispatch(PostRequest(url.addsubmenu,  JSON.parse(sessionStorage.getItem("User_Data")).token , inputValues)) 
    setCounter(Math.random())
    showMenu()
  }
  
  return (
    <>
        <Box display='flex'
        sx={{
            background: '#f2f2f2',
            padding: '10px',
            margin: '6px 0px',
            borderRadius: '7px',
            justifyContent: 'space-between'
        }}
        >
            <Typography variant="h4">
                Add Menu
            </Typography>
            <Box onClick={()=>setShowInput(!showInput)}>
                <AddBoxOutlined />
            </Box>
        </Box>
        {
            showInput == true ? 
            <form onSubmit={submitform}>
                <Box display='flex'>
                    <Input placeholder='Value' required={true} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
                    <Button type='submit'>
                        <AddBoxOutlined />
                    </Button>
                </Box>
                <Box mt={1} sx={{padding: '0'}}>
                    <Input placeholder='Link'  value={linkValue} onChange={(e)=>setLinkValue(e.target.value)} />
                </Box>
            </form>
            :
            null
        }
            {items != undefined && items.length >= 1  ? (items.map((item, index) => (
                <div
                key={index}
                >
                    <div
                        key={index}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDrop={(e) => handleDrop(e, index)}
                        onDragOver={handleDragOver}
                        onClick={() => handleItemClick(index)} // Select item on click
                        
                    >
                        <SubMenuitem 
                        getstyle={{
                            backgroundColor: "#f9f9f9",
                            textAlign: "center",
                            cursor: "move",
                            borderRadius: "5px",
                            position: "relative",
                            display: 'flex',
                            justifyContent: 'flex-start',
                            padding: '7px',
                            margin: '4px 0px',
                        }}
                        setsubitem={(e)=>subitem(index, e , item.id)}
                        deleteMenuitem={deleteMenuitem} item={item} index={index} name={item.Name} />
                    </div>
                    <ul>
                        {
                            item.submenu.length >= 1  ? (
                            item.submenu.map((subitem , ind)=>
                                <li key={ind}>
                                  {`
                                  Name: ${subitem.Name} Link :  ${subitem.Link}
                                  
                                  `}
                                </li>
                            )
                        )
                        :
                        null
                        }
                    </ul>
                </div>
                ))
            )
            :
            null
            }
    </>
  );
};
