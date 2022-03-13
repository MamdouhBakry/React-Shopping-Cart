import { CREATE_ORDER, CLEAR_ORDER } from "../actions/types.js";

export const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER:
            return { order: action.order }
        case CLEAR_ORDER:
            return { order: false }
        default:
            return state;
    }
}