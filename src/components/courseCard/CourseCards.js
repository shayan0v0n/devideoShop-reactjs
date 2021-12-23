import React from 'react'
import './CourseCards.scss'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom' 

const CourseCards = (props) => {
    const navigate = useNavigate()
    const {classNameType, cardTitle, courseStep, courseRoutePath} = props
    return (
        <Card dir="rtl" className={classNameType} onClick={() => {navigate(courseRoutePath)}}>
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