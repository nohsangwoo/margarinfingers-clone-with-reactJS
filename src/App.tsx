import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './routes/Home';
import About from './routes/About';
import Shop from './routes/Shop';
import LookBook from './routes/LookBook';
import Community from './routes/Community';
import Account from './routes/Account';
function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/lookbook">
              <LookBook />
            </Route>
            <Route path="/community">
              <Community />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
