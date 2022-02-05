import React, { useState } from 'react';

import "./styles/Contact.css"

import { getCookie } from './ContextProvider';

function Contact() {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isMessageSent, setMessageSent] = useState(false);

  const submit = () => {

    let messageData = {
      'fullname': fullname,
      'email': email,
      'message': message
    }

    fetch("http://localhost:8000/api/message", {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
      },
      body: JSON.stringify(messageData)

    })
      .then(jsonData => jsonData.json())
      .then(
        (data) => {
          if(data['status'] === "ok"){
            setMessageSent(true);
          }
          else{
            setMessageSent(false);
          }
        }
      )
  }


  if (isMessageSent) {
    return (

      <div className="contact">

        <div className="contact__header">
          <h1>Contact us</h1>
          <h3>Please let us know your suggestions or opinion</h3>
        </div>

        <div className="contact__form">
          <b>Message has been sent</b>
        </div>

      </div>

    );

  }
  else {
    return (

      <div className="contact">

        <div className="contact__header">
          <h1>Contact us</h1>
          <h3>Please let us know your suggestions or opinion</h3>
        </div>

        <div className="contact__form">
          {/* <CSRFToken/> */}
          <label className="contact__label">Full name</label>
          <input className="contact__input" type="text" placeholder='Enter full name' name="fullname" id="fullname" minLength="5" value={fullname} onChange={e => setFullname(e.target.value)} />
          <br />
          <label className="contact__label">Email</label>
          <input className="contact__input" type="email" placeholder='Enter email' name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          <br />
          <label className="contact__label">Your message</label>
          <textarea className="contact__input contact__input--message" placeholder='Enter your message' name="message" id="message" minLength="10" value={message} onChange={e => setMessage(e.target.value)} />
          <br />

          <button className="contact__button" onClick={submit}>Submit message</button>

        </div>

      </div>

    );


  }

}


export default Contact;
