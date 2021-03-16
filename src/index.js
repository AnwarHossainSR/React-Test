import React from 'react';
import ReactDom from 'react-dom';

const name = 'Mahedi';
ReactDom.render(
        <>
          <h1>My name is {name}</h1>
          <h1>My lucky number  is {5+3}</h1>
          <h1>Random number {Math.random()}</h1>
        </>,document.getElementById('root'));