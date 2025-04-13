const initialState = {
    data:0,
    pagechecker: 'welcome'
};
const PageChanger = (state = initialState, action) => {
    switch(action.type) {
        case 'CURRENT_PAGE':
            return { ...state, data: action.page };
        case 'PAGE_CHECKER':
            return {...state, pagechecker: action.data}
        default:
            return state;
    }
}


export default PageChanger;
