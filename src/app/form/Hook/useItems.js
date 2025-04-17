import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector , useDispatch } from 'react-redux';

export const UseItems = (props) => {
      const dispatch = useDispatch();
    const PageChanger = useSelector((state) => state.PageChanger);
    const itemsFromRedux = useSelector((state) => state.Section);
    const [items, setItems] = useState(itemsFromRedux);
  
  useEffect(()=>{
        setItems([])
        console.log('1')
    },[PageChanger])
    useEffect(()=>{
      setItems(itemsFromRedux)
      console.log('2')
    },[itemsFromRedux])
    
  return items
}
