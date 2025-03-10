import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const CustomButton = props => {
  return (
    <div>
        <Button sx={props.getstyle}>
            {props.data}
        </Button>
    </div>
  )
}

CustomButton.propTypes = {}

export default CustomButton