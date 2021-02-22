import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,description,price,count}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    const reduceCount=()=>{

        dispatch({
            type:'REDUCE_BASKET_QUANTITY',
            id:id
        })
    }
    const increaseCount=()=>{
        dispatch({
            type:'INCREASE_BASKET_COUNT',
            id:id
        })
    }
    return (
       
        <div className="checkoutProduct">
            <img src={image} 
            className="product_image"/>
            <div className="checkoutproduct_info">
                <p className="checkout_title">{title}</p>
                <p className="product__">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <p>
                    Quantity : <button onClick={reduceCount}> - </button>
                    {count}
                    <button onClick={increaseCount}> + </button>
                </p>
                <button onClick={removeFromBasket}>REMOVE FROM BASKET</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
