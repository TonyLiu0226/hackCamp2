import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import LoginPage from './loginPage.js';
import TestUser from './testDb.js';
import Location from './locaiton.js'
function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    var responseClone; // 1
  fetch("http://localhost:3001/api", {mode:'cors'})
  .then(function (response) {
    responseClone = response.clone(); // 2
    return response.json();
    })
    .then(function (data) {
      setData(data);
    }, function (rejectionReason) { // 3
    console.log('Error parsing JSON from response:', rejectionReason, responseClone); // 4
    responseClone.text() // 5
    .then(function (bodyText) {
        console.log('Received the following instead of valid JSON:', bodyText); // 6
    });
})});

  return (
    <div>
      <LoginPage></LoginPage>
      <Location></Location>
    </div>
  );
}

export default App;
