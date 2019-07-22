import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import Paintings from './Paintings/Paintings';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Switch>
          <Route
            exact path={'/'}
            component={Home}
          />
          <Route
            path={'/paintings'}
            component={Paintings}
          />
          <Route
            path={'/contact'}
            component={Contact}
          />
          <Route
            component={NotFound}
          />
        </Switch>
        <Footer />
      </main>
    </>
  );
}

export default App;
