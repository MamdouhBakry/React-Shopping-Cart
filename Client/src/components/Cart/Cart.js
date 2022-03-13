import React, { useState } from 'react';
import "../../css/Cart/Cart.css";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Bounce from 'react-reveal/Bounce';
import Modal from "react-modal";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import { createOrder, clearOrder } from "../../store/actions/order";
import OrderModal from './OrderModal';

function Cart(props) {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");
    const submitOrder = (e) => {
        e.preventDefault();
        const order = {
            name: value.name,
            email: value.email
        }
        props.createOrder(order);
    }
    const handleChange = (e) => {
        setValue((prevstate) => ({ ...prevstate, [e.target.name]: e.target.value }))
    }
    const closeModal = () => {
        setShowForm(false);
        props.clearOrder();
    }
    return (
        <>
            <div className="cart-wrapper">
                <div className="cart-title">{props.cartItems.length === 0 ? "Cart Is Empty" : `Ther is ${props.cartItems.length} In Cart`}</div>
                {/* Modal */}
                <OrderModal order={props.order} closeModal={closeModal} cartItems={props.cartItems} />
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
                                            <button onClick={() => props.removeCart(item)}>Remove</button>
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

export default connect((state) => {
    return {
        cartItems: state.cart.cartItems,
        order: state.order.order
    }
}, { removeCart, createOrder, clearOrder })(Cart)