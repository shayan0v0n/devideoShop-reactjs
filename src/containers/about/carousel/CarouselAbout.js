import React, { useState } from 'react'
import './CarouselAbout.scss';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap'

const CarouselAbout = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <section className="contactUs-section">
        <Container>
            <h2 className="text-center py-3">ارتباط با ما</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} className="pb-3 my-carousel">
                    <Carousel.Item>
                        <Row>
                            <Col sm={12} md={4} className="text-center">
                                <Card className="evenCard py-3 my-1">
                                    <Card.Body>
                                        <Card.Title><i className="fa fa-instagram"></i></Card.Title>
                                        <Card.Title>اینستاگرام</Card.Title>
                                        <Card.Text>این اکانت اینستاگرام من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <Card className="oddCard py-3 my-1">
                                    <Card.Body>
                                        <Card.Title><i className="fa fa-telegram"></i></Card.Title>
                                        <Card.Title>telegram</Card.Title>
                                        <Card.Text>این اکانت تلگرام من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <Card className="evenCard py-3 my-1">
                                    <Card.Body>
                                        <Card.Title><i className="fa fa-github"></i></Card.Title>
                                        <Card.Title>github</Card.Title>
                                        <Card.Text>این اکانت گیت هاب من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <Col sm={12} md={4} className="text-center">
                                <Card className="evenCard py-3 my-1">
                                    <Card.Body>
                                        <Card.Title><i className="fa fa-reddit"></i></Card.Title>
                                        <Card.Title>ردیت</Card.Title>
                                        <Card.Text>این اکانت ردیت من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <Card className="oddCard py-3 my-1">
                                    <Card.Body>
                                        <Card.Title><i className="fa fa-facebook"></i></Card.Title>
                                        <Card.Title>فیسبوک</Card.Title>
                                        <Card.Text>این اکانت فیسبوک من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={4} className="text-center">
                                <Card className="evenCard py-3 my-1">
                                    <Card.Body>
                                        <Card.Title><i className="fa fa-twitter"></i></Card.Title>
                                        <Card.Title>توییتر</Card.Title>
                                        <Card.Text>این اکانت توییتر من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default CarouselAbout
