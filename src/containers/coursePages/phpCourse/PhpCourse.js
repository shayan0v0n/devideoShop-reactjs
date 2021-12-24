import React from 'react'
import './PhpCourse.scss'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CoursesCard from '../../../components/coursesCard/CoursesCard';

const PhpCourse = () => {
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
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="100,000"
                            cardSrc="/assets/img/php-course-1.webp"
                            cardTitle="آموزش PHP"
                            cardText="در دوره آموزش PHP ما سعی می‌کنیم PHP را به شکل جامع و کاملا رایگان به شما آموزش دهیم تا با استفاده از PHP بتوانید سایت‌های خود را بسازید." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="200,000"
                            cardSrc="/assets/img/php-course-2.webp"
                            cardTitle="آموزش MySQL"
                            cardText="در دوره آموزش MySQL به شکل کامل از سطح مقدماتی تا پیشرفته کار با پایگاه داده MySQL را به شما آموزش می‌دهیم تا شما بتوانید به سادگی با آن کار کنید." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="19,000"
                            cardSrc="/assets/img/php-course-3.webp"
                            cardTitle="آموزش php 7"
                            cardText="چند مدتی از ارائه نسخه پایدار php ۷ میگذره . برای همین تصمیم گرفتم تا یک دوره آموزشی ویدیویی از ویژگی های جدید این نسخه php رو براتون آماده کنم . " />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="190,000"
                            cardSrc="/assets/img/php-course-4.webp"
                            cardTitle="آموزش شئ‌گرایی در PHP"
                            cardText="در طول دوره آموزش شئ‌گرایی PHP ما سعی می‌کنیم، شما را با مفاهیم مربوط به شئ‌گرایی در زبان PHP به شکل کامل و پروژه محور آشنا کنیم." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="89,000"
                            cardSrc="/assets/img/php-course-5.webp"
                            cardTitle="آموزش PHP8"
                            cardText="در دوره آموزش PHP8 سعی کرده‌ایم شما را با تغییرات و ویژگی‌های جدید PHP8 به شکل کامل و کاربردی آشنا کنیم تا بتوانید در پروژهای خود از PHP8 استفاده کنید" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default PhpCourse