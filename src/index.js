import React from 'react';
import ReactDOM from 'react-dom'
import * as Calculator from './App';

ReactDOM.render(
  <>
    <ul>
        <li>Addition : {Calculator.Add(40,4)}</li>
        <li>Substraction : {Calculator.Sub(40,4)}</li>
        <li>Multiplication : {Calculator.Mul(40,4)}</li>
    </ul>
  </>,
  document.getElementById('root')
  );