import React, {useEffect, useState} from 'react';
import './styles/Cart.css';
import { Link } from 'react-router-dom';
import CartItem from './CartItem'

function Cart(props) {
  const [cartCost, setCartCost] = useState(0.0)

  useEffect( ()=>{
    let cost = 0

    props.cartItems.map( (item)=>{
      cost += item.cost * item.quantity
    } );

    setCartCost(cost);
  } );


return (
  <>
<div className="cart__counter">
  <Link className="menu__item--link cart__link" to='/cart'>Cart: {props.cartItems.length}</Link>
  <div className="cart__list">
    <h2>Cart list</h2>

    {props.cartItems.map( (item) => (<CartItem onFoodOrder={() => props.onFoodOrder(item)} 
    key={item.id} product={item} 
    onCartItemRemove={() => props.onCartItemRemove(item)} 
    onCartItemDelete={ ()=> props.onCartItemDelete(item)}/>))}

    <h3>cart total:  {cartCost} PLN</h3>
    <button>view cart</button>
  </div>
</div>
  </>
      );

  }

  export default Cart;