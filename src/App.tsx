import React from 'react';
import Header from './components/Header'
import { BrowserRouter as BRouter, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Cases from './views/Cases'
import Contact from './views/Contact'

function App() {
  return (
    <BRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/cases" exact component={ Cases } />
          <Route path="/contact" component={ Contact } />
        </Switch>
     </div>
    </BRouter>
  );
}

export default App;
