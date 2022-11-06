import React from 'react'
import {useState, useEffect} from 'react';
import './loginPage.css';
import 'bulma/css/bulma.min.css';
import ProfileCard from './profileCard.js'

function loginPage(props) {
    const login = (response) => { 
        fetch("http://localhost:3001/login", {mode:'cors'}).then(function (response) {
            return response.json();
            })
    }
    return(
        <div className="body">
            <div className="container"> 
                <div className="title">
                    <h1 class="title is-1 is-spaced has-text-white">UniMeetups 2</h1>
                    <h4 class="subtitle is-3 has-text-light">Reconnect with your fellow humans</h4>
                </div>
                <button class="button is-secondary has-text-dark" onClick={login}>Login</button>
            </div>
            <ProfileCard></ProfileCard>
        </div>
    )
}

export default loginPage;

<script src="https://apis.google.com/js/platform.js" async defer></script>