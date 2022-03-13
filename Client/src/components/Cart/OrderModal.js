import React from 'react'
import Modal from "react-modal";
export default function OrderModal(props) {
    const { closeModal, cartItems, order } = props
    return (
        <>
            <Modal onRequestClose={closeModal} isOpen={order}>
                <div className="order-info">
                    <span onClick={closeModal} className="close-icon">&times;</span>
                    <p className="alert-success">order done success</p>
                    <table>
                        <tr>
                            <td>Name: </td>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <td>Total: </td>
                            <td>{cartItems.reduce((a, p) => {
                                return a + p.price;
                            }, 0)}</td>
                        </tr>
                        <tr>
                            <td>{cartItems.map(p => (
                                <div className="cart-data">
                                    <p>Number of this product: {p.qty}</p>
                                    <p>Title of product: {p.title}</p>
                                </div>
                            ))}</td>
                        </tr>
                    </table>
                </div>
            </Modal>
        </>
    )
}
