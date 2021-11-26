import React, { useState } from 'react';
import $ from 'jquery';
import "./styles/LoginPage.css"
import CSRFToken from "./components/CSRFToken"


function LoginPage(){
    const [isLoginActive, setLoginActive] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password1Error, setPassword1Error] = useState('');


    function getCookie(name) {
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

    function changeContent(){
        setEmail('');
        setPassword('');
        setPassword1('');
        setEmailError('');
        setPasswordError('');
        setPassword1Error('');

        if(isLoginActive){
            setLoginActive(false);
        }
        else{
            setLoginActive(true);
        }
    }

    function singup(){
        var csrftoken = getCookie('csrftoken');

        var singupData={
            'email': email,
            'password': password,
            'password1': password1
        }

        fetch("http://localhost:8000/sing_up", {
            credentials: 'include',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
            },
            body:JSON.stringify(singupData)
           })
           .then( jsonData => jsonData.json() )
           .then(
               (data) => {

                console.log(data['errors'].hasOwnProperty('emailError'))
                console.log(Object.values(data).includes('emailError'))

                if(data['errors'].hasOwnProperty('emailError')){
                    setEmailError(data['errors']['emailError']);
                }
                else{
                    setEmailError('');
                }

                if(data['errors'].hasOwnProperty('passwordError')){
                    setPasswordError(data['errors']['passwordError']);
                }
                else{
                    setPasswordError('');
                }

                if(data['errors'].hasOwnProperty('password1Error')){
                    setPassword1Error(data['errors']['password1Error']);
                }
                else{
                    setPassword1Error('');
                }

            }


               )

    }


    function login(){
        var csrftoken = getCookie('csrftoken');

        var loginData={
            'username': email,
            'password': password
        }

        fetch("http://localhost:8000/login", {
            credentials: 'include',
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
            },
            body:JSON.stringify(loginData)
           })
           .then( jsonData => jsonData.json() )
           .then(
               (data) => {
                console.log(data)

                if(data.hasOwnProperty('error')){
                    setPasswordError(data['error']);
                }
                else{
                    setPasswordError('');
                }
            }

               )

    }


    if(isLoginActive){
        return (
            <>
            <div className="loginpage">
                <div className="loginpage__buttons">
                    <button className="loginpage__button">login</button>
                    <button className="loginpage__button" onClick={changeContent}>sing up</button>
                </div>
                <br/>
                <form className="loginpage__form">
                <CSRFToken />

                <label>Email</label>
                <br/>
                <input type="email" value={email} onInput={e => setEmail(e.target.value)}/>
                <h6 className="loginpage__errortext">{emailError}</h6>
                <br/>

                <label>Password</label>
                <br/>
                <input type="password" value={password} onInput={e => setPassword(e.target.value)}/>
                <h6 className="loginpage__errortext">{passwordError}</h6>
                </form>
                <br/>
                <button type="button" className="loginpage__button loginpage__button--submit" onClick={login}>login</button>
            </div>
            </>
                )
    }
    else{
        return (
            <>
            <div className="loginpage">
            <div className="loginpage__buttons">
                    <button className="loginpage__button" onClick={changeContent}>login</button>
                    <button className="loginpage__button">sing up</button>
                </div>
                <br/>
                <form className="loginpage__form">

                    <label>Email</label>
                    <br/>
                    <input type="email" value={email} onInput={e => setEmail(e.target.value)}/>
                    <h6 className="loginpage__errortext">{emailError}</h6>
                    <br/>

                    <label>Password</label>
                    <br/>
                    <input type="password" value={password} onInput={e => setPassword(e.target.value)}/>
                    <h6 className="loginpage__errortext">{passwordError}</h6>
                    <br/>

                    <label>Confirm password</label>
                    <br/>
                    <input type="password" value={password1} onInput={e => setPassword1(e.target.value)}/>
                    <h6 className="loginpage__errortext">{password1Error}</h6>
                    <br/>
                    <button type="button" className="loginpage__button loginpage__button--submit" onClick={singup}>sing up</button>

                </form>
            </div>
            </>
                )
    }







}

  export default LoginPage;