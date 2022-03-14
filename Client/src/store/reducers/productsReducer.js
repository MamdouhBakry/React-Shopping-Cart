import { FETCH_PRODUCT, FILTER_SIZE, FILTER_SORT } from "../actions/types";

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                products: action.data,
                filteredProducts: action.data
            }
        case FILTER_SIZE:
            return {
                ...state,
                size: action.data.size,
                filteredProducts: action.data.products
            }
        case FILTER_SORT:
            return {
                ...state,
                sort: action.data.sort,
                filteredProducts: action.data.products
            }
        default:
            return state;
    }
}