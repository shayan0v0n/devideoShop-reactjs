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
                <h3>هیچ دوره ای وجود ندارد</h3>
            )
        }
    }else {
        courseDOM = (
            <h3>هیچ دوره ای وجود ندارد</h3>
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