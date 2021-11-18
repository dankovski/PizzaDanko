import React from 'react';
import './styles/Home.css'

import CartItem from './components/CartItem'
import "./styles/CartPage.css"

function CartPage(props){


if(props.cartItems.length > 0){
  return (
    <>
    <div className="cartpage__content">
        {props.cartItems.map( (item) => (<CartItem onFoodOrder={() => props.onFoodOrder(item)}
        key={item.id} product={item}
        onCartItemRemove={() => props.onCartItemRemove(item)}
        onCartItemDelete={ ()=> props.onCartItemDelete(item)}/>))}

      <button className="cartpage__button">ORDER</button>

    </div>


    </>
          )

}
else{
  return(
    <div className="cartpage__content--empty">
      <h1>Your shopping cart is empty</h1>
    </div>



  )


}




}

  export default CartPage;