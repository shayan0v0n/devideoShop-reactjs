import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './blogCard/BlogCard'

const BlogCards = () => {
    return (
            <Container>
                <Row>
                    <Col sm={12} md={6} xl={3}>
                        <BlogCard
                         cardImage="/assets/img/php.webp"
                         cardTitle="چگونه پی اچ پی یاد بپیریم"/>
                    </Col>
                    <Col sm={12} md={6} xl={3}>
                    <BlogCard
                         cardImage="/assets/img/laravel.png"
                         cardTitle="چگونه پی اچ پی یاد بپیریم"/>
                    </Col>
                    <Col sm={12} md={6} xl={3}>
                    <BlogCard
                         cardImage="/assets/img/nextjs.jpg"
                         cardTitle="چگونه پی اچ پی یاد بپیریم"/>
                    </Col>
                    <Col sm={12} md={6} xl={3}>
                    <BlogCard
                         cardImage="/assets/img/reactjs.jpg"
                         cardTitle="چگونه پی اچ پی یاد بپیریم"/>
                    </Col>
                </Row>
            </Container>
    )
}

export default BlogCards