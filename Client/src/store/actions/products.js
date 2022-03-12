import { FETCH_PRODUCT } from "./types"

export const fetchProduct = () => {
    return async (dispatch) => {
        fetch("http://localhost:5001/api/products").then(res => res.json()).then(data => {
            console.log("data", data);
            dispatch({
                type: FETCH_PRODUCT,
                data: data
            })
        })
    }
}