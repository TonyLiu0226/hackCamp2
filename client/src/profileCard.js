import React from 'react'
import {useState, useEffect} from 'react';
import './profileCard.css';
import 'bulma/css/bulma.min.css';
function profileCard(props) {
    return(
        <div className="container">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/360x240.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <h1>NAME</h1>
                    </div>
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Faculty & Year</a>
                    <a href="#" class="card-footer-item">Hobbies</a>
                    <a href="#" class="card-footer-item">C</a>
                </footer>
            </div>
        </div>
    )
}

export default profileCard;