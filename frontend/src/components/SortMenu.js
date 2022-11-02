import React from 'react';
import './styles/SortMenu.css';


const SortMenu = (props) => {

    const handleSort = (option) => {
        const data = props.foodData
        switch (option) {
            case 'filter-price-low':
                props.setFoodData(data.sort((food1, food2) => {
                    return food1.cost - food2.cost
                }))
                break;
            case 'filter-price-high':
                props.setFoodData(data.sort((food1, food2) => {
                    return food2.cost - food1.cost
                }))
                break;
            case 'filter-name-low':
                props.setFoodData(data.sort((food1, food2) => {
                    return food1.name.localeCompare(food2.name)
                }))
                break;
            case 'filter-name-high':
                props.setFoodData(data.sort((food1, food2) => {
                    return food2.name.localeCompare(food1.name)
                }))
                break;
        }

    }

    return (
        <div className='filter-menu'>
            <select className='filter-menu--select' onChange={(e) => handleSort(e.target.value)}>
                <option value='filter-name-low'>Name (A to Z)</option>
                <option value='filter-name-high'>Name (Z to A)</option>
                <option value='filter-price-low'>Price (low to high)</option>
                <option value='filter-price-high'>Price (high to low)</option>
            </select>
        </div>

    );
}

export default SortMenu;