import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicState } from '../../../../redux/actions/addsection/addsection';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // only left-click
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
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Section[props.id]);

  // Helper to safely parse value
  const safeParse = (val) => {
    const parsed = parseInt(val);
    return isNaN(parsed) ? 0 : parsed;
  };

  const [value, setValue] = React.useState(() =>
    safeParse(data?.[props.name] ?? data?.desktop_Content_Position)
  );

  const handleChange = (event, newValue) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      dispatch(DynamicState(props.id, newValue, props.name));
      setValue(newValue);
    }
  };

  React.useEffect(() => {
    if (data) {
      const newVal = safeParse(data[props.name]);
      setValue(newVal);
    }
  }, [data, props.name]);

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
        }}
      >
        {props.items.map((item, ind) => {
          const width = 100 / props.items.length;
          return (
            <LinkTab
              key={ind}
              label={item}
              sx={{
                padding: '2px 5px',
                fontSize: '10px',
                minWidth: 'auto',
                width: `${width}%`,
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
