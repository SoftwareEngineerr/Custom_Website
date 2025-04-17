import { useState, useCallback } from 'react';

const useSidebarTabs = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = useCallback((_event, newValue) => {
    if (typeof newValue === 'number' && !isNaN(newValue)) {
      setValue(newValue);
    } else {
      console.warn('Invalid tab value received:', newValue);
    }
  }, []);

  return { value, handleTabChange };
};

export default useSidebarTabs;
