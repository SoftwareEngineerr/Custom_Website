import React, { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Tabs, Tab, List } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@emotion/react';
import {
  IconBorderInner,
  IconSettings,
  IconBrandAppstore,
} from '@tabler/icons';

import DynamicRenderer from './DynamicRenderer';
import AddSection from '../Addsection';
import TabPanel from './Component/TabPanel';
import usePageData from '../../../../hooks/SideBarItems/usePageData';
import useSidebarTabs from '../../../../hooks/SideBarItems/useSidebarTabs';
import CustomMenu from '../../../../menu';

const SidebarItems = () => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const { value, handleTabChange } = useSidebarTabs();
  const { page, sectionData } = usePageData();

  useEffect(() => {
    console.log('Section data updated:', sectionData);
  }, [sectionData]);

  const safeTabValue = typeof value === 'number' && !isNaN(value) ? value : 0;

  return (
    <Box pl={0} pr={2}>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            overflow: 'hidden',
            marginBottom: '0px',
            width: '80px',
            position: 'absolute',
            marginLeft: '-24px',
            background: theme.palette.background.paper,
          }}
        >
          <Tabs
            value={safeTabValue}
            onChange={handleTabChange}
            aria-label="Sidebar Tabs"
            orientation="vertical"
            sx={{ flexDirection: 'column', display: 'flex' }}
          >
            <Tab icon={<IconBorderInner />} />
            <Tab icon={<IconSettings />} />
            <Tab icon={<IconBrandAppstore />} />
          </Tabs>
        </Box>

        <Box sx={{ marginLeft: '50px' }}>
          <TabPanel value={safeTabValue} index={0}>
            {page.pagechecker === 'pdp' && 'pdp'}
            {page.pagechecker === 'plp' && <>Welcome</>}

            {Array.isArray(sectionData) &&
              sectionData.map((item, index) => (
                <List sx={{ pt: 0 }} key={index} className="sidebarNav">
                  <DynamicRenderer key={index} item={item} index={index} />
                </List>
              ))}
          </TabPanel>

          <TabPanel value={safeTabValue} index={1}>
            {!page.pagechecker && <AddSection />}
          </TabPanel>

          <TabPanel value={safeTabValue} index={2}>
            <CustomMenu />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(SidebarItems);
