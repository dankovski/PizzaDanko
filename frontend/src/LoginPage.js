import React, { useState } from 'react';

import "./styles/LoginPage.css"

function LoginPage(){
    const [isLoginActive, setLoginActive] = useState(false)


    if(isLoginActive){
        return (
            <>
            <div>
                <div>
                    <button>login</button>
                    <button>sing up</button>
                </div>
                <br/>
                <form>
                    <label>login</label>
                    <br/>
                    <input type="text"/>
                    <br/><br/>
                    <label>password</label>
                    <br/>
                    <input type="password"/>

                </form>
                <br/>
                <button>login</button>
            </div>
            </>
                )
    }
    else{
        return (
            <>
            <div>
                <div>
                    <button>login</button>
                    <button>sing up</button>
                </div>
                <br/>
                <form>
                    <label>login</label>
                    <br/>
                    <input type="text"/>
                    <br/><br/>

                    <label>password</label>
                    <br/>
                    <input type="password"/>
                    <br/><br/>

                    <label>rewrite password</label>
                    <br/>
                    <input type="password"/>
                    <br/><br/>

                    <label>email</label>
                    <br/>
                    <input type="text"/>
                    <br/><br/>

                    <label>fullname</label>
                    <br/>
                    <input type="text"/>
                    <br/><br/>



                </form>
                <br/>
                <button>sing up</button>
            </div>
            </>
                )
    }







}

  export default LoginPage;