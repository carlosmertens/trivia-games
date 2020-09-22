import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import Quizes from './pages/quizes';
import Results from './pages/results';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/quizes' component={Quizes} />
      <Route exact path='/results' component={Results} />
    </Router>
  );
}

export default App;
