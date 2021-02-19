import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
       
        <div className="checkoutProduct">
            <img src={image} 
            className="product_image"/>
            <div className="checkoutproduct_info">
                <p className="checkout_title">{title}</p>
                <p className="product__">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill(null)
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>REMOVE FROM BASKET</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
