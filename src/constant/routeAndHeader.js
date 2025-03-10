import { Navigate } from "react-router";
import { uniqueId } from "lodash";
import { IconAperture, IconCopy, IconLayoutDashboard,  IconLogin, IconMoodHappy, IconTypography, IconRegistered, IconUserPlus } from '@tabler/icons';
import { Typography } from "@mui/material";
import DragAndDrop from "../veiws/website";

// console.log(SelectedData())
export const RouteHeader = () => {
  // const [data , setData] = useState(useSelector((state)=>state.Auth.userdata.roles.StudentReg))
  // console.log(data + 'sami')
 // console.log(User_Data.roles[0])
 return {
    router:{
        Menu:[
            {path:'/Private/' , element: <Navigate to="/Private/Home" /> },
            // {path:'/Private/Home', element: <>Dashboard</>},
          
                  {
                    item: true,
                    navlabel: true,
                    subheader: <div className="mainMenuMain"><Typography variant="span" sx={{display: (theme)=>theme.palette.sidemenutext.display.display}}>Home </Typography><Typography variant="span" sx={{fontSize: '16px',marginLeft: '7px',display: (theme)=>theme.palette.sidemenutext.display.display, display: 'inline'}}></Typography></div>,
                    title: '',
                    icon: '',
                    href: '',
                    path: '',
                    element: ''
                  },
                  {
                    item: true,
                    navlabel: false,
                    subheader: '',
                    title: 'Dashboard',
                    icon: IconLayoutDashboard,
                    href: '/',
                    path: '/',
                    element: <div id="Dashboard"><DragAndDrop /></div>
                  },
        ]
    }
  }
}