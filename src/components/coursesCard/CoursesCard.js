import React from 'react'
import './CoursesCard.scss'
import { Card } from 'react-bootstrap'

const CoursesCard = props => {
    const { cardSrc, cardTitle, cardText, cardPrice} = props
    return (
        <Card dir="rtl">
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