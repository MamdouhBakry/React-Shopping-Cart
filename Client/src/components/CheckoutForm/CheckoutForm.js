import React from 'react'
import "../../css/CheckoutForm/CheckoutForm.css";
import Input from '../Input/Input';
export default function CheckoutForm(props) {
    return (
        <>
            {
                props.showForm && <div className="checkout-form">
                    <span onClick={() => props.setShowForm(false)} className="close-icon">&times;</span>
                    <form onSubmit={props.submitOrder}>
                        <Input
                            label="Name"
                            type="text"
                            onChange={props.handleChange}
                            name="name"
                        />
                        <Input
                            label="Email"
                            type="email"
                            onChange={props.handleChange}
                            name="email"
                        />
                        <div>
                            <button type="submit">Checkout</button>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}
