import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './input'
import { useSelector } from 'react-redux'

const AppInput = (props) => {
  return (
    <div>
          <Input
        name={props.name} 
        id={props.id} 
        // onChange={(e)=>props.onChange( e , e)} 
        value={selectvalue}
        />
    </div>
  )
}

AppInput.propTypes = {}

export default AppInput