import React from 'react'
import './PersonalCards.scss'
import { Row , Col, Container} from 'react-bootstrap'
import PersonCard from './personCard/PersonCard'

const PersonalCards = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={4}>
                <PersonCard
                    cardTitle="Jim Steeves"
                    cardImg="Jim Steeves.jpg">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </PersonCard>
                </Col>
                <Col sm={12} md={4}>
                    <PersonCard
                    cardTitle="shayan vosoughi"
                    cardImg="me.jpg">کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری </PersonCard>
                </Col>
                <Col sm={12} md={4}>
                <PersonCard
                    cardTitle="Johnni Barnett"
                    cardImg="Johnni Barnett.jpg">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </PersonCard>
                </Col>
            </Row>
        </Container>
    )
}

export default PersonalCards
