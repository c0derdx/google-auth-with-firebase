import React from 'react';
import { auth } from './firebase';
import "./Main.css"

const Mainpage = () => {

    // Signout function
    const logout = () => {
        auth.signOut();
    }
    
    return (
        <div className='main__container'>
            <div className="profile">
                <img src="https://i.gifer.com/embedded/download/QkGL.gif" alt="" />
            </div>
            <div className="container">
            Welcome
            {
                " " + auth.currentUser.email
            }
            <button style={{ "marginLeft": "20px" }}
                onClick={logout}>
                Logout
            </button>
            </div>
        </div>
    );
}

export default Mainpage;