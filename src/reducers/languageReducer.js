const initialState = {
    lang: 'am'
};

const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_LANG': return { lang: action.payload };
        default: return state;
    }
}

export default languageReducer;