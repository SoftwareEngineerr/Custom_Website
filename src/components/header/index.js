import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { IconFileX } from '@tabler/icons';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material';
import { Selector } from '../select';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AddSectionAction, GetSectionAction } from '../../redux/actions/addsection/addsection';
import { Current_Page, Page_Checker } from '../../redux/actions/page/page';
import { AddBoxOutlined, AddToHomeScreen } from '@mui/icons-material';
import { Input } from '../../app/components/input/input';
import { PostRequest } from '../../redux/actions/request/request';

const Header = (props) => {
      const url = useSelector((state) => state.Api);
      const [data  , setData ] = useState()
      sessionStorage.setItem('User_Data', `{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6W3siU3JuIjoyMCwiVGVhY2hlclN0YWZmU3JuIjo2MywiV2ViU3JuIjo3LCJFeHBlbnNlIjoxLCJEb25hdGlvbiI6MSwiSW5jb21lIjoxLCJSZXN1bHQiOjEsIkFkbWluIjoxLCJsYmxIb21lIjoxLCJsYmxUZWFjaGVyIjoxLCJsYmxNYW5hZ2VtZW50IjoxLCJJbnZlbnRvcnkiOjEsIlRlYWNoZXJSZWciOjEsIktoYXRhIjoxLCJQcm9kdWN0X0F2YWlsYWJsZSI6MSwiS2hhdGFfQmlsbCI6MX1dLCJwcml2YXRlIjp7IlNybiI6MCwiV2ViU3JuIjo3LCJSb2xsTnVtIjo2MywiTmFtZSI6InRlc3RpbiIsIklkTm8iOjk5ODksIkZOYW1lIjoic3llZCIsIlRlbGxObzEiOjcwMDAxMjU2NSwiVGVsbE5vMiI6MCwiUmVmZXJlbmNlIjoiIiwiQWRtaXNzaW9uRmVlIjowLCJNb250aGx5RmVlIjo2MDAsIkNsYXNzIjoidW5kZWZpbmVkIiwiY2xhc3NJRCI6MCwiQWRkcmVzcyI6IiIsIkFkbWlzc2lvbkRhdGUiOiI4IE1hcmNoIDIwMjQiLCJFbmdsaXNoQ2VudGVyIjowLCJBcmFiaWNDZW50ZXIiOjAsIkNvbXB1dGVyQ2VudGVyIjowLCJIb2x5UXVyYW4iOjAsIkRPQiI6IjI0IEphbnVhcnkgMjAxOCIsIkV4aXREYXRlIjoidW5kZWZpbmVkIiwiQ29tbWVudHMiOiIiLCJQaWN0dXJlIjoiNy8xNzI4NTYwNjE2NzY5LTQ0MzI0MzI1LmpwZyIsIkhvc3RlbEZhY2lsaXR5IjowLCJUcmFuc3BvcnRGYWNpbGl0eSI6MCwiT3JwaGFuIjowLCJHYXJpZ29yaWFuRGF0ZSI6Itux27TbsNuyINit2YjYqiDbsduyLCDYtNmG2KjZhyIsIklzbGFtaWNEYXRlIjoi2KfZhNiz2KjYqtiMINmiINmF2KfYsdizINmi2aDZotmkIiwiRG9iSXNsYW1pY0RhdGUiOiIiLCJEb2JHckRhdGUiOiIiLCJTdHVkZW50VGVhY2hlclN0YWZmIjowLCJOYW1lX1AiOiLZhtuM2YYiLCJGTmFtZV9QIjoi2pPbjNqTIiwiUmVmZXJlbmNlX1AiOiIiLCJBZGRyZXNzX1AiOiIiLCJPbGRBc3Nhc05vIjowLCJEYXRlIjoiMjAyNC0wMy0wMlQwODowMDowMC4wMDBaIiwiY3JlYXRlZEJ5QWRtaW4iOiI1OCIsInBhc3N3b3JkIjoidGVzdGtkciIsInJvbGUiOiIiLCJhY2Nlc3NpYmlsaXR5IjoiIiwiZW1haWwiOiJuZXdUZWFjaGVyIiwiYXBwcm92ZWQiOiJ0cnVlIn0sImlhdCI6MTc0NDUzMTI1MCwiZXhwIjoxNzQ0NTM4NDUwfQ.14WIgrQfAq4P-Fjb8A1-9sliWsFIWCKK38Y8y3lpMa0",
    "roles": [
        {
            "Srn": 20,
            "TeacherStaffSrn": 63,
            "WebSrn": 7,
            "Expense": 1,
            "Donation": 1,
            "Income": 1,
            "Result": 1,
            "Admin": 1,
            "lblHome": 1,
            "lblTeacher": 1,
            "lblManagement": 1,
            "Inventory": 1,
            "TeacherReg": 1,
            "Khata": 1,
            "Product_Available": 1,
            "Khata_Bill": 1
        }
    ],
    "userimage": "7/1728560616769-44324325.jpg"
}`)
      const userToken = JSON.parse(sessionStorage.getItem('User_Data'))?.token || undefined;
      const [selectvalue, setSelectvalue] = React.useState(0);
      const dispatch = useDispatch()
      const itemsFromRedux = useSelector((state) => state.Section);
      


      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      

      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [updateValues , setUpdateValues ] = useState('')
      
      

      
      const func = async(getparam) => {
        
        try {
        const response = await axios.get(url.ShowAllPage, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`,
            },
        });
        
        if (response.status == 200) {
          if(response.data.result != []){
            // console.log(response.data.result[selectvalue].Page_Name);
            setData(
              response.data.result
            );
            if(!selectvalue || selectvalue == 0 ){
              setSelectvalue(selectvalue)
            }
            if(getparam){
              setSelectvalue(getparam)
            } 
            
            

            // AddSectionAction
          }
        }
    } catch (error) {
        console.error(error);
    }
    // alert(getparam)

    function fixAndParse(inputString) {
      // Step 1: Escape any double quotes inside the string values (to prevent parsing issues)
      let fixedString = inputString.replace(/"([^"]*)"/g, (match, p1) => {
          return `"${p1.replace(/"/g, '\\"')}"`;
      });
  
      // Step 2: Add double quotes around property names if missing
      fixedString = fixedString.replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
  
      // Step 3: Now, parse the corrected string
      try {
          const cusData = JSON.parse(fixedString);
          // Return the first object in the array
          console.log(cusData);
          return cusData;
      } catch (error) {
          console.error("Invalid JSON format:", error);
          return null;
      }
  }


    if(getparam != 'plp' && getparam != 'pdp' && getparam){
      try {
       



        const response = await axios.get(url.ShowPage, {
          params: { id: data[getparam - 1].id },
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userToken}`, // Ensure userToken is valid and present
          },
      });
      
    //   function fixAndParse(inputString) {
    //     // Step 1: Replace single quotes with double quotes
    //     let fixedString = inputString.replace(/'/g, '"');
    
    //     // Step 2: Add double quotes around property names if missing
    //     fixedString = fixedString.replace(/([{,])\s*([a-zA-Z0-9_]+)\s*:/g, '$1"$2":');
    
    //     // Step 3: Now, parse the corrected string
    //     try {
    //         const cusData = JSON.parse(fixedString);
    //         // Return the first object in the array
    //         console.log(cusData)
    //         return cusData;
    //     } catch (error) {
    //         console.error("Invalid JSON format:", error);
    //         return null;
    //     }
    // }
    
  
    
  
        if (response.status == 200) {
          const getda = response.data.result[0].Details
          const randomvalue = Math.random()
            dispatch(Current_Page(randomvalue))
            setTimeout(()=>{
            dispatch(Page_Checker(''))
             dispatch(GetSectionAction(fixAndParse(getda )))
            },1000)
        }
    
        } catch (error) {
            console.error(error);
        }

    }
    else if(getparam == 'plp' || getparam == 'pdp'){
      // alert('static')
      const randomvalue = Math.random()
      dispatch(Current_Page(randomvalue))

      setTimeout(()=>{
        dispatch(GetSectionAction(getparam))
        dispatch(Page_Checker(getparam))
       },1000)
      
    }

      }
    useEffect(()=>{
     
      func()
    },[])

    const submitPage = async()=>{
      console.log( data[selectvalue-1].Page_Name , selectvalue , userToken)
      const response = await axios.put(url.EditPage, 
        {
            // Data you want to send in the body
            Name: data[selectvalue-1].Page_Name,
            Details: itemsFromRedux,
            id: data[selectvalue-1].id
        }, 
        {
            headers: {
                'Authorization': `Bearer ${userToken}`,
                'Content-Type': 'application/json'
            }
        }
    );
    }


      const handleChange = (event) => {
        func(event.target.value)
        setSelectvalue(event.target.value);
      };
      const submitform = (e) => {
        e.preventDefault();
        dispatch(PostRequest(url.Create_page,  JSON.parse(sessionStorage.getItem("User_Data")).token , {Name:updateValues ,   Details: "[]"}))
        func()
        handleClose();
      }
  return (
    <Box sx={{
        height: '63px',
        zIndex: '10000',
        position: 'relative',
        textAlign: 'center',
        background: '#ebebeb',
        display: 'IconFileX',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }}>
      <Button  onClick={handleOpen}>
        <AddBoxOutlined  />
      </Button>






    <div>
      {/* <Button>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Page Name
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={submitform}>
              <Input placeholder="Enter Page Name" required onChange={(e)=>setUpdateValues(e.target.value)} /> 
              <Box mt={2}>
                <button type="submit">Create New page</button>
              </Box>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>

      {
        data && (
          <>

            <Box 
            >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Page</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectvalue}
                    label="Age"
                    onChange={handleChange}
                    
                  >
                      {
                          data &&(
                          data.map((item , ind)=>
                          <MenuItem key={ind} value={ind+1}>{item.Page_Name}</MenuItem>
                          )
                          )
                      }
                          <MenuItem  value='plp'>Product List</MenuItem>
                          <MenuItem value='pdp'>Product Detail</MenuItem>

                  </Select>
                </FormControl>
              </Box>
          </>
        )
      }

      <Button onClick={submitPage}>
        Save
      </Button>
    </Box>
  )
}

Header.propTypes = {}

export default Header