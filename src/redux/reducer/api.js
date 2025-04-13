import { UserData } from "../../hooks/FirstTimeWebSrn/Websrn";


const web = 'http://localhost:4000/';

const initialState = {
    //website api's
    Login:`${web}login`,
    Web:`${web}WebSrn`,

    ShowAllPage: `${web}CustomizeWebsite/show_all_page`,
    ShowPage: `${web}CustomizeWebsite/show_page`,
    EditPage: `${web}CustomizeWebsite/Edit_page`,
    Create_page: `${web}CustomizeWebsite/Create_page`,

    Imagelink: `${web}CustomizeWebsite/createFolder`,
    ShowImage: `${web}CustomizeWebsite/showimages`,


    // show menu 
    ShowMenu : `${web}CustomizeWebsite/showmenu`,
    Addmenu: `${web}CustomizeWebsite/menu`,
    DeleteMenu: `${web}CustomizeWebsite/deletemenu`,

    //sub menu
    addsubmenu : `${web}CustomizeWebsite/submenu`,
};

const Api = (state = initialState) => {
        return state;
}
export default Api;
