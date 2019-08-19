import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Router} from 'react-router-dom';


const App = () => (
  <div>
    <Navigation />
    <Router path="/" exact component={Home} />
    <Router path='/about' component={About} />
    <Router path='/contact' component={Contact}/>
  </div>
);

export default App;
