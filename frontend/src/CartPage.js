import React, { useContext } from 'react';
import './styles/Home.css'

import CartItem from './components/CartItem'
import "./styles/CartPage.css"
import { cartDataContext, getCookie } from './ContextProvider';

function CartPage() {

  const { cartData } = useContext(cartDataContext);

  function orderFood() {

    fetch("http://localhost:8000/api/order", {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
      },
      body: JSON.stringify(cartData)
    })
      .then(jsonData => jsonData.json())
      .then(
        (data) => {
          console.log(data)
        }
      )
  }

  if (cartData.length > 0) {
    return (
      <>
        <div className="cartpage__content">
          {cartData.map((item) => (<CartItem key={item.id} product={item} />))}
          <button className="cartpage__button" onClick={orderFood}>ORDER</button>

        </div>

      </>
    )

  }
  else {
    return (
      <div className="cartpage__content--empty">
        <h1>Your shopping cart is empty</h1>
      </div>



    )


  }


}

export default CartPage;