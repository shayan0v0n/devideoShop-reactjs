import React from 'react'
import './SpinnerLoading.scss'
import { Spinner, Alert, Container } from 'react-bootstrap'

const SpinnerLoading = () => {
    return (
        <Container>
            <Alert className=" m-auto my-3 alert-custom" dir="rtl">
                <span>لطفا کمی منتظر بمانید....</span>
                <Spinner animation="border" size="xl" />
            </Alert>
        </Container>
    )
}

export default SpinnerLoading