import React, { useState, useEffect, useContext } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu';
import Contact from './Contact';
import Home from './Home';
import CartPage from './CartPage'
import LoginPage from './LoginPage'

import './styles/index.css';

import { ContextProvider , getCookie, loadingContext  } from './ContextProvider';

import Header from './components/Header';
import Info from './components/Info';


function App() {

    const {isLoaded, setIsLoaded} = useContext(loadingContext);


    useEffect(
        () => {

            fetch("http://localhost:8000/api/csrf", {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => {
                if (response.ok) {
                  return;
                }
                throw new Error('Cant fetch data');
              })
              .catch((error) => {
                console.log(error)
              });
        }, [])


    return (
        // <ContextProvider>
            <Router>
            { isLoaded ? (
                <>
                    <Header/>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/menu'><Menu/></Route>
                    <Route exact path='/contact'><Contact/></Route>
                    <Route exact path='/login'><LoginPage/></Route>
                    <Route exact path='/cart'><CartPage/></Route>
                    <Info/>
                </>
            ):
            (
                <div></div>
            )

            }

            </Router>
        // </ContextProvider>
        )

}

export default App;


