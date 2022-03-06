import React, { useState } from 'react'
import "../../css/Products/Products.css";
import img1 from "../../Images/airePods.jpg";
import img2 from "../../Images/camera.jpg";
import img3 from "../../Images/laptop.jpg";
import img4 from "../../Images/shoes.jpg";
import ProductModal from './ProductModal';
export default function Products(props) {
    let images = [img1, img2, img3, img4]
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
                                <img src={images[index]} alt={product.title} />
                            </a>
                            <div className="product-desc">
                                <p>{product.title}</p>
                                <span>${product.price}</span>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    ))
                }
                <ProductModal product={product} img={images[ind]} closeModal={closeModal} />
            </div>
        </>
    )
}
