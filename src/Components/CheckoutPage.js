import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket}] =useStateValue(); 
    console.log(basket)
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket?.length === 0?(
                    <div>
                        <h2>shopping basket is empty</h2>
                        <p>Add items to basket</p>
                    </div>    
                ):(
                    <div className="checkout_product">
                        {basket.map(item => (
                            <CheckoutProduct
                            key={item.id}
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                count={item.count}
                            />
                        ))}
                    </div>
                )}
            </div>

            {basket?.length > 0 &&(
                    <div className="checkoutRight">
                        <Subtotal/>
                    </div>    
                )}
        
        </div>
    )}

export default Checkout
