import * as types from "./ActionTypes";

export const FirstAction = (content)=>({
    type: types.FIRST_ACTION,
    payload: {content}
})