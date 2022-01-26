import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase.js';
import "./login.css";

const Login = () => {

    const signin = () => {
        signInWithPopup(auth, provider).catch(alert);
    }

    return (
        <div className='main__container'>
            <center>
                <button onClick={signin}>Sign In with Google</button>
            </center>
        </div>
    );
}

export default Login;