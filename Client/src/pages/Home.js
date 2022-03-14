import React from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";
import Cart from "../components/Cart/Cart";
export default function Home(props) {
    return (
        <>
            <div className="wrapper">
                <Products images={props.images} />
                <Filter />
            </div>
            <Cart images={props.images} />
        </>
    )
}