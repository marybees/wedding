import React, {useEffect} from 'react';
import './index.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
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
import Food from './Food';
import Covid from './Covid';
import Dayof from './Dayof';
import Seat from './Seat';
import Shuttles from './Shuttles';
import images from "./images.json"

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  /// Preload all the images on the our story page when the page loads
  /// There are a lot of pictures, so it'd be nice to load those ahead of time
  useEffect(() => {
    images.forEach((image) => {
      new Image().src = image.src;
    });

    /// Another that is on that page
    new Image().src = "https://d26vfj57l1h7c2.cloudfront.net/proposal.png";
  });

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Dayof/>
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
          <Route path='/food'>
            <Food/>
          </Route>
          <Route path='/covid-19'>
            <Covid/>
          </Route>
          <Route path='/dayof'>
            <Dayof/>
          </Route>
          <Route path='/seat'>
            <Seat/>
          </Route>
          <Route path='/shuttles'>
            <Shuttles/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
