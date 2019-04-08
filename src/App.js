import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Route } from 'react-router-dom';


const App = () => (
  <div>
    <Navigation />
    <Route exact path="/" componet={Home} />
    <Route exact path="/about" componet={About} />
    <Route exact path="/Contact" componet={Contact} />
    
    
  </div>
);

export default App;
