import React from "react";
import Card from 'react-bootstrap/Card';
import { useStateValue } from './StateProvider';
import Button from 'react-bootstrap/Button';
import './Card.css'
function Cards({id,img,title,description,price}){
    const [{},dispatch] =useStateValue(); 
    const addToBasket =()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                image:img,
                title:title,
                description:description,
                price:price,
            }
        })
    };

    return (
        <Card className="card">
            <Card.Img className="card_img" variant="top" src= {img} />
            <Card.Body>
                <Card.Title className="card_title">{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button
                onClick={addToBasket}
                variant="primary"
                className="card_button">
                {price}
                </Button>
            </Card.Body>
        </Card>
    )
}
        

export default Cards;