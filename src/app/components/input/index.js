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
        placeholder={props.data}
        required={props.required == true ? true : false}
        type={props.type}
        />
    </div>
  )
}

AppInput.propTypes = {
  name: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  data: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
}

export default AppInput