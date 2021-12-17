import React from 'react'
import './Post.scss'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Post = ({postData, openSinglePost}) => {
    const navigate = useNavigate();
    return (
        <Card className="p-3 blog-card-custom" dir="rtl" onClick={openSinglePost}>
            <Card.Img src={'./assets/img/blog.png'} alt={postData.title} />
            <Card.Body>
                    <Card.Title>{postData.title}</Card.Title>
                    <Card.Text>{postData.body}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Post