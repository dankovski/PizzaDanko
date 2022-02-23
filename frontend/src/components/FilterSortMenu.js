import React, { useContext } from 'react';
import './styles/FilterSortMenu.css';


const FilterSortMenu = (props) => {

    return (

        <div className='filter-sort'>

            <div className='filter-sort__sort'>
                <button>a</button>
                <button>b</button>
                <button>c</button>
                <button>d</button>
                <button>e</button>
            </div>

            <div className='filter-sort__filter'>
                <select className='filter-sort__filter--select'>
                    <option value='filter-popularity'>Sort by: Popularity</option>
                    <option value='filter-price-low'>Price: Low to High</option>
                    <option value='filter-price-high'>Price: High to Low</option>
                    <option value='filter-name-low'>Name - from A to Z</option>
                    <option value='filter-name-high'>Name - from Z to A</option>
                </select>
            </div>

        </div>

    );
}

export default FilterSortMenu;