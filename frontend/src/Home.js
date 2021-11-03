import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './styles/Home.css'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render () {
      return (
        <Fragment>
        <div className="home">
          <div className="home__header home__header--move">
            <h1 className="home__header--text">FRESH AND SIMPLE</h1>
            <h1 className="home__header--text">Something for everyone</h1>
            <Link to='/menu'>
              <button  className="home__header--button">CHECK MENU</button>
            </Link>

          </div>

        </div>

        <div className="home__background">
          <img className="background__img background__img--zoom" width="100vw" height="100vh" src="https://images.alphacoders.com/919/thumb-1920-919115.jpg" alt="Background"></img>
        </div>
        </Fragment>
      )
    }
  }
  export default Home;