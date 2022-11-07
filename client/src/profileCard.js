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
                        <img src="https://media.istockphoto.com/id/1198036466/vector/people-family-together-human-unity-chat-bubble-vector-icon.jpg?s=612x612&w=0&k=20&c=TAoPZDTuP3LABAzWv7jVVD-Sv7MxyztMQ2hGR3OyIQI=" alt="image" />
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