import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import CoursesCard from '../../../components/coursesCard/CoursesCard';

const ReactjsCourse = () => {
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
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="159,000"
                            cardSrc="/assets/img/reactjs-course-1.webp"
                            cardTitle="آموزش React"
                            cardText="آموزش Reactjs راکت به شما کمک می‌کند به شکل جامع React را یاد بگیرید و در پروژه‌های Front-End خود از Reactjs استفاده کنید و سایت‌های SPA بسازید" />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="79,000"
                            cardSrc="/assets/img/reactjs-course-2.webp"
                            cardTitle="آموزش Redux"
                            cardText="در طول دوره آموزش redux (ریداکس) سعی می‌کنیم به شکل کامل و کاربردی روش استفاده از کتابخانه redux برای حل مشکل مدیریت stateها را به شما آموزش دهیم." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="150,000"
                            cardSrc="/assets/img/reactjs-course-3.webp"
                            cardTitle="آموزش Next.js"
                            cardText="دوره آموزش Next.js به شما کمک می‌کند SSR را برای React به سادگی راه‌اندازی کنید و یک وبسایت با سئو مناسب با React بوجود آورید." />
                        </Col>
                        <Col sm={12} md={3}>
                            <CoursesCard
                            cardPrice="99,000"
                            cardSrc="/assets/img/reactjs-course-4.webp"
                            cardTitle="آموزش پروژه محور React Native"
                            cardText="در طی دوره آموزش react native به شکل پروژه‌ محور و کامل این فریمورک react را به شما آموزش خواهم داد تا بتوانید با استفاده از آن اپلیکیشن خود را بسازید." />
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default ReactjsCourse