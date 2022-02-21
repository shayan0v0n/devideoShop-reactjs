import React, { useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CoursesCard from '../../../components/coursesCard/CoursesCard';
import { useDispatch, useSelector } from 'react-redux'
import { coursesAction } from '../../../actions/courses-action'
import ErrorAlert from '../../../components/errorAlert/ErrorAlert';
import SpinnerLoading from '../../../components/spinnerLoading/SpinnerLoading';
import { useNavigate } from 'react-router-dom';

const ReactjsCourse = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const coursesData = useSelector(state => state.courseDatas)
    useEffect(() => {
        dispatch(coursesAction())
    }, [dispatch])

    const detailPathHandler = (cardPath) => {
        navigate(`/skills/reactjs/${cardPath}`);
    }
    
    let reactjsCourseDOM = null;
    if (coursesData.error) {
        reactjsCourseDOM = (
            <ErrorAlert>
                لطفا فیلترشکن خود را روشن کنید...
            </ErrorAlert>
        )
    }else if (coursesData.courses[1]) {
        reactjsCourseDOM = (
            coursesData.courses[1].map(item => (
                <Col sm={12} md={4} xl={3} key={item.cardID}>
                    <CoursesCard
                        detailPath={() => {detailPathHandler(item.cardPath)}}
                        cardTitle={item.cardTitle}
                        cardText={item.cardText}
                        cardPrice={item.cardPrice}
                        cardSrc={`/assets/img/${item.cardPath}.webp`} />
                </Col>
            ))
        )
    }else {
        reactjsCourseDOM = (
            <SpinnerLoading />
        )
    }

    return (
        <main>
            <section className="py-3 d-flex align-item-center section-one">
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="d-flex justify-content-center">
                            <Image src={'/assets/img/undraw_modern_design_v-3-wv.svg'} fluid className="d-md-block d-none section-three-img" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                <h2 className="p-2">دوره آموزشی ری اکت</h2>
                                <p className="p-2">ری‌اکت یکی از کتابخانه های جاوااسکریپت محسوب می‌شود که با امکاناتی که دارد، میتواند به شما کمک کند اپلیکیشن های وب و تلفن همراه بسیار زیبای بوجود آورید . این کتابخانه در ایران و جهان، محبوبیت بسیار زیادی دارد و اگر شما از آن دسته از افرادی هستید که می‌خواهید بروز باشید، پس react یکی از چیزهایست که شما میتوانید آن را فرا بگیرید.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
                        <section className="py-3" dir="rtl">
                <Container>
                    <Row className="g-3">
                        {reactjsCourseDOM}
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default ReactjsCourse