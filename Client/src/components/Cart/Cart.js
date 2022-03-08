import React, { useState } from 'react';
import "../../css/Cart/Cart.css";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Bounce from 'react-reveal/Bounce';

export default function Cart(props) {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");
    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        console.log("order", order);
    }
    const handleChange = (e) => {
        setValue((prevstate) => ({ ...prevstate, [e.target.name]: e.target.value }))
    }
    return (
        <>
            <div className="cart-wrapper">
                <div className="cart-title">{props.cartItems.length === 0 ? "Cart Is Empty" : `Ther is ${props.cartItems.length} In Cart`}</div>
                <>
                    <Bounce bottom cascade>
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
                    </Bounce>
                </>
                {
                    props.cartItems.length !== 0 && <div className="cart-footer">
                        <div className="total">Total: {
                            props.cartItems.reduce((acc, p) => {
                                return acc + p.price
                            }, 0)
                        }</div>
                        <button onClick={() => setShowForm(true)}>Select Products</button>
                    </div>
                }
                {/* Checkout Form */}
                <CheckoutForm
                    showForm={showForm}
                    submitOrder={submitOrder}
                    handleChange={handleChange}
                    setShowForm={setShowForm}
                />
            </div>
        </>
    )
}
