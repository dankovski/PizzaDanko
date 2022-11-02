import React, { useEffect, useState } from 'react';
import "./styles/Menu.css"
import Food from "./components/Food"

import SortMenu from "./components/SortMenu"

function Menu() {

    const [initFoodData, setInitFoodData] = useState(null)
    const [foodData, setData] = useState(null)
    const [isError, setError] = useState(false)
    const [isLoaded, setLoaded] = useState(false)

    useEffect(
        ()=>{
        fetch("http://localhost:8000/api/food")
        .then(res => res.json() )
        .then(
        (result) =>{
            setData(result.sort((food1, food2) => {
                return food1.name.localeCompare(food2.name)
            }))
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
        <SortMenu setFoodData={(data) => setData([...data])} foodData={foodData}></SortMenu>
        <div className="menu_flex">
            <h2>Pizza</h2>
            <div className="menu_food">
                {foodData.map( (food, index) => {
                    if(food.category == 1){
                        return <Food key={food.id} number={index + 1} product={food}/>
                    }
                }
                )}
            </div>
            <h2>Kebab</h2>
            <div className="menu_food">
            {foodData.map( (food, index) => {
                    if(food.category == 2){
                        return <Food key={food.id} number={index + 1} product={food}/>
                    }
                }
                )}
            </div>
            <h2>Drinks</h2>
            <div className="menu_food">
            {foodData.map( (food, index) => {
                    if(food.category == 3){
                        return <Food key={food.id} number={index + 1} product={food}/>
                    }
                }
                )}
            </div>
        </div>

          </>
      );

  }
}
  export default Menu;


