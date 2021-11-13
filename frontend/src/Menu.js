import React, { useEffect, useState } from 'react';
import "./styles/Menu.css"

import Food from "./components/Food"

function Menu(props) {

    const [foodData, setData] = useState(null)
    const [isError, setError] = useState(false)
    const [isLoaded, setLoaded] = useState(false)

    //reading food menu
    useEffect(
        ()=>{
        fetch("http://localhost:8000/get_food_data")
        .then(res => res.json() )
        .then(
        (result) =>{
            setData(result)
            setLoaded(true)
        },
        (error) =>{
            setError(true)
        }
        )
    },[])


    if(isError){
        return <h1>Can't load food</h1>
    }
    else if(!isLoaded){
        return <h1>Loading...</h1>
    }
    else{
      return (
      <>
        <h1>menu</h1>
        <div className="menu_flex">
            <div className="menu_food">
                {foodData.map( (food) => (
                    <Food key={food.id} onFoodOrder={(product)=>props.onFoodOrder(product)} product={food}/>
                ))}
            </div>
        </div>

          </>
      );

  }
}
  export default Menu;


