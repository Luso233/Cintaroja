import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import components/holamundo
import Holamundo from '/components/holamundo.js'

ReactDOM.render(<Holamundo/>, document.getElementById('root'));
registerServiceWorker();
