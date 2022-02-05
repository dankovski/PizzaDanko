import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu';
import Contact from './Contact';
import Home from './Home';
import CartPage from './CartPage'
import LoginPage from './LoginPage'

import './styles/index.css';

import { ContextProvider , getCookie} from './ContextProvider';

import Header from './components/Header';
import Info from './components/Info';


function App() {

    useEffect(
        () => {

            fetch("http://localhost:8000/api/csrf", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(jsonData => jsonData.json())
                .then(
                    (data) => {
                        console.log(getCookie('csrftoken'))

                    },
                    (error) => {
                        console.log("can't get csrf token")
                    }
                )
        }, [])


    return (
        <ContextProvider>
            <Router>
                <Header/>
                <Route exact path='/'><Home/></Route>
                <Route exact path='/menu'><Menu/></Route>
                <Route exact path='/contact'><Contact/></Route>
                <Route exact path='/login'><LoginPage/></Route>
                <Route exact path='/cart'><CartPage/></Route>
                <Info />
            </Router>
        </ContextProvider>)

}

export default App;


