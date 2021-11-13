import React, {useState} from 'react';

import "./styles/CartItem.css"


function CartItem({onFoodOrder, product, onCartItemRemove, onCartItemDelete}) {




return (
        <div className="cartitem">
          <img className="cartitem__image" src={"http://localhost:8000/"+product.photo} />
          <div className="cartitem__desc">
            <h4>{product.name}</h4>
            <h5>{product.quantity}x{product.cost}</h5>
          </div>
          <div className="cartitem__buttons">
            <button onClick={onFoodOrder} className="cartitem__button">+</button>
            <button onClick={onCartItemRemove} className="cartitem__button">-</button>
            
          </div>
          <button onClick={onCartItemDelete} className="cartitem__button">x</button>
        </div>

      );

  }

  export default CartItem;