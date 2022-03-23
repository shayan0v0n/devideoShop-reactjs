import React, {useState, useEffect} from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './NotLogin.scss';
import Register from './register/Register';
import Login from './login/Login';

const NotLogin = props => {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);

    return (
        <>
            <span className="p-0 m-0"><OverlayTrigger
             placement="bottom"
             overlay={<Tooltip>نکته: به دلیل نبود دیتابیس <strong>اختصاصی</strong>، این قسمت در حال حاضر فعال نمیباشد</Tooltip>}>
                <span onClick={() => setLoginModal(true)}>ورود</span></OverlayTrigger> / <OverlayTrigger
                 placement="bottom"
                 overlay={<Tooltip>نکته: داده های شما به صورت کوکی ذخیره خواهد شد</Tooltip>}>
                <span onClick={() => setRegisterModal(true)}>ثبت نام</span>
                    </OverlayTrigger></span>
            <Register userLoggedInHandler={props.userLoggedIn} show={registerModal} onHide={() => setRegisterModal(false)} />
            {/* <Login show={loginModal} onHide={() => setLoginModal(false)} /> */}
        </>
    )
}

export default NotLogin;