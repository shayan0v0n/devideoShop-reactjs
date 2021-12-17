import React from 'react'
import {Card} from 'react-bootstrap'

const BlogCard = (props) => {
    const { cardImage, cardTitle } = props
    return (
        <Card dir="rtl" className="gap-2">
            <Card.Img src={cardImage} className="pb-3" />
            <Card.Body>
                <Card.Title className="pb-1">{cardTitle}</Card.Title>
                <Card.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BlogCard
