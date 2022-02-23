import React, { useEffect, useState } from 'react';
import "./styles/Menu.css"
import Food from "./components/Food"

import FilterSortMenu from "./components/FilterSortMenu"

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
            setData(result)
            setLoaded(true)
        },
        (error) =>{
            setError(true)
        }
        )
    },[])

    const onFilterChange = (filter) => {

        switch(filter){

            case "pizza":



        }


    }

    const onSortChange = (sort) => {




        
    }



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
        <FilterSortMenu setData={(data) => setData(data)}></FilterSortMenu>
        <div className="menu_flex">
            <h2>pizza</h2>
            <div className="menu_food">
                {foodData.map( (food) => {
                    if(food.category == 1){
                        return <Food key={food.id} product={food}/>
                    }
                }
                )}
            </div>
            <h2>kebab</h2>
            <div className="menu_food">
            {foodData.map( (food) => {
                    if(food.category == 2){
                        return <Food key={food.id} product={food}/>
                    }
                }
                )}
            </div>
            <h2>pizza</h2>
            <div className="menu_food">
            {foodData.map( (food) => {
                    if(food.category == 3){
                        return <Food key={food.id} product={food}/>
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


