import React from 'react';
import Home from './Home';
import ReactDOM from 'react-dom';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import {BrowserRouter as Router} from 'react-router-dom';
import App from '../App';


export { Home, About, Contact, Navigation };



ReactDOM.render( 
<Router> 
    <App/>
    </Router>, 
    document.getElementById('root'));
