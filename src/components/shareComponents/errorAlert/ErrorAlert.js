import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const ErrorAlert = props => {
    return (
        <Container>
            <Alert variant='danger' className="m-auto my-3" dir="rtl">
                <span>{props.children}</span>
            </Alert>
        </Container>
    )
}

export default ErrorAlert