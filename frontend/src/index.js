import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './Menu';
import Contact from './Contact';
import Home from './Home';

import './styles/index.css';

import Header from './components/Header';
import Info from './components/Info';

ReactDOM.render((
  <Router>
    <Header/>
    <Route exact path='/' component={Home} />
    <Route exact path='/menu' component={Menu} />
    <Route exact path='/contact' component={Contact} />
    <Info/>
  </Router>),
  document.getElementById('root')
);