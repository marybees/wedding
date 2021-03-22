import './index.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Accommodation from './Accommodation';
import Directions from './Directions';
import Home from './Home';
import Memory from './Memory';
import Registry from './Registry';
import Song from './Song';
import Story from './Story';

import React from 'react'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/accommodations'>
            <Accommodation/>
          </Route>
          <Route path='/directions'>
            <Directions/>
          </Route>
          <Route path='/memories'>
            <Memory/>
          </Route>
          <Route path='/registry'>
            <Registry/>
          </Route>
          <Route path='/songs'>
            <Song/>
          </Route>
          <Route path='/story'>
            <Story/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
