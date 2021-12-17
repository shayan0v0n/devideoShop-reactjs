import React from 'react'
import './PersonalCards.scss'
import { Row , Col, Container} from 'react-bootstrap'
import PersonCard from './personCard/PersonCard'

const PersonalCards = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} md={4}>
                    <PersonCard />
                </Col>
                <Col sm={12} md={4}>
                    <PersonCard />
                </Col>
                <Col sm={12} md={4}>
                    <PersonCard />
                </Col>
            </Row>
        </Container>
    )
}

export default PersonalCards
