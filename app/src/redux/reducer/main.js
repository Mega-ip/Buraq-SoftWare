import * as types from "../ActionTypes";

const initialState = {
    first:""
}

const mainReducer = (state = initialState, action) =>{
    switch(action.type) {
        case types.FIRST_ACTION : {
            const {content} = action.payload;
            return { 
                ...state,
                first: content
            }
        }
        default:
            return state;
    }
}

export default mainReducer;