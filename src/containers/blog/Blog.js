import React, {useEffect} from 'react'
import './Blog.scss'
import { Row, Col, Container } from 'react-bootstrap'
import Post from './post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { blogAction } from '../../actions/blog-action'
import SpinnerLoading from '../../components/spinnerLoading/SpinnerLoading'
import ErrorAlert from '../../components/errorAlert/ErrorAlert'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const blogDataList = useSelector(state => state.blogData)
    useEffect(() => {
        dispatch(blogAction())
    }, [dispatch])
    
    const openSinglePost = (id) => {
        navigate(`/blog/${id}`)
    }

    let blogDataDOM = null;
    if (blogDataList.loading) {
        blogDataDOM = (<SpinnerLoading />)
    }else if (!blogDataList.loading && blogDataList.error) {
        blogDataDOM = (<ErrorAlert>قطعی اینترنت، یک بار دیگر امتحان کنید...</ErrorAlert>)
    }else {
        blogDataDOM = (
            <Container>
                <Row className="mt-3 g-3">
                    {blogDataList.blogData.map(item => (
                        <Col sm={12} md={3} key={item.id}>
                            <Post postData={item} openSinglePost={() => openSinglePost(item.id)} />
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }

    return (
        <main>
            {blogDataDOM}
        </main>
    )
}

export default Blog