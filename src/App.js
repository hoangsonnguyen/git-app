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
  constructor (props) {
    super(props)
    this.state={
        topFive : ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]
    }
  }

  render() {
    const {topFive} = this.state;
    return (
      <Router>
          <SwitchWithSlide>
            <Route exact path="/" component={HomeComponent} />
            {
              topFive && topFive.map((user, key) => <Route key={key} path={`/user/:${user}`}  component={UserComponent} />)
            }
            <Route component={NotFoundComponent} />
          </SwitchWithSlide>
      </Router>
    );
  }
}

export default App;
