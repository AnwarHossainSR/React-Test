import React from 'react';
import ReactDom from 'react-dom';

const fname = 'Mahedi';
const lname = 'Hasan';
ReactDom.render(
        <>
          <h1>My first name is {fname} and last name is {lname}</h1>
        </>,document.getElementById('root'));