import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer-custom py-3" dir="rtl">
                <Container>
                    <Row>
                            <Col sm={12} md={5} className="m-2">
                                <h4>درباره ما</h4>
                                <hr />
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                            </Col>

                            <Col sm={12} md={3} className="m-2">
                                <h4>بخش های سایت</h4>
                                <hr />
                                <Link to="/">صفحه اصلی</Link><br />
                                <Link to="/blog">مقالات</Link> <br />
                                <Link to="/teachers">مدرسین</Link> <br />
                                <Link to="/about">درباره ما</Link>
                            </Col>

                            <Col sm={12} md={3} className="m-2">
                                <h4>ارتباط با ما</h4>
                                <hr />
                                <p>شما میتوانید با استفاده از یکی از راه‌های زیر با ما ارتباط برقرار کنید</p>
                                <a><i className="fa fa-telegram mx-1"></i> تلگرام سازنده</a><br />
                                <a><i className="fa fa-github mx-1"></i> گیت هاب سازنده</a>
                            </Col>
                        </Row>
                </Container>
            </footer>
            <footer className="sub-footer-custom" dir="rtl">
            <Container>
                <p className="p-3 mb-0">کليه حقوق محصولات و محتوای اين سایت متعلق به راکت می باشد و هر گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست</p>
            </Container>
            </footer>
        </React.Fragment>
    )
}

export default Footer;