import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddBoxOutlined, DeleteOutline, DragIndicatorOutlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import { Input } from '../../app/components/input/input'

const SubMenuitem = (props) => {
  const [ showInput,setShowInput] = useState(false)
  const [ inputValue , setInputValue ] = useState('')
  const [ linkValue , setLinkValue ] = useState('')
  
  const submitform = (e)=>{
    e.preventDefault();
    // alert(Math.random())
   
    props.setsubitem(
      { name: inputValue , link: linkValue , id:props.item.id}
    )
    setInputValue('')
    setLinkValue('')
  }

  return (
    <>
    
    <Box>
    <Box sx={{
      ...props.getstyle
    }}>
      <DragIndicatorOutlined />
          {props.name}
          <Box sx={{
              position: 'absolute',
              right: '0',
          }}
          display='flex'
          >
            <Box onClick={()=>setShowInput(!showInput)}>
                  <AddBoxOutlined />
              </Box>
              {/* {props.item} */}
              <Box onClick={()=>props.deleteMenuitem(props.item.id)}>
                  <DeleteOutline />
              </Box>
          </Box>
          <Box>

    </Box>
    </Box>
          {
              showInput == true ? 
              <form onSubmit={submitform}>
                  <Box display='flex'>
                      <Input placeholder='Value' required value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
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

          </Box>
    </>
  )
}

SubMenuitem.propTypes = {}

export default SubMenuitem