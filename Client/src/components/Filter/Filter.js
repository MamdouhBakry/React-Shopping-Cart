import React from 'react';
import "../../css/Filter/Filter.css";
import { connect } from "react-redux";
import Flip from 'react-reveal/Flip';
import { filteredSize, filteredSort } from "../../store/actions/products";

function Filter(props) {
    return (
        <>
            <Flip left>
                {
                    props.filteredProducts && <div className="filter-wrapper">
                        <div className="container">
                            <h2 className="filter-title">Filter</h2>
                            <div className="num-of-products">Number of Products ({props.filteredProducts.length})</div>
                            <div className="filter-by-size">
                                <span>Filter</span>
                                <select value={props.size} onChange={(e) => props.filteredSize(props.products, e.target.value)} className="filter-select">
                                    <option value="ALL">ALL</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                </select>
                            </div>
                            <div className="filter-by-size">
                                <span>Order</span>
                                <select value={props.sort} onChange={(e) => props.filteredSort(props.filteredProducts, e.target.value)} className="filter-select">
                                    <option value="latest">Latest</option>
                                    <option value="lower">Lower</option>
                                    <option value="highest">Highest</option>
                                </select>
                            </div>
                        </div>

                    </div>
                }
            </Flip>
        </>
    )
}

export default connect((state) => {
    return {
        sort: state.products.sort,
        size: state.products.size,
        products: state.products.products,
        filteredProducts: state.products.filteredProducts
    }
}, { filteredSize, filteredSort })(Filter)