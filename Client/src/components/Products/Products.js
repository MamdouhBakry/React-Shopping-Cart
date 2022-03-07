import React, { useState } from 'react'
import "../../css/Products/Products.css";
import ProductModal from './ProductModal';
export default function Products(props) {
    const [product, setProduct] = useState("");
    const [ind, setInd] = useState(0);
    const openModal = (product, index) => {
        setProduct(product);
        setInd(index);
    }
    const closeModal = () => {
        setProduct(false);
    }
    return (
        <>
            <div className="product-wrapper">
                {
                    props.products.map((product, index) => (
                        <div className="product-item" key={product.id}>
                            <a onClick={() => openModal(product, index)} href='#'>
                                <img src={props.images[index]} alt={product.title} />
                            </a>
                            <div className="product-desc">
                                <p>{product.title}</p>
                                <span>${product.price}</span>
                            </div>
                            <button onClick={() => props.AddToCart(product)}>Add To Cart</button>
                        </div>
                    ))
                }
                <ProductModal product={product} img={props.images[ind]} closeModal={closeModal} />
            </div>
        </>
    )
}
