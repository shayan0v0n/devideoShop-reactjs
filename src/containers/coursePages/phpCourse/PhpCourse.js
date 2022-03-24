import React, {useEffect} from 'react'
import './PhpCourse.scss'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CoursesCard from '../../../components/coursesCard/CoursesCard';
import { useDispatch, useSelector } from 'react-redux'
import { coursesAction } from '../../../actions/courses-action'
import ErrorAlert from '../../../components/shareComponents/errorAlert/ErrorAlert';
import SpinnerLoading from '../../../components/shareComponents/spinnerLoading/SpinnerLoading';
import { useNavigate } from 'react-router-dom';

const PhpCourse = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const coursesData = useSelector(state => state.courseDatas)
    useEffect(() => {
        dispatch(coursesAction())
    }, [dispatch])
    
    const detailPathHandler = (cardPath) => {
        navigate(`/skills/php/${cardPath}`);
    }

    let phpCourseDOM = null;
    if (coursesData.error) {
        phpCourseDOM = (
            <ErrorAlert>
                لطفا فیلترشکن خود را روشن کنید...
            </ErrorAlert>
        )
    }else if (coursesData.courses[2]) {
        phpCourseDOM = (
            coursesData.courses[2].map(item => (
                <Col sm={12} md={4} xl={3} key={item.cardID}>
                    <CoursesCard 
                        detailPath={() => detailPathHandler(item.cardPath)}
                        cardTitle={item.cardTitle}
                        cardText={item.cardText}
                        cardPrice={item.cardPrice}
                        cardSrc={`/assets/img/${item.cardPath}.webp`} />
                </Col>
            ))
        )
    }else {
        phpCourseDOM = (
            <SpinnerLoading />
        )
    }

    return (
        <main>
            <section className="py-3 d-flex align-item-center section-one">
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="d-flex justify-content-center">
                            <Image src={'/assets/img/undraw_server_cluster_jwwq.svg'} fluid className="d-md-block d-none section-three-img" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                <h2 className="p-2">دوره آموزشی پی اچ پی</h2>
                                <p className="p-2">بخش «مسیر یادگیری» در تلاش است تا از پیچیدگی فرایند آموزشی کاسته و مسیر روشنی را برای طی کردن دوره‌های آموزشی در اختیار شما قرار دهد. هر کدام از مسیرهای یادگیری، از نقطه صفر شروع شده و شما را تا پیشرفته شدن همراهی می‌کند. پیش رفتن با هر قدم از این مسیر می‌تواند دید بسیار خوبی به شما از فرایند آموزشی و میزان پیشرفت خودتان را ارائه دهد.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-3" dir="rtl">
                <Container>
                    <Row className="g-3">
                        {phpCourseDOM}
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default PhpCourse