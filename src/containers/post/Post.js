import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Post.scss'
import { Card, Container } from 'react-bootstrap'
import { singlePostAction } from '../../actions/blog-action'
import { useDispatch, useSelector } from 'react-redux'
import SpinnerLoading from '../../components/spinnerLoading/SpinnerLoading'
import ErrorAlert from '../../components/errorAlert/ErrorAlert'

const Post = () => {
    const dispatch = useDispatch();
    const params = useParams()
    const singlePostBlogData = useSelector(state => state.singlePostBlog)
    useEffect(() => {
        dispatch(singlePostAction(params.id))
    }, dispatch)

    let singlePostDOM = null;

    if (singlePostBlogData.loading) {
        singlePostDOM = (<SpinnerLoading />)
    }else if(!singlePostBlogData.loading && singlePostBlogData.error) {
        singlePostDOM = (<ErrorAlert />)
    }else if (singlePostBlogData.singlePost) {
        singlePostDOM = (
            <Container>
                <Card className='my-3 single-post-custom p-2' dir="rtl">
                    <Card.Header>
                        <Card.Img src={'/assets/img/blog.png'} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{singlePostBlogData.singlePost.title}</Card.Title>
                        <Card.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</Card.Text>
                        <Card.Text>{singlePostBlogData.singlePost.body}</Card.Text>
                        <Card.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</Card.Text>
                        <Card.Text>{singlePostBlogData.singlePost.body}</Card.Text>
                        <Card.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</Card.Text>
                        <Card.Text>{singlePostBlogData.singlePost.body}</Card.Text>
                        <Card.Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }


    return (
        <main>
            {singlePostDOM}
        </main>
    )
}

export default Post