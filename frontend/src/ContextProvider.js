import React, { useState, useEffect } from 'react';
import $ from 'jquery';

export const cartDataContext = React.createContext([]);
export const userContext = React.createContext(null);
export const loadingContext = React.createContext(false);

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

export const ContextProvider = ({ children }) => {

    const [cartData, setCartData] = useState([]);
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

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

    useEffect(
        () => {
            fetch("http://localhost:8000/api/valid_user", {
                credentials: 'include',
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error('Cant fetch data');
              })
              .then((data) => {
                if (data['username']) {
                    setIsLogged(true);
                    setUser(data['username']);
                }
                setIsLoaded(true);
              })
              .catch((error) => {
                setIsLoaded(true);
                console.log(error)
              });

            let initCartData = JSON.parse(localStorage.getItem("cartData"));

            fetch("http://localhost:8000/api/food")
            .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error('Cant fetch data');
              })
              .then(                    (result) => {
                let tempCartData = []
                initCartData.map((item) => {

                    for (let food of result) {

                        if (item.id == food.id) {
                            food.quantity = item.quantity
                            tempCartData.push(food)
                        }
                    }
                })
                setCartData(tempCartData)
            })
              .catch((error) => {
                console.log(error)
              });

        }, [])


    useEffect(
        () => {

            localStorage.setItem("cartData", JSON.stringify(cartData));

        }, [cartData])

    return (

        <cartDataContext.Provider value={{ cartData, onFoodOrder, onCartItemRemove, onCartItemDelete }}>
            <userContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
                <loadingContext.Provider value={{ isLoaded, setIsLoaded }}>
                    {children}
                </loadingContext.Provider>
            </userContext.Provider>
        </cartDataContext.Provider>

    )

}

