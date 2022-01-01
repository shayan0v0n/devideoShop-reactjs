import React, { useState } from 'react'
import './CarouselAbout.scss';
import { useNavigate } from 'react-router-dom'
import { Carousel, Card, Row, Col, Container, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { ExternalLink } from 'react-external-link';

const CarouselAbout = () => {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const renderTooltip = props => (
        <Tooltip {...props}>
            موجود نمی باشد
        </Tooltip>
    )

    return (
        <section className="contactUs-section">
        <Container>
            <h2 className="text-center py-3">ارتباط با ما</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} className="pb-3 my-carousel">
                    <Carousel.Item>
                        <Row>
                            <Col sm={12} md={4} className="text-center">
                                <ExternalLink href="https://www.linkedin.com/in/shayan-vosoughi-60b347180" className="external-customize">
                                    <Card className="evenCard py-3 my-1">
                                        <Card.Body>
                                            <Card.Title><i className="fa fa-linkedin"></i></Card.Title>
                                            <Card.Title>لینکدین</Card.Title>
                                            <Card.Text>این اکانت لینکدین من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ExternalLink>
                            </Col>
                            <Col sm={12} md={4} className="text-center" onClick={() => {navigate()}}>
                                <ExternalLink href="https://github.com/shayan0v0n" className="external-customize">
                                    <Card className="oddCard py-3 my-1">
                                        <Card.Body>
                                            <Card.Title><i className="fa fa-github"></i></Card.Title>
                                            <Card.Title>github</Card.Title>
                                            <Card.Text>این اکانت گیت هاب من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ExternalLink>
                            </Col>
                            <Col sm={12} md={4} className="text-center" onClick={() => {navigate()}}>
                                <ExternalLink href="https://t.me/shayan_v_n" className="external-customize">
                                    <Card className="evenCard py-3 my-1">
                                        <Card.Body>
                                            <Card.Title><i className="fa fa-telegram"></i></Card.Title>
                                            <Card.Title>telegram</Card.Title>
                                            <Card.Text>این اکانت تلگرام من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ExternalLink>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row>
                            <OverlayTrigger placement="bottom" delay={{ show: 150, hide: 150 }} overlay={renderTooltip}>
                                <Col sm={12} md={4} className="text-center">
                                    <Card className="evenCard py-3 my-1">
                                        <Card.Body>
                                            <Card.Title><i className="fa fa-facebook"></i></Card.Title>
                                            <Card.Title>فیسبوک</Card.Title>
                                            <Card.Text>این اکانت فیسبوک من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </OverlayTrigger>
                            <Col sm={12} md={4} className="text-center">
                                <ExternalLink href="https://www.instagram.com/shayan00vn/" className="external-customize">
                                    <Card className="oddCard py-3 my-1">
                                        <Card.Body>
                                            <Card.Title><i className="fa fa-instagram"></i></Card.Title>
                                            <Card.Title>اینستاگرام</Card.Title>
                                            <Card.Text>این اکانت اینستاگرام من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </ExternalLink>
                            </Col>
                            <OverlayTrigger placement="bottom" delay={{ show: 150, hide: 150 }} overlay={renderTooltip}>
                                <Col sm={12} md={4} className="text-center">
                                    <Card className="evenCard py-3 my-1">
                                        <Card.Body>
                                            <Card.Title><i className="fa fa-twitter"></i></Card.Title>
                                            <Card.Title>توییتر</Card.Title>
                                            <Card.Text>این اکانت توییتر من است. میتونید از این روش با من ارتباط بر قرار کنید.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </OverlayTrigger>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}

export default CarouselAbout