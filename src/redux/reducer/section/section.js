const initialState = [
  
// {
//     category:"header",
//     data: "item",
//     logoposition: "1",
//     // 1 Top Left
//     // 2 Top Center
//     // 3 Middle Left
//     // 4 Middle Center
//     background: "white",
//     color: "blue",
// },
// {
//     category:"slideshow",
//     data: "item 1",
// }
];
const Section = (state = initialState, action) => {
    switch(action.type) {
        case 'AddSectionToApp' :
            console.log(state)
            return {
                ...state, 
                
            };
            case 'SelectIndex' : 
            return {
                ...state,   
            };
            case "SELECT_INDEX":
                console.log(action.data)
            return [ ...action.data
            ];  
            case 'CHANGE_LOGO_POSITION':
                // console.log(action.index)
                state[action.index].logoposition = action.LogoPosition
            return [ ...state, 
            //  action.LogoPosition
            ];  
            case 'HEADING_SIZE':
                state[action.index].heading_size = action.Heading_size 
            return [ ...state, 
            //  action.LogoPosition
            ]; 
            case 'CUSTOM_STATE':
                console.log(state[action.index] , [action.objname] , action.Get_Name)
                state[action.index][action.objname] = action.Get_Name 
            return [ ...state, 
            //  action.LogoPosition
            ];  

            case "ADD_SECTION_TO_APP":
            return [ ...state, 
             action.data
            ]; 
            case "GET_SECTION_TO_APP":
            return action.data
            
            
            
        default:
            return state;
    }
}


export default Section;
