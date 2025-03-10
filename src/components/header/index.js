import React from 'react'
import PropTypes from 'prop-types'
import { IconFileX } from '@tabler/icons';
import { Box } from '@mui/material';
import { Selector } from '../select';

const Header = (props) => {
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
        <Selector
        items={[
            "Home",
            "Home",
            "Home",
        ]}
        name="Default Page"
        style={{color:"white",border:"solid 1px white",width:"200px"}}
        />
    </Box>
  )
}

Header.propTypes = {}

export default Header