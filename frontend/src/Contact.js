import React from 'react';

import "./styles/Contact.css"



class Contact extends React.Component {
    render () {
      return (

        <div className="contact">

          <div className="contact__header">
            <h1>Contact us</h1>
            <h3>Please let us know your suggestions</h3>
          </div>


          <form className="contact__form">
            <label className="contact__label">Full name</label>
            <input className="contact__input" type="text" name="fullName"/>
            <br/>
            <label className="contact__label">Mail</label>
            <input className="contact__input" type="email" name="mail"/>
            <br/>
            <label className="contact__label">Your message</label>
            <textarea className="contact__input contact__input--message" name="message"/>
            <br/>
            
            <button className="contact__button">Submit message</button>


          </form>


        </div>

      );
    }
  }

  export default Contact;
