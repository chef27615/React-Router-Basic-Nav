import React from 'react';
import { BrowserRouter as Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
        <Route exact path="/" componet={Home} />
        <Route exact path="/about" componet={About} />
        <Route exact path="/Contact" componet={Contact} />
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
          
      </div>
    </div>
  );
};

export default Navigation;
