import { lazy } from 'react';
import { IconCopy } from '@tabler/icons';

const FullLayout = lazy(()=>import('../layout/full/FullLayout'))
const DragAndDrop = lazy(()=>import('../veiws/website/index'))

export const Router = [
    {
        path:'/',
        element: <div id='fullLayout'><FullLayout /></div>,
        children:[
            {
                item: true,
              title: 'My-Profile',
              icon: IconCopy,
              path: '/',
              element: <div id="ErrorPage"><DragAndDrop /></div>
                
              }
        ]
    },
];