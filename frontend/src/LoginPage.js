import React, { useState, useContext } from 'react';
import "./styles/LoginPage.css"
import CSRFToken from "./components/CSRFToken"
import { getCookie, userContext } from './ContextProvider';


function LoginPage() {
    const [isLoginActive, setLoginActive] = useState(true)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [password1Error, setPassword1Error] = useState('');

    const { setUser, isLogged, setIsLogged } = useContext(userContext);

    function changeContent() {
        setEmail('');
        setUsername('');
        setPassword('');
        setPassword1('');
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setPassword1Error('');

        if (isLoginActive) {
            setLoginActive(false);
        }
        else {
            setLoginActive(true);
        }
    }

    function singup() {

        if (username.length == 0 || email.length == 0 || password.length == 0 || password1.length == 0) {

            if (username.length == 0) {
                setUsernameError('Username is required');
            }

            if (email.length == 0) {
                setEmailError("Email is required");
            }

            if (password.length == 0) {
                setPasswordError("Password is required");
            }

            if (password1.length == 0) {
                setPassword1Error("Password is required");
            }

        }
        else{


        var singupData = {
            'email': email,
            'username': username,
            'password': password,
            'password1': password1
        }

        fetch("http://localhost:8000/api/sing_up", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(singupData)
        })
            .then(jsonData => jsonData.json())
            .then(
                (data) => {

                    if (data['errors']) {
                        if (data['errors'].hasOwnProperty('emailError')) {
                            setEmailError(data['errors']['emailError']);
                        }
                        else {
                            setEmailError('');
                        }

                        if (data['errors'].hasOwnProperty('passwordError')) {
                            setPasswordError(data['errors']['passwordError']);
                        }
                        else {
                            setPasswordError('');
                        }

                        if (data['errors'].hasOwnProperty('password1Error')) {
                            setPassword1Error(data['errors']['password1Error']);
                        }
                        else {
                            setPassword1Error('');
                        }
                    }
                }
            )
        }
    }


    function login() {
        var csrftoken = getCookie('csrftoken');

        var loginData = {
            'username': username,
            'password': password
        }

        if (username.length == 0 || password.length == 0) {

            if (username.length == 0) {
                setUsernameError('Username is required');
            }

            if (password.length == 0) {
                setPasswordError("Password is required");
            }

        }

        else {
            fetch("http://localhost:8000/api/token", {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(loginData)
            })
                .then(jsonData => jsonData.json())
                .then(
                    (data) => {

                        if (data["username"]) {
                            setIsLogged(true);
                            setUser(data['username']);

                            setUsername('');
                            setPassword('');
                        }
                        else {
                            setPasswordError("Incorrect login or password");
                            setPassword('');
                        }

                    }
                )
        }
    }


    if (!isLogged) {
        if (isLoginActive) {
            return (
                <>
                    <div className="loginpage">

                        <div className="loginpage__form">

                            <h2 className='loginpage__form--title'>Login</h2>

                            <label>Username</label>
                            <br />
                            <input onFocus={() => setUsernameError('')} placeholder='Type your username' type="username" value={username} onInput={e => setUsername(e.target.value)} />
                            <h6 className="loginpage__errortext">{usernameError}</h6>
                            <br />

                            <label>Password</label>
                            <br />
                            <input onFocus={() => setPasswordError('')} placeholder='Type your password' type="password" value={password} onInput={e => setPassword(e.target.value)} />
                            <h6 className="loginpage__errortext">{passwordError}</h6>
                        </div>
                        <br />
                        <button type="button" className="loginpage__button--submit" onClick={login}>LOGIN</button>

                        <div className='loginpage__content-change'>
                            <span className='loginpage__content-change--button' onClick={changeContent}>or Sign Up</span>
                        </div>
                    </div>


                </>
            )
        }
        else {
            return (
                <>
                    <div className="loginpage">

                        <div className="loginpage__form">

                            <h2 className='loginpage__form--title'>Sign Up</h2>

                            <label>Username</label>
                            <br />
                            <input onFocus={() => setUsernameError('')} placeholder='Type your username' type="username" value={username} onInput={e => setUsername(e.target.value)} />
                            <h6 className="loginpage__errortext">{usernameError}</h6>
                            <br />


                            <label>Email</label>
                            <br />
                            <input onFocus={() => setEmailError('')} placeholder='Type your email' type="email" value={email} onInput={e => setEmail(e.target.value)} />
                            <h6 className="loginpage__errortext">{emailError}</h6>
                            <br />

                            <label>Password</label>
                            <br />
                            <input onFocus={() => setPasswordError('')} placeholder='Type your password'  type="password" value={password} onInput={e => setPassword(e.target.value)} />
                            <h6 className="loginpage__errortext">{passwordError}</h6>
                            <br />

                            <label>Confirm password</label>
                            <br />
                            <input onFocus={() => setPassword1Error('')} placeholder='Re-write your password'  type="password" value={password1} onInput={e => setPassword1(e.target.value)} />
                            <h6 className="loginpage__errortext">{password1Error}</h6>
                            <br />


                            <button type="button" className="loginpage__button--submit" onClick={singup}>Sing Up</button>

                            <div className='loginpage__content-change'>
                            <span className='loginpage__content-change--button' onClick={changeContent}>Have account? Login</span>
                        </div>

                        </div>
                    </div>
                </>
            )
        }
    }
    else {
        return null;
    }




}

export default LoginPage;