import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import CartItems from './cartItems/CartItems';
import './Courses.scss';

const Courses = props => {
    const prevUserInfoStorage = localStorage.getItem("userInfo");
    const [userInfoStorage, setUserInfoStorage] = useState(JSON.parse(prevUserInfoStorage));
    let courseDOM = null;

    if (userInfoStorage.approvedCart) { 
        if (userInfoStorage.approvedCart.length > 0) {
            courseDOM = (
                userInfoStorage.approvedCart.map(item => (
                    <Col xl="4" md="6" sm="12">
                        <CartItems cardInfo={item} />
                    </Col>
                ))
            )
        }else {
            courseDOM = (
                <div className="text-center">
                    <div className='mt-5'>
                        <h3>هیچ دوره ای خریداری نشده</h3>
                        <hr />
                        <span>لطفا برای خرید محصول وارد قسمت فروشگاه شوید و محصول را به سبد خرید اضافه کنید</span>
                    </div>
                </div>
            )
        }
    }else {
        courseDOM = (
            <div className="text-center">
                <div className='mt-5'>
                    <h3>هیچ دوره ای خریداری نشده</h3>
                    <hr />
                    <span>لطفا برای خرید محصول وارد قسمت فروشگاه شوید و محصول را به سبد خرید اضافه کنید</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Row className='dashboard-checkout'>
                {courseDOM}
            </Row>
        </div>
    )
}

export default Courses;