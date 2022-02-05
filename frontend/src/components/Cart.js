import React, {useContext, useEffect, useState} from 'react';
import './styles/Cart.css';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'

import { cartDataContext } from '../ContextProvider';

function Cart() {

  const [cartCost, setCartCost] = useState(0.0);

  const {cartData} = useContext(cartDataContext);

  useEffect( ()=>{
    let cost = 0

    cartData.map( (item)=>{
      cost += item.cost * item.quantity
    } );

    setCartCost(cost);
  } );


return (
  <>
<div className="cart__counter">
  <Link className="menu__item--link cart__link" to='/cart'>Cart: {cartData.length}</Link>
  <div className="cart__list">
    <h2>Cart list</h2>

    {cartData.map( (item) => (<CartItem key={item.id} product={item} />))}

    <h3>cart total:  {cartCost} PLN</h3>

    <Link to='/cart'>
      <button>View cart</button>
    </Link>


  </div>
</div>
  </>
      );

  }

  export default Cart;