import React from 'react';
import "../../css/Cart/Cart.css";
export default function Cart(props) {
    return (
        <>
            <div className="cart-wrapper">
                <div className="cart-title">{props.cartItems.length === 0 ? "Cart Is Empty" : `Ther is ${props.cartItems.length} In Cart`}</div>
                <div className="cart-items">
                    {
                        props.cartItems.map((item, index) => (
                            <div className="cart-item">
                                <img src={props.images[index]} alt={item.title} />
                                <div className="cart-info">
                                    <div>
                                        <p>{item.title}</p>
                                        <p>{item.qty}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <button onClick={() => props.removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
