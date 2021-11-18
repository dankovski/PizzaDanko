import React, {useState} from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu';
import Contact from './Contact';
import Home from './Home';
import Thanks from './Thanks';
import CartPage from './CartPage'
import LoginPage from './LoginPage'

import './styles/index.css';

import Header from './components/Header';
import Info from './components/Info';


function App() {

    const [cartData, setCartData] = useState([])

    const onFoodOrder = (product) => {
        console.log(product)
        const exist = cartData.find( (x) => x.id === product.id)
        if(exist){

            setCartData(
                cartData.map( (x) =>
                x.id === product.id ? {...exist, quantity: exist.quantity + 1} : x
                )
            );
        }
        else{
                setCartData( [...cartData, {...product, quantity: 1}] );
        }
        }

        const onCartItemRemove = (product) => {
            const exist = cartData.find( (x) => x.id === product.id)

            if(exist.quantity === 1){
                setCartData(
                    cartData.filter( (item) => item.id !== product.id )
                    );
            }
            else{
                setCartData(
                    cartData.map( (x) =>
                    x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x
                    )
                );
                }
            }


            const onCartItemDelete = (product) => {

                    setCartData(
                        cartData.filter( (item) => item.id !== product.id )
                        );

                }

    return (
    <>
    <Router>
        <Header cartItems={cartData} onFoodOrder={onFoodOrder} onCartItemRemove={onCartItemRemove} onCartItemDelete={onCartItemDelete}/>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/menu'><Menu onFoodOrder={onFoodOrder}/></Route>
        <Route exact path='/contact'><Contact/></Route>
        <Route exact path='/thanks'><Thanks/></Route>
        <Route exact path='/login'><LoginPage/></Route>
        <Route exact path='/cart'><CartPage cartItems={cartData} onFoodOrder={onFoodOrder} onCartItemRemove={onCartItemRemove} onCartItemDelete={onCartItemDelete}/></Route>
        <Info/>
      </Router>
    </>)

      }

export default App;


