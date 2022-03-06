import React from 'react'
import "../../css/Products/Products.css";
import img1 from "../../Images/airePods.jpg";
import img2 from "../../Images/camera.jpg";
import img3 from "../../Images/laptop.jpg";
import img4 from "../../Images/shoes.jpg";
export default function Products(props) {
    let images = [img1, img2, img3, img4]
    return (
        <>
            <div className="product-wrapper">
                {
                    props.products.map((product, index) => (
                        <div className="product-item" key={product.id}>
                            <img src={images[index]} alt={product.title} />
                            <div className="product-desc">
                                <p>{product.title}</p>
                                <span>{product.price}</span>
                            </div>
                            <button>Add To Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
