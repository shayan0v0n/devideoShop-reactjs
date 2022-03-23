import React from 'react';
import { Card, Button } from 'react-bootstrap'
import './CheckoutCartItem.scss';

const CheckoutCartItem = props => {
    const { cardInfo, deleteProduct } = props

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/assets/img/${cardInfo.cardPath}.webp`} />
                <Card.Body>
                    <Card.Title>{cardInfo.cardTitle}</Card.Title>
                        <Card.Text>{ cardInfo.cardText }</Card.Text>
                    <Button variant="danger" className="w-100" onClick={() => deleteProduct(cardInfo.cardPath)}>حدف از سبد خرید</Button>
                </Card.Body>
                <Card.Footer>قیمت دوره: {cardInfo.cardPrice} تومان</Card.Footer>
        </Card>
    )
}

export default CheckoutCartItem;