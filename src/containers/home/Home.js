import React from 'react'
import './ContainerHome.scss'
import { Col, Row, Image, Container } from 'react-bootstrap'
import CourseCards from '../../components/courseCard/CourseCards'

const Home = () => {
    return (
        <main>
            <section className="py-5 d-flex align-item-center section-one">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <Image src={'/assets/img/fundamentals.svg'} fluid className="d-none d-md-block w-75" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                <h2 className="p-2">لورم ایپسوم متن ساختگی</h2>
                                <p className="p-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="py-5 g-2">
                        <Col sm={12} md={6} xl={3}>
                            <CourseCards
                             classNameType="even-card-number"
                             cardTitle="PHP"
                             courseStep="5" />
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                        <CourseCards
                             classNameType="odd-card-number"
                             cardTitle="Laravel"
                             courseStep="2" />
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                        <CourseCards
                             classNameType="even-card-number"
                             cardTitle="Reactjs"
                             courseStep="3" />
                        </Col>
                        <Col sm={12} md={6} xl={3}>
                        <CourseCards
                             classNameType="odd-card-number"
                             cardTitle="Javascript"
                             courseStep="5" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="py-5 d-flex align-item-center section-two">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                <h2 className="p-2">لورم ایپسوم متن ساختگی</h2>
                                <p className="p-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <Image src={'./assets/img/prototyping process.svg'} fluid className="w-75 d-md-block d-none" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Home
