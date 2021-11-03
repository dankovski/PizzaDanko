import React from 'react';
import './styles/Food.css';

function Food(props) {



return (


      <div className="food__container">
        <div className="food__image--block">
          <img className="food__image" src={"http://localhost:8000/"+props.photo_url} />
        </div>
        <div className="food__desc">
          <h3 className="food__desc--title">{props.number}. {props.name}</h3>
            <p className="food__desc--text">{props.description}</p>
          <button className="food__desc--button"><b>Order</b></button>
        </div>

      </div>


      );

  }

  export default Food;