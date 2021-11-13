import React from 'react';
import './styles/Food.css';

const Food = (props) => {


return (

      <div className="food__container">
        <div className="food__image--block">
          <img className="food__image" src={"http://localhost:8000/"+props.product.photo} />
        </div>
        <div className="food__desc">
          <h3 className="food__desc--title">{props.product.id}. {props.product.name}</h3>
            <p className="food__desc--text">{props.product.description}</p>
          <button onClick={(product) => props.onFoodOrder(props.product)} className="food__desc--button"><b>Order</b></button>

        </div>

      </div>

      );

  }

  export default Food;