import React, { useEffect, useState } from 'react';
import './Login.scss'
import {Modal, Button, Form} from 'react-bootstrap'

const Login = props => {
  const [btnSuccess, setBtnSuccess] = useState(false)
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  const checkCharCounter = (field) => field.length > 8 ? true : false

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
      setPasswordSuccess(false)
      setPasswordError("");
      setPasswordError("رمز عبور کمتر از 8 کاراکتر دارد");
    }
  }

  useEffect(() => {
    checkEmailValidate()
    checkPasswordValidate()
    if (passwordSuccess && emailSuccess) {
      setBtnSuccess(true)
    }else {
      setBtnSuccess(false)
    }
  }, [email, password])


    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dir="rtl"
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group className="mb-3">
                  <Form.Label>ایمیل خود را وارد کنید</Form.Label>
                  <Form.Control
                   type="email"
                   placeholder="ایمیل" 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
                  {emailError ? (<span className="text-danger">{emailError}</span>) : null}
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>رمز خود را وارد کنید</Form.Label>
                  <Form.Control
                   type="password"
                   placeholder="رمز عبور"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} />
                  {passwordError ? (<span className="text-danger">{passwordError}</span>) : null}
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {btnSuccess ? (<Button onClick={props.onHide} className="w-100 btn-success">ورود</Button>) :
          (<Button onClick={props.onHide} className="w-100 btn-success" disabled>ورود</Button>)}
        </Modal.Footer>
    </Modal>
  )
}

export default Login;