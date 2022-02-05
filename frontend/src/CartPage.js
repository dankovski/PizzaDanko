import React, { useContext } from 'react';
import './styles/Home.css'

import CartItem from './components/CartItem'
import "./styles/CartPage.css"
import { cartDataContext } from './ContextProvider';

function CartPage(props){

  const {cartData} = useContext(cartDataContext);

if(cartData.length > 0){
  return (
    <>
    <div className="cartpage__content">
        {cartData.map( (item) => (<CartItem key={item.id} product={item}/>))}
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