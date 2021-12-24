import React from 'react'
import './LaravelCourse.scss'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CoursesCard from '../../../components/coursesCard/CoursesCard';

const LaravelCourse = () => {
    return (
        <main>
            <section className="py-3 d-flex align-item-center section-one">
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="d-flex justify-content-center">
                            <Image src={'/assets/img/undraw_develop_app_re_bi4i.svg'} fluid className="d-md-block d-none section-three-img" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                <h2 className="p-2">دوره آموزشی لاراول</h2>
                                <p className="p-2">بخش «مسیر یادگیری» در تلاش است تا از پیچیدگی فرایند آموزشی کاسته و مسیر روشنی را برای طی کردن دوره‌های آموزشی در اختیار شما قرار دهد. هر کدام از مسیرهای یادگیری، از نقطه صفر شروع شده و شما را تا پیشرفته شدن همراهی می‌کند. پیش رفتن با هر قدم از این مسیر می‌تواند دید بسیار خوبی به شما از فرایند آموزشی و میزان پیشرفت خودتان را ارائه دهد.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-3" dir="rtl">
                <Container>
                    <Row className="g-3">
                        <Col sm={12} md={4}>
                            <CoursesCard
                            cardPrice="100,000"
                            cardSrc="/assets/img/laravel-course-1.webp"
                            cardTitle="آموزش لاراول"
                            cardText="فریمورک لاراول یکی از محبوب‌ترین و بهترین فریمورک‌های حال حاضر برای زبان PHP است، آموزش لاراول راکت می‌تواند به شکل رایگان به شما لاراول را آموزش دهد." />
                        </Col>
                        <Col sm={12} md={4}>
                            <CoursesCard
                            cardPrice="59,000"
                            cardSrc="/assets/img/laravel-course-2.webp"
                            cardTitle="آشنایی با امکانات جدید لاراول 7"
                            cardText="در دوره آشنایی با امکانات لاراول ۷ ما سعی می‌کنیم شما را با امکاناتی که در لاراول ۷ اضافه شده به شکل کامل به شکل رایگان آشنا کنیم" />
                        </Col>
                        <Col sm={12} md={4}>
                            <CoursesCard
                            cardPrice="29,000"
                            cardSrc="/assets/img/laravel-course-3.webp"
                            cardTitle="آشنایی با امکانات جدید لاراول 8"
                            cardText="لاراول ۸ با تغییرات جدیدی ارائه شده که ما در دوره آشنایی با امکانات لاراول ۸ سعی داریم شما را با این امکانات جدید به شکل کامل آشنا کنیم" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default LaravelCourse
