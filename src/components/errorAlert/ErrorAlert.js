import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const ErrorAlert = () => {
    return (
        <Container>
            <Alert variant='danger' className="m-auto my-3" dir="rtl">
                <span>قطعی اینترنت، یک بار دیگر امتخان کنید...</span>
            </Alert>
        </Container>
    )
}

export default ErrorAlert
