import React, {useState} from 'react';
import { Row, Col } from 'react-bootstrap'
import CheckoutCartItem from './checkoutCartItem/CheckoutCartItem'
import './Checkout.scss';
import CheckoutModal from './checkoutModal/CheckoutModal';

const Checkout = props => {
    const prevUserInfoStorage = localStorage.getItem("userInfo");
    const [userInfoStorage, setUserInfoStorage] = useState(JSON.parse(prevUserInfoStorage));
    const [checkoutModal, setCheckoutModal] = useState(false)
    let checkoutDOM = null;

    const deleteProductHandler = (cardID) => {
        const copiedUserInfoStorage = {...userInfoStorage}
        const copiedCartUserInfoStorage = [...userInfoStorage.cart];
        const filteredCartUserInfoStorage = copiedCartUserInfoStorage.filter(item => {
            return item.cardPath !== cardID
        })

        copiedUserInfoStorage["cart"] = filteredCartUserInfoStorage;

        setUserInfoStorage(copiedUserInfoStorage)
        localStorage.setItem("userInfo", JSON.stringify(copiedUserInfoStorage));
    }
    
    const allproductPrice = () => {
        let allProductsPrice = 0
        userInfoStorage.cart.map(item => {
            allProductsPrice = allProductsPrice + Number(item.cardPrice.split(',')[0]);
        })
        return `${allProductsPrice},000`
    }
    
    const checkout = () => {
        const copiedUserInfoStorage = {...userInfoStorage}
        const copiedCartUserInfoStorage = [...userInfoStorage.cart];
        const copiedApprovedCartUserInfoStorage = [...userInfoStorage.approvedCart];
        copiedUserInfoStorage["approvedCart"] = copiedCartUserInfoStorage.concat(copiedApprovedCartUserInfoStorage);
        copiedUserInfoStorage["cart"] = [];
        console.log(copiedUserInfoStorage);
        setUserInfoStorage(copiedUserInfoStorage)
        localStorage.setItem("userInfo", JSON.stringify(copiedUserInfoStorage));
    }

    if (userInfoStorage.cart) { 
        if (userInfoStorage.cart.length > 0) {
            checkoutDOM = (
                    <>
                        <div className="checkout-header">
                            <span>قیمت کل: {allproductPrice()}</span>
                            <a href='#' onClick={() => setCheckoutModal(true)}>تسویحه حساب</a>
                        </div>
                        <hr />
                        {userInfoStorage.cart.map(item => (
                        <Col xl="4" md="6" sm="12">
                            <CheckoutCartItem cardInfo={item} deleteProduct={deleteProductHandler} />
                        </Col>
                        ))}
                    </>
            )
        }else {
            checkoutDOM = (
                <h3>سبد خرید خالی می باشد</h3>
            )
        }
    }else {
        checkoutDOM = (
            <h3>سبد خرید خالی می باشد</h3>
        )
    }

    return (
        <div>
            <Row className='dashboard-checkout'>
                {checkoutDOM}
            </Row>
            <CheckoutModal show={checkoutModal} onHide={() => setCheckoutModal(false)} checkoutHandler={checkout} allproductPrice={allproductPrice} userInfo={userInfoStorage} />
        </div>
    )
}

export default Checkout;
