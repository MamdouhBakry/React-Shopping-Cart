import React from 'react';
import "../../css/Filter/Filter.css";
export default function Filter(props) {
    return (
        <>
            <div className="filter-wrapper">
                <div className="container">
                    <h2 className="filter-title">Filter</h2>
                    <div className="num-of-products">Number of Products (4)</div>
                    <div className="filter-by-size">
                        <span>Filter</span>
                        <select value={props.size} onChange={props.handleFilterBySize} className="filter-select">
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
                        <select value={props.sort} onChange={props.handleFilterByOrder} className="filter-select">
                            <option value="latest">Latest</option>
                            <option value="lower">Lower</option>
                            <option value="highest">Highest</option>
                        </select>
                    </div>
                </div>

            </div>
        </>
    )
}
