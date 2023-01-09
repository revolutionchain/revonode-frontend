
const initialState = {
    state: [],
}

function rootReducer(state = initialState, action) {
    switch(action.type){
        case 'GET_INFO': 
            return {
                ...state,
            }
        default: return state            
    }
}

export default rootReducer;