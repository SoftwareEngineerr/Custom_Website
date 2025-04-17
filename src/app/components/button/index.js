import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const CustomButton = props => {
  return (
    <div>
      <Button sx={props.getstyle} type={props.type}>
        {props.data}
      </Button>
    </div>
  )
}

CustomButton.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]).isRequired,
  type: PropTypes.string,
  getstyle: PropTypes.object
}

export default memo(CustomButton)
