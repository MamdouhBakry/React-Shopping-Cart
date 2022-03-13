import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productsReducer";
import { orderReducer } from "./orderReducer";

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer
})