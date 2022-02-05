import React, { useContext } from 'react';

import "./styles/CartItem.css"

import {cartDataContext} from "../ContextProvider"

function CartItem({product}) {

  const {onCartItemRemove, onCartItemDelete, onFoodOrder} = useContext(cartDataContext);

return (
        <div className="cartitem">
          <img className="cartitem__image" src={"http://localhost:8000/"+product.photo} />
          <div className="cartitem__desc">
            <h4>{product.name}</h4>
            <h5>{product.quantity}x{product.cost}</h5>
          </div>
          <div className="cartitem__buttons">
            <button onClick={() => onFoodOrder(product)} className="cartitem__button">+</button>
            <button onClick={() => onCartItemRemove(product)} className="cartitem__button">-</button>

          </div>
          <button onClick={() => onCartItemDelete(product)} className="cartitem__button">x</button>
        </div>

      );

  }

  export default CartItem;