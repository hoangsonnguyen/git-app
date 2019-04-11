import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import SwitchWithSlide from "./components/SwitchWithSlide";
import HomeComponent from './components/Home';
import UserComponent from './components/User';
import NotFoundComponent from './components/NotFound';
import './App.css' ;
class App extends Component {
  render() {
    return (
      <Router>
          <SwitchWithSlide>
            <Route exact path="/" component={HomeComponent} />
            <Route path={`/user/:userName`}  component={UserComponent} />
            <Route component={NotFoundComponent} />
          </SwitchWithSlide>
      </Router>
    );
  }
}

export default App;
