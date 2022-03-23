import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './CartItems.scss';

const CartItems = props => {
    const { cardInfo, deleteProduct } = props

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/assets/img/${cardInfo.cardPath}.webp`} />
                <Card.Body>
                    <Card.Title>{cardInfo.cardTitle}</Card.Title>
                        <Card.Text>{ cardInfo.cardText }</Card.Text>
                </Card.Body>
                <Card.Footer>قیمت دوره: {cardInfo.cardPrice} تومان</Card.Footer>
        </Card>
    )
}

export default CartItems;