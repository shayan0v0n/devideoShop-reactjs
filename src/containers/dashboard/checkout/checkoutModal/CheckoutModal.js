import React, { useState } from 'react'
import './CheckoutModal.scss';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap'

const CheckoutModal = (props) => {

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dir="rtl">
    <Modal.Header closeButton></Modal.Header>
    <Modal.Body className="show-grid">
      <Container>
        <p className="text-center">قیمت کل: {props.allproductPrice()} تومان</p>
        <hr />
        {props.userInfo.cart.map(item => (
            <div className="product-item-modal">
                <span>{item.cardTitle}</span>
                <span>{item.cardPrice}</span>
            </div>
        ))}
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide} className="w-100 btn-success" onClick={props.checkoutHandler}>ادامه تسویحه حساب</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CheckoutModal