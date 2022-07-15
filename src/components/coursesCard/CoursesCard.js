import React from 'react'
import './CoursesCard.scss'
import { Card } from 'react-bootstrap'

const CoursesCard = props => {
    const { cardSrc, cardTitle, cardText, cardPrice, detailPath} = props
    return (
        <Card dir="rtl" onClick={detailPath} style={{cursor: "pointer"}} className="animate__animated animate__fadeIn">
            <Card.Header>
                <Card.Img src={cardSrc} />
            </Card.Header>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardText}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Text>قیمت دوره: {cardPrice} تومان </Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default CoursesCard