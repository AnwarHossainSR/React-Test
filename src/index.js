import React from 'react';
import ReactDom from 'react-dom';

//ReactDom.render(<h2>Hello World !!</h2>,document.getElementById('root'))

//ReactDom.render( /*#__PURE__*/React.createElement("h2", null, "Hello World !!"), document.getElementById('root'));

var h1 = document.createElement('h1');
h1.innerHTML='Mahedi Hasan';
document.getElementById('root').appendChild(h1);