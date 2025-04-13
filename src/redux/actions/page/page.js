export const Current_Page = (getdata)=>{
    return(dispatch)=>{
        dispatch({type:"CURRENT_PAGE" , page:getdata})
    }
}

export const Page_Checker = (getdata)=>{
    return(dispatch)=>{
        dispatch({type:"PAGE_CHECKER" , data:getdata})
    }
}

