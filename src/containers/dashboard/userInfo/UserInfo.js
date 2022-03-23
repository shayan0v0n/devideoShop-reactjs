import React, { useState } from 'react';
import './UserInfo.scss';
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserInfo = props => {
    const prevUserInfoStorage = localStorage.getItem("userInfo");
    const [userInfoStorage, setUserInfoStorage] = useState(JSON.parse(prevUserInfoStorage));
    const [changeDataValidate, setChangeDataValidate] = useState(false);
    const [noValueValidate, setNoValueValidate] = useState(true);

    const changeUserInfoHandler = (target, prevEvent) => {
        const prevUserInfo = {...userInfoStorage};
        const changeUserInfo = prevEvent

        if (!changeUserInfo) setNoValueValidate(false);
        else setNoValueValidate(true);

        prevUserInfo[target] = changeUserInfo;
        setUserInfoStorage(prevUserInfo)
        setChangeDataValidate(true)
        console.log(prevUserInfo)
    }

    const changeUserHandler = () => localStorage.setItem("userInfo", JSON.stringify(userInfoStorage))

    return (
        <main className="userInfo-form">
            <Container>
                <Form>
                    <Row>
                        <Col xl="6" className="mb-3">
                            <Form.Group>
                                <Form.Label>نام کاربری جدید خود را وارد کنید</Form.Label>
                                <Form.Control
                                 type="text"
                                 placeholder="نام کاربری"
                                 value={userInfoStorage.username}
                                 onChange={(e) => changeUserInfoHandler("username", e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xl="6" className="mb-3">
                            <Form.Group>
                                <Form.Label>رمز عبور جدید خود را وارد کنید</Form.Label>
                                <Form.Control
                                 type="password"
                                 placeholder="رمز عبور"
                                 value={userInfoStorage.password}
                                 onChange={(e) => changeUserInfoHandler("password", e.target.value)} />
                            </Form.Group>

                        </Col>
                        <Col xl="12" className="mb-3">
                            <Form.Group>
                                <Form.Label>ایمیل جدید خود را وارد کنید</Form.Label>
                                <Form.Control
                                 type="email"
                                 placeholder="ایمیل"
                                 value={userInfoStorage.email}
                                 onChange={(e) => changeUserInfoHandler("email", e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xl="12" className="mb-3">
                            {changeDataValidate && noValueValidate ?
                             (<Link to="/"><Button className="btn-success w-100" onClick={changeUserHandler}>ویرایش</Button></Link>): 
                             (<Button className="btn-success w-100" disabled>ویرایش</Button>)}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </main>
    )
}

export default UserInfo;