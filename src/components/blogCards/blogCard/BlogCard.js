import React from 'react'
import {Card} from 'react-bootstrap'
import './blogCard.scss'

const BlogCard = (props) => {
    const { cardTitle, cardBody, blogDetail } = props
    return (
        <Card dir="rtl" className="gap-2 blog-card-custom" onClick={blogDetail}>
            <Card.Img src={'/assets/img/blog.png'} className="pb-3" />
            <Card.Body>
                <Card.Title className="pb-1">{cardTitle}</Card.Title>
                <Card.Text>{cardBody}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BlogCard
