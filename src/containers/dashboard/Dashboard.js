import React, { useState } from 'react';
import './Dashboard.scss';
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Courses from './courses/Courses'
import UserInfo from './userInfo/UserInfo'
import Checkout from './checkout/Checkout'

const Dashboard = props => {
    const isAuthHandler = useSelector(state => state.isAuth);
    const [ dashboardState, setDashboardState ] = useState("checkout")

    const signoutHandler = () => {
        localStorage.clear();
        isAuthHandler.login();
    }

    let dashboardDOM = null;
    if (dashboardState === "courses") {
        dashboardDOM = (
            <Courses />
        )
    }else if (dashboardState === "checkout") {
        dashboardDOM = (
            <Checkout />
        )
    }else {
        dashboardDOM = (
            <UserInfo />
        )
    }

    return (
        <Container fluid dir="rtl">
            <Row>
                <Col xl="2" className=" border border-danger d-flex align-content-center">
                    <div className="p-2 flex-column align-items-center m-auto">
                        <Link to="/" className="dashboard-control-container "><span className="d-block my-2 dashboard-control"> <i className="fa fa-home"></i> صفحه اصلی </span></Link>
                        <span className="d-block my-3 dashboard-control " onClick={() => setDashboardState("checkout")}><i className="fa fa-shopping-cart"></i> سبد خرید</span>
                        <span className="d-block my-3 dashboard-control " onClick={() => setDashboardState("courses")}><i className="fa fa-video-camera"></i> دوره آموزشی</span>
                        <span className="d-block my-3 dashboard-control " onClick={() => setDashboardState("userinfo")}><i className="fa fa-user"></i> اطلاعات حساب کاربری</span>
                        <Link to="/" className="dashboard-control-container "><span className="d-block my-3 dashboard-control" onClick={signoutHandler}><i className="fa fa-sign-out"></i> خروج</span></Link>
                    </div>
               </Col>
                <Col xl="10" className=" border border-warning">
                    {dashboardDOM}
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;