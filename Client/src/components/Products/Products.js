import React, { useEffect, useState } from 'react'
import "../../css/Products/Products.css";
import ProductModal from './ProductModal';
import Bounce from 'react-reveal/Bounce';
import { connect } from "react-redux";
import { fetchProduct } from '../../store/actions/products';
import { addToCart } from "../../store/actions/cart";

function Products(props) {
    const [product, setProduct] = useState("");
    const [ind, setInd] = useState(0);
    console.log("products", props.products)
    const openModal = (product, index) => {
        setProduct(product);
        setInd(index);
    }
    const closeModal = () => {
        setProduct(false);
    }
    useEffect(() => {
        props.fetchProduct();
    }, [])
    return (
        <>
            <Bounce left cascade>
                <div className="product-wrapper">
                    {
                        props.products && props.products.length ?
                            props.products.map((product, index) => (
                                <div className="product-item" key={product.id}>
                                    <a onClick={() => openModal(product, index)} href='#'>
                                        <img src={props.images[index]} alt={product.title} />
                                    </a>
                                    <div className="product-desc">
                                        <p>{product.title}</p>
                                        <span>${product.price}</span>
                                    </div>
                                    <button onClick={() => props.addToCart(product)}>Add To Cart</button>
                                </div>
                            )) : "Loading..."
                    }
                    <ProductModal product={product} img={props.images[ind]} closeModal={closeModal} />
                </div>
            </Bounce>
        </>
    )
}

export default connect((state) => {
    return {
        products: state.products.filteredProducts
    }
}, { fetchProduct, addToCart })(Products)