import React, {useEffect} from 'react';
import './JavascriptCourse.scss';
import { Container, Row, Col, Image } from 'react-bootstrap'
import CoursesCard from '../../../components/coursesCard/CoursesCard';
import { useDispatch, useSelector } from 'react-redux'
import SpinnerLoading from '../../../components/spinnerLoading/SpinnerLoading'
import { coursesAction } from '../../../actions/courses-action.js'
import ErrorAlert from '../../../components/errorAlert/ErrorAlert';

const JavascriptCourse = () => {
    const dispatch = useDispatch()
    const coursesData = useSelector(state => state.courseDatas)
    useEffect(() => {
        dispatch(coursesAction())
    }, [dispatch])
    
    let jsCourseDOM = null;
    if (coursesData.error) {
        jsCourseDOM = (
            <ErrorAlert>
                لطفا فیلترشکن خود را روشن کنید...
            </ErrorAlert>
        )
    }else if (coursesData.courses[0]) {
        jsCourseDOM = (
            coursesData.courses[0].map(item => (
                <Col sm={12} md={4} xl={3}>
                    <CoursesCard 
                        cardTitle={item.cardTitle}
                        cardText={item.cardText}
                        cardPrice={item.cardPrice}
                        cardSrc={`/assets/img/javascript-course-${item.cardID}.webp`} />
                </Col>
            ))
        )
    }else {
        jsCourseDOM = (
            <SpinnerLoading />
        )
    }

    console.log(coursesData)


    return (
        <main>
            <section className="py-3 d-flex align-item-center section-one">
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="d-flex justify-content-center">
                            <Image src={'/assets/img/undraw_mobile_app_re_catg.svg'} fluid className="d-md-block d-none section-three-img" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                <h2 className="p-2">دوره آموزشی جاوااسکریپت</h2>
                                <p className="p-2">جاوا اسکریپت یکی از زبان‌های بسیار قدرتمند است که هر روز در حال پیشرفت و تکامل است، تکامل و پیشرفت جاوا اسکریپت را می‌توان بعد از پیدایش NodeJS به خوبی مشاهده کرد و این موضوع بسیار مهمی برای یادگیری جاوا اسکریپت است. در این مسیر راکت سعی دارد با آموزش‌های جاوا اسکریپ شما را با مهمترین ویژگی‌های جاوا اسکریپت و تکنولوژی‌هایی که به شما کمک می‌کند تا پروژه‌های خارق‌العاده‌ای را ایجاد کنید، آشنا کند. آموزش‌های این قسمت به صورت مرحله به مرحله هستند، پس شما می‌توانید برای تبدیل شدن به یک متخصص جاوا اسکریپت همین الان مراحل زیر و دوره‌ها را دنبال نمایید.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-3" dir="rtl">
                <Container>
                    <Row className="g-3">
                        {jsCourseDOM}
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default JavascriptCourse;