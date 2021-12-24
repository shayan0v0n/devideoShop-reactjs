import React from 'react';
import './JavascriptCourse.scss';
import { Container, Row, Col, Image } from 'react-bootstrap'
import CoursesCard from '../../../components/coursesCard/CoursesCard';

const JavascriptCourse = () => {
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
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="125,000"
                            cardSrc="/assets/img/javascript-course-1.webp"
                            cardTitle="آموزش جاوااسکریپت"
                            cardText="در دوره آموزش جاوااسکریپت (JavaScript) ما سعی داریم که جاوااسکریپت را به شکل کامل از سطح مقدماتی تا پیشرفته به شما آموزش دهیم." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="145,000"
                            cardSrc="/assets/img/javascript-course-2.webp"
                            cardTitle="آموزش جاوا اسکریپت ES6"
                            cardText="در آموزش جاوااسکریپت ES6 ما سعی داریم ویژگی‌های جدیدی که در جاوااسکریپت ECMAScript 6به جاوااسکریپت اضافه شده را به شما آموزش دهیم." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="39,000"
                            cardSrc="/assets/img/javascript-course-3.webp"
                            cardTitle="آموزش جاوا اسکریپت ES7 و ES8"
                            cardText="در طی دوره آموزش جاوا اسکریپت es۷ و es۸ ما سعی داریم در چند جلسه موارد جدید از ویژگی‌های که در این ورژن از ecma script معرفی شده را به شما آموزش دهیم." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="159,000"
                            cardSrc="/assets/img/javascript-course-4.webp"
                            cardTitle="آموزش پروژه محور جاوااسکریپت"
                            cardText="در دوره پروژه‌های جاوااسکریپت ما سعی کرده‌ایم جاوااسکریپت را در قالب پروژه‌های بزرگ و کوچک، ساده و پیشرفته به شما آموزش دهیم." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="59,000"
                            cardSrc="/assets/img/javascript-course-5.webp"
                            cardTitle="Unit Test در جاوااسکریپت"
                            cardText="در قالب این دوره آموزش تست نویسی در جاوا اسکریپت قصد داریم به شکل کامل و جامع روش نوشتن تست‌های مختلف برای پروژ‌های جاوا اسکریپت را به شما آموزش دهیم." />
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default JavascriptCourse;