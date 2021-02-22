export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price*item.count + amount, 0);

export const initialState={
    basket:[],
    user:null,
};


function reducer(state,action){
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'ADD_TO_BASKET':
            const items=action.item
            const existItem = state.basket.find((x)=>x.id===items.id);
            if (existItem){
                return state
            }
            else{
                return{
                    ...state,
                    basket:[...state.basket,action.item]
                }
            }
        case 'REDUCE_BASKET_QUANTITY':
            function reducer(count){
                if (count<=0){
                    return count
                }
                else{
                    const ans=count-1
                    return ans
                }
            }

            
            const curr_index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id)
            console.log(...state.basket)
            if (curr_index){
                state.basket.map((x)=>x.id===action.id ? x.count=reducer(x.count):x)
                console.log(state.basket)
                return {
                    ...state,
                    basket:[...state.basket],
                };
            }
            else{
                return {
                    ...state,
                    basket:[...state.basket],
                };
            }
        case 'INCREASE_BASKET_COUNT':
            const item=state.basket.findIndex(
                (item)=>item.id===action.id
            )
            if (item){
                state.basket.map((x)=>x.id===action.id ?x.count+=1:x)
                return {
                    ...state,
                    basket:[...state.basket],
                };
            }
            else{
                return {
                    ...state,
                    basket:[...state.basket],
                };
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket=[...state.basket]
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id)
            if (index>=0){
                newBasket.splice(index,1);

            }else{
                console.warn("no product with that id")
            }

            return {...state,
                basket:newBasket
            }
        default:
            return state
    }
}
export default reducer;