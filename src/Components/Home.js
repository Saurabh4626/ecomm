import React from 'react'
import Cards from './Cards'
import './Home.css'
import {catOneCards, catTwoCards} from './CardDetail'
import cartCads from './CardDetail'
function Home() {
    return (
        <div className="home">
            {/* Product id,title,price,rating,image */}

          <div className="home_row">
            {
                cartCads.map((card)=>(
                    <Cards
                        id={card.id}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                        price={card.Price}
                    />
    
                ))
            }
          </div>
          <div className="home_row">
            {
                catOneCards.map((card)=>(
                    <Cards
                        id={card.id}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                        price={card.Price}
                    />
    
                ))
            }
          </div>
          <div className="home_row">
            {
                catTwoCards.map((card)=>(
                    <Cards
                        id={card.id}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                        price={card.Price}
                    />
    
                ))
            }
          </div>
          
          
        </div>
    )
}

export default Home
