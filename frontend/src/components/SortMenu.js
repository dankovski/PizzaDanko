import React, { useContext } from 'react';
import './styles/SortMenu.css';


const SortMenu = (props) => {

    const handleSort = (option) => {
        const data = props.foodData
        switch (option) {
            case 'filter-popularity':
                break;
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
            // case 'filter-name-low':
            //     props.setData(tmpFoodFata.sort((food1, food2) => {
            //         food1.name.localeCompare(food2.name)
            //     }))
            //     console.log(props.foodData)
            //     break;
            // case 'filter-name-high':
            //     props.setData(tmpFoodFata.sort((food1, food2) => {
            //         food1.name.localeCompare(food2.name)
            //     }))
            //     console.log(props.foodData)
            //     break;
        }

    }

    return (
        <div className='filter-menu'>
            <select className='filter-menu--select' onChange={(e) => handleSort(e.target.value)}>
                <option value='filter-popularity'>Sort by: Popularity</option>
                <option value='filter-price-low'>Price: Low to High</option>
                <option value='filter-price-high'>Price: High to Low</option>
                <option value='filter-name-low'>Name - from A to Z</option>
                <option value='filter-name-high'>Name - from Z to A</option>
            </select>
        </div>

    );
}

export default SortMenu;