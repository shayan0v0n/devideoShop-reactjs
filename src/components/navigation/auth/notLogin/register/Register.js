import React, { useState, useEffect } from "react";
import './Register.scss';
import {Modal, Button, Form} from 'react-bootstrap';

const Register = props => {
  const [btnSuccess, setBtnSuccess] = useState(false)
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [usernameSuccess, setUsernameSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const checkCharCounter = (field) => field.length > 8 ? true : false

  const checkUsernameValidate = () => {
    if (checkCharCounter(username)) {
        setUsernameError("");
        setUsernameSuccess(true)
    }else {
      setUsernameSuccess(false)
      setUsernameError("");
      setUsernameError("نام کاربری کمتر از 8 کاراکتر دارد");
    }
  }

  const checkEmailValidate = () => {
    if (checkCharCounter(email)) {
        setEmailSuccess(true)
        setEmailError("");
    }else {
      setEmailSuccess(false)
      setEmailError("");
      setEmailError("ایمیل شما درست نمیباشد");
    }
  }

  const checkPasswordValidate = () => {
    if (checkCharCounter(password)) {
        setPasswordSuccess(true)
        setPasswordError("");
    }else {
      setPasswordError("");
      setPasswordSuccess(false)
      setPasswordError("رمز عبور کمتر از 8 کاراکتر دارد");
    }
  }

  useEffect(() => {
    checkUsernameValidate()
    checkEmailValidate()
    checkPasswordValidate()
    if (usernameSuccess && passwordSuccess && emailSuccess) {
        setBtnSuccess(true)
    }else {
      setBtnSuccess(false)
    }
  }, [username, email, password]);

  const registerHandler = () => {
    const usernameData = username;
    const emailData = email;
    const passwordData = password;
    const cartData = [];
    const approvedCartData = [];
  
    const postData = {
      username: usernameData,
      email: emailData,
      password: passwordData,
      cart: cartData,
      approvedCart: approvedCartData
    }
  
    localStorage.setItem("userInfo", JSON.stringify(postData));
    props.userLoggedInHandler();
    setUsername("");
    setEmail("");
    setPassword("");
    
    props.onHide();
  }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dir="rtl"
      >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter" className="text-center"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>نام کاربری خود را وارد کنید</Form.Label>
                    <Form.Control
                     className="mb-1"
                     required
                     type="text"
                     placeholder="نام کاربری"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}/>
                     {usernameError ? (<span className="text-danger">{usernameError}</span>) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>ایمیل خود را وارد کنید</Form.Label>
                    <Form.Control
                     required
                     type="email"
                     className="mb-1"
                     placeholder="ایمیل"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
                     {emailError ? (<span className="text-danger">{emailError}</span>) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>رمز خود را وارد کنید</Form.Label>
                    <Form.Control
                     required
                     className="mb-1"
                     type="password"
                     placeholder="رمز عبور"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
                     {passwordError ? (<span className="text-danger">{passwordError}</span>) : null}
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {btnSuccess ? (<Button onClick={registerHandler} className="w-100 btn-success">ثبت نام</Button>)
            : (<Button onClick={registerHandler} className="w-100 btn-success" disabled>ثبت نام</Button>)}
          </Modal.Footer>
      </Modal>
    )
}

export default Register;