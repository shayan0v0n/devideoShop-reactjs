import React from 'react'
import './Post.scss'
import { Card } from 'react-bootstrap'

const Post = ({postData, openSinglePost}) => {
    return (
        <Card className="p-3 blog-card-custom animate__animated animate__fadeIn" dir="rtl" onClick={openSinglePost}>
            <Card.Img src={'./assets/img/blog.png'} alt={postData.title} />
            <Card.Body>
                    <Card.Title>{postData.title}</Card.Title>
                    <Card.Text>{postData.body}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Post