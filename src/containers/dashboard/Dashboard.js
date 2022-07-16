import React, { useState } from 'react';
import './Dashboard.scss';
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ExitModal from './exitModal/ExitModal';
import Courses from './courses/Courses'
import UserInfo from './userInfo/UserInfo'
import Checkout from './checkout/Checkout'

const Dashboard = props => {
    const isAuthHandler = useSelector(state => state.isAuth);
    const [ dashboardState, setDashboardState ] = useState("checkout")
    const [ exitModal, setExitModal ] = useState(false);
    const [ exitRes, setExitRes ] = useState(false);
    const navigate = useNavigate()
    const setExitModalHandler = modalStatus => setExitModal(modalStatus)

    const signoutHandler = () => setExitModal(true)
    
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
    
    if (exitRes) {
        localStorage.clear();
        isAuthHandler.login();
        navigate('/')
    }

    return (
        <Container fluid dir="rtl">
            <ExitModal show={exitModal} handleClose={setExitModalHandler} setExitResHandler={setExitRes} />
            <Row>
                <Col xl="2" className='d-flex flex-column justify-content-center'>
                    <div className="p-2 d-flex flex-column justify-content-center">
                        <Link to="/" className="dashboard-control-container "><span className="d-block my-2 dashboard-control"> <i className="fa fa-home"></i> صفحه اصلی </span></Link>
                        <span className="d-block my-3 dashboard-control " onClick={() => setDashboardState("checkout")}><i className="fa fa-shopping-cart"></i> سبد خرید</span>
                        <span className="d-block my-3 dashboard-control " onClick={() => setDashboardState("courses")}><i className="fa fa-video-camera"></i> دوره آموزشی</span>
                        <span className="d-block my-3 dashboard-control " onClick={() => setDashboardState("userinfo")}><i className="fa fa-user"></i> اطلاعات حساب کاربری</span>
                        <span className="d-block my-3 dashboard-control" onClick={signoutHandler}><i className="fa fa-sign-out"></i> خروج</span>
                    </div>
               </Col>
                <Col xl="10">
                    {dashboardDOM}
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;