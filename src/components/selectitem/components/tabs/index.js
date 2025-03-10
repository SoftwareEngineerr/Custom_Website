import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicState } from '../../../../redux/actions/addsection/addsection';

function samePageLinkNavigation(
  event
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  );
}

export default function NavTabs(props) {
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.Section[props.id])
    console.log(data.desktop_Content_Position)
  const [value, setValue] = React.useState(data ? parseInt(data.desktop_Content_Position) : 0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event
        ))
    ) {
        console.log(props.id,newValue , props.name)
        dispatch(DynamicState(props.id,newValue , props.name))
        setValue(newValue);

    //   props.onChange({
    //         target:{
    //             value: newValue,
    //             name: props.name
            
        
    //   }})
    }
  };
  React.useEffect(()=>{
    setValue(parseInt(data[props.name]))
  },[data])

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
        sx={{
            background: '#eeeeee',
            borderRadius: '9px',
            // paddingLeft: '9px'
        }}
      >
        {
            props.items.map((item,ind)=>{
                const getwidth = 100 / props.items.length;
            
             return (   <LinkTab
                key={ind}
                sx={{
                    padding: '2px 5px',
                    fontSize: "10px",
                    minWidth: 'auto',
                    width: `${getwidth}%`
                }}
                // active="yes"
                label={item} />
             )
            }
            )
        }
       
      </Tabs>
    </Box>
  );
}
