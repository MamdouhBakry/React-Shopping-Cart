import React, { useEffect } from 'react';
import { fetchOrders } from '../../store/actions/order';
import { connect } from "react-redux";
import "../../css/Orders/Orders.css"

function Orders(props) {
    useEffect(() => {
        props.fetchOrders()
    }, [])
    const { orders } = props;
    return (
        <>
            {
                orders &&
                <div className="orders">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{props.cartItems.map((item, index) => (
                                        <p key={index}>{item.title} , {item.qty}</p>
                                    ))}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default connect((state) => {
    return {
        orders: state.order.orders,
        cartItems: state.cart.cartItems
    }
}, { fetchOrders })(Orders)