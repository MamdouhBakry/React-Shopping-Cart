import { FETCH_PRODUCT } from "../actions/types";

export const productsReducer = (state = {}, action) => {
    console.log("action.data", action.data);
    switch (action.type) {
        case FETCH_PRODUCT:
            return { products: action.data }
        default:
            return state;
    }
}