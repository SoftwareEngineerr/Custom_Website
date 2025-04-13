const initialState = {
    data:'white',
    menucolor: '#000',
    display: 'block',
    header:{
        logoposition: "1",
        // 1 Top Left
        // 2 Top Center
        // 3 Middle Left
        // 4 Middle Center
        background: "white",
        color: "blue"
    }
};
const WebsiteChanger = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_MODE':
            return { ...state, data: action.Mode };
        case 'CHANGE_MENU_ITEM_COLOR':
            return { ...state, menucolor: action.Color };
        case 'CHANGE_MENU_SIZE':
            return { ...state, display: action.Size };
        case 'AddSectionToApp' :
            console.log(state)
            return {
                ...state, 
                
            };
        default:
            return state;
    }
}


export default WebsiteChanger;
