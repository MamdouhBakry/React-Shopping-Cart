import React from 'react'
import Modal from "react-modal";
export default function ProductModal(props) {
    return (
        <>
            <Modal isOpen={props.product} onRequestClose={() => props.closeModal()}>
                <span className="close-icon" onClick={() => props.closeModal()}>&times;</span>
                <div className="product-info">
                    <img src={props.img} alt={props.product.title} />
                    <p>{props.product.title}</p>
                    <p>{props.product.desc}</p>
                </div>
            </Modal>
        </>
    )
}
