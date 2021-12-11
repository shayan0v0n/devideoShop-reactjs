import React from 'react'
import './CourseCards.scss'
import { Card } from 'react-bootstrap'

const CourseCards = (props) => {
    const {classNameType, cardTitle, courseStep} = props
    return (
        <Card dir="rtl" className={classNameType}>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون 
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Card.Subtitle className="text-center">شامل {courseStep} دوره</Card.Subtitle>
            </Card.Footer>
        </Card>
    )
}

export default CourseCards
