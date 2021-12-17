import React from 'react'
import './PersonCard.scss'
import { Card } from 'react-bootstrap'

const PersonCard = () => {
    return (
        <Card className="text-center personal-card-custom card-body-custom">
            <div className="py-3 personal-card-custom">
                <Card.Img src={'./assets/img/me.jpg'} fluid className="rounded-circle w-25" />
            </div>
            <Card.Body className="personal-card-custom ">
                <Card.Title>Shayan Vosoughi</Card.Title>
                <Card.Text>Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem</Card.Text>
            </Card.Body>
            <Card.Footer className="personal-card-custom">
                <i className="fa fa-facebook px-1"></i>
                <i className="fa fa-instagram px-1"></i>
                <i className="fa fa-telegram px-1"></i>
                <i className="fa fa-twitter px-1"></i>
                <i className="fa fa-linkedin px-1"></i>
            </Card.Footer>
        </Card>
    )
}

export default PersonCard
