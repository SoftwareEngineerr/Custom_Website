import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './input'
import { useSelector } from 'react-redux'

const MainInput = (props) => {
    const data = useSelector((state)=>state.Section[props.id])
    const [selectvalue, setSelectvalue] = React.useState(data != undefined ? data[props.name]: null);
  
    React.useEffect(()=>{
      console.log(data && data[props.name])
      setSelectvalue(data != undefined ? data[props.name]: null)
    },[data])
  return (
    <div>
          <Input
        name={props.name} 
        id={props.id} 
        onChange={(e)=>props.onChange( e , e)} 
        value={selectvalue}
        />
    </div>
  )
}

MainInput.propTypes = {}

export default MainInput