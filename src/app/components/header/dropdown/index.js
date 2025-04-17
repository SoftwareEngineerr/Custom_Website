import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
            padding: '0'
        }}
      >
        {props.name && props.name} 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
            props.submenu && (props.submenu.length != 0 ? 'true' : 'false') ? (
                props.submenu.map((item , ind)=>
                <MenuItem key={ind} onClick={handleClose}>{item.Name}</MenuItem>
            )
        )
        :
        null
        }
      </Menu>
    </div>
  );
}

export default React.memo(BasicMenu)