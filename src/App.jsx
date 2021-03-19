import React from 'react'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Name from './component/Name';
import Navbar from './component/Navbar';
import { Route, Switch } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/user/details"
          component={() => (
            <Switch>
              <Route exact component={Name} />
            </Switch>
          )}
        />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App
