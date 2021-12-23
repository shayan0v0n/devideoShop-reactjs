import React from 'react';
import { Row, Col, Container, Image, Card } from 'react-bootstrap'
import './Teachers.scss';
import PersonalCards from '../../components/personalCards/PersonalCards'

const Teachers = () => {
    return (
        <main>
            <section  className="py-3 d-flex text-align-center section-custom1">
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="d-flex justify-content-center">
                            <Image src={'/assets/img/undraw_certificate_re_yadi.svg'} fluid className="w-50 d-md-block d-none" />
                        </Col>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                    <h2 className="p-2">لورم ایپسوم متن ساختگی</h2>
                                    <p className="p-2"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="my-3">
                <PersonalCards />
            </section>
            <section  className="py-3 d-flex text-align-center section-custom1">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div dir="rtl">
                                    <h2 className="p-2">لورم ایپسوم متن ساختگی</h2>
                                    <p className="p-2"> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className="d-flex justify-content-center">
                            <Image src={'/assets/img/undraw_online_video_re_fou2.svg'} fluid className="w-50 d-md-block d-none" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Teachers;