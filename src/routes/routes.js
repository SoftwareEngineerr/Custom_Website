import { IconCopy } from '@tabler/icons';
import { uniqueId } from 'lodash';
import { Navigate, Outlet } from 'react-router'
import FullLayout from '../layout/full/FullLayout';
import Sidebar from '../layout/full/sidebar/Sidebar';
// import { RouteHeader } from '../constant/routeAndHeader';
// import FullLayout from '../layouts/full/FullLayout';
// import Label from '../components/xaoasoft/label';
// import Customizemenu from '../layouts/full/customizemenu/customizemenu';
import DragAndDrop from '../veiws/website';


export const Router = [
    {
        path:'/',
        // elemenet: <><Outlet /><Sidebar /></>,
        element: <div id='fullLayout'><FullLayout /></div>,
        children:[
            {
                item: true,
              id: uniqueId(),
              title: 'My-Profile',
              icon: IconCopy,
              // href: '/Private/Shoqa',
              path: '/',
              element: <div id="ErrorPage"><DragAndDrop /></div>
                
              }
        ]
    },
];