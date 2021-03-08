import React from 'react';
import { HashRouter as HRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './views/Home'
import About from './views/About'
import Strategies from './views/Strategies'
import Cases from './views/Cases'
import Contact from './views/Contact'

function App() {
  return (
    <HRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/strategies" exact component={ Strategies } />
          <Route path="/cases" exact component={ Cases } />
          <Route path="/contact" component={ Contact } />
        </Switch>
        <Footer />
     </div>
    </HRouter>
  );
}

export default App;
