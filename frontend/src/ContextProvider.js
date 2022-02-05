import React, { useContext, useState } from 'react';
import $ from 'jquery';

export const cartDataContext = React.createContext([]);

export const getCookie = (name) => {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const ContextProvider = ({children}) => {

const [cartData, setCartData] = useState([])

const onFoodOrder = (product) => {

    const exist = cartData.find((x) => x.id === product.id)
    if (exist) {

        setCartData(
            cartData.map((x) =>
                x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
            )
        );
    }
    else {
        setCartData([...cartData, { ...product, quantity: 1 }]);
    }
}

const onCartItemRemove = (product) => {

    const exist = cartData.find((x) => x.id === product.id)

    if (exist.quantity === 1) {
        setCartData(
            cartData.filter((item) => item.id !== product.id)
        );
    }
    else {
        setCartData(
            cartData.map((x) =>
                x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
            )
        );
    }
}

const onCartItemDelete = (product) => {

    setCartData(
        cartData.filter((item) => item.id !== product.id)
    );
}

return(

    <cartDataContext.Provider value={{cartData, onFoodOrder, onCartItemRemove, onCartItemDelete}}>
            {children}
    </cartDataContext.Provider>

)

}

