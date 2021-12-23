import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import SpinnerLoading from '../../components/spinnerLoading/SpinnerLoading'
import BlogCard from './blogCard/BlogCard'
import { blogAction } from '../../actions/blog-action'
import { useDispatch, useSelector } from 'react-redux'
import ErrorAlert from '../../components/errorAlert/ErrorAlert'
import { useNavigate } from 'react-router-dom'

const BlogCards = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const blogDataList = useSelector(state => state.blogData);
    const blogData = blogDataList.blogData.splice(0, 4);
    console.log(blogData)

    useEffect(() => {
        dispatch(blogAction());
    }, [])

    const blogDetailFunc = (ID) => {
        navigate(`/blog/${ID}`)
    }

    let blogCardDOM = null;
    if (blogDataList.loading) {
        blogCardDOM = (
            <SpinnerLoading />
        )
    }else if (blogDataList.error) {
        blogCardDOM = (
            <ErrorAlert />
        )
    }else {
        blogCardDOM = (
            <Row>
                {blogData.map(item => (
                    <Col sm={12} md={6} xl={3}>
                        <BlogCard cardTitle={item.title} cardBody={item.body} blogDetail={() => blogDetailFunc(item.id)} />
                    </Col>
                ))}
            </Row>
        )
    }

    return (
            <Container>
                {blogCardDOM}
            </Container>
    )
}

export default BlogCards;