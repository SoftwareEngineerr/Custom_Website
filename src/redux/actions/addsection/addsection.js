export const AddSectionAction = (getdata)=>{
    return(dispatch)=>{
        dispatch({type:"ADD_SECTION_TO_APP" , data:getdata})
    }
}

export const GetSectionAction = (getdata)=>{
    return(dispatch)=>{
        dispatch({type:"GET_SECTION_TO_APP" , data:getdata})
    }
}


export const SelectIndex = (getdata)=>{
    return(dispatch)=>{
        dispatch({type:"SELECT_INDEX" , data:getdata})
    }
}


export const LogoPosition = (id , getdata) => {
    return(dispatch)=>{
        dispatch({type:"CHANGE_LOGO_POSITION" , LogoPosition:getdata , index:id})
    }   
}



export const HeadingSize = (id , getdata) => {
    return(dispatch)=>{
        dispatch({type:"HEADING_SIZE" , Heading_size:getdata , index:id})
    }   
}

export const DynamicState = (id , getdata , objname) => {
    // console.log("welcome")
    return(dispatch)=>{
        dispatch({type:"CUSTOM_STATE" , Get_Name:getdata , index:id , objname:objname})
    }   
}
