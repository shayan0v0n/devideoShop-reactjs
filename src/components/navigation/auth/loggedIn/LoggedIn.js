import React from 'react';
import './LoggedIn.scss';
import { Link } from 'react-router-dom'

const LoggedIn = props => {
    return (
            <Link to="/dashboard" className=" login-button">
                <p className="p-0 m-0">حساب کاربری</p>
            </Link>
    )
}

export default LoggedIn;