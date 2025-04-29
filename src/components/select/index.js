import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicState, HeadingSize } from '../../redux/actions/addsection/addsection';

const Selector = React.memo((props) => {
  const { id, name, items, style, required } = props;
  
  // Use selector to get data from Redux only when necessary
  const data = useSelector((state) => state.Section[id]);
  
  // Initialize state only when data is available to avoid unnecessary updates
  const [selectValue, setSelectValue] = React.useState(data ? data[name] : null);

  const dispatch = useDispatch();

  const handleChange = React.useCallback((event) => {
    const newValue = event.target.value;
    setSelectValue(newValue);

    if (name === 'heading_size') {
      dispatch(HeadingSize(id, newValue));
    } else {
      dispatch(DynamicState(id, newValue, name));
    }
  }, [dispatch, id, name]);

  React.useEffect(() => {
    // Only update selectValue when data or name changes, avoiding redundant updates
    if (data && data[name] !== undefined) {
      setSelectValue(data[name] === 0 ? data[name] + 1 : data[name]);
    }
  }, [data, name]);

  return (
    <Box sx={style || {}}>
      <FormControl fullWidth>
        <InputLabel id={`select-${id}`}>{name}</InputLabel>
        <Select
          labelId={`select-${id}`}
          id={`select-${id}`}
          value={selectValue || ''}
          label={name}
          onChange={handleChange}
          required={required || false}
          sx={style}
        >
          {Array.isArray(items) &&
            items.map((item, ind) => (
              <MenuItem key={ind} value={ind + 1}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
});

export default Selector;
