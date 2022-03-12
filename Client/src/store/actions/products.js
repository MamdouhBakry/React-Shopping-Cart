import { FETCH_PRODUCT, FILTER_SIZE, FILTER_SORT } from "./types"

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

export const filteredSize = (products, value) => {
    return (dispatch) => {
        let productsClone = [...products];
        let newProducts = productsClone.filter(p => p.sizes.indexOf(value) != -1);
        dispatch({
            type: FILTER_SIZE,
            data: {
                size: value,
                products: value == "ALL" ? products : newProducts
            }
        })
    }
}
export const filteredSort = (products, value) => {
    return (dispatch) => {
        let productsClone = [...products];
        let newProducts = productsClone.sort(function (a, b) {
            if (value == "lowest") {
                return a.price - b.price;
            } else if (value == "highest") {
                return b.price - a.price;
            } else {
                return a.id < b.id ? 1 : -1;
            }
        })
        dispatch({
            type: FILTER_SORT,
            data: {
                sort: value,
                products: newProducts
            }
        })
    }
}