import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from "react-router-dom";

const App = () => {

return(
 <div>

  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/contact" component={Contact}/>

  <Navigation />

</div>

);

  

 }

export default App;

