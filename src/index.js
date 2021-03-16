import React from 'react';
import ReactDom from 'react-dom';

const fname = 'Mahedi';
const lname = 'Hasan';
var today = new Date(),
date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
ReactDom.render(
        <>
          <h1>My first name is {fname} and last name is {lname}</h1>
          <p>Today's date is : {date}</p>
          <p>and time is : {time}</p>
        </>,document.getElementById('root')
        );