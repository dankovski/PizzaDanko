import React from 'react';

import "./styles/Contact.css"



function Contact() {

      return (

        <div className="contact">

          <div className="contact__header">
            <h1>Contact us</h1>
            <h3>Please let us know your suggestions or opinion</h3>
          </div>


          <form className="contact__form" action="http://localhost:8000/message" method="post">

            <label className="contact__label">Full name</label>
            <input className="contact__input" type="text" name="fullname"  id="fullname" minLength="5"/>
            <br/>
            <label className="contact__label">Mail</label>
            <input className="contact__input" type="email" name="email"  id="email"/>
            <br/>
            <label className="contact__label">Your message</label>
            <textarea className="contact__input contact__input--message" name="message" id="message" minLength="10"/>
            <br/>

            <button className="contact__button">Submit message</button>


          </form>


        </div>

      );
    }


  export default Contact;
