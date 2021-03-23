import React from 'react';
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
import Header from './Header';
import Footer from './Footer';
import Activities from './Activities';
import Covid from './Covid';

function App() {
  return (
    <Router>
      <div>
        <Header/>
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
          <Route path='/share-a-memory'>
            <Memory/>
          </Route>
          <Route path='/registry'>
            <Registry/>
          </Route>
          <Route path='/request-a-song'>
            <Song/>
          </Route>
          <Route path='/our-story'>
            <Story/>
          </Route>
          <Route path='/activities'>
            <Activities/>
          </Route>
          <Route path='/covid-19'>
            <Covid/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
