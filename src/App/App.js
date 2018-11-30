import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Login from '../Users/Login';
import Signup from '../Users/Signup';
import SetList from '../SetList/SetList';

class App extends Component {
   render() {
      return (
         <div className="App">
            
            <Router>
               <>
                  <NavBar />
                  <div className="App-body">
                     <Route exact path="/" component={Home} />
                     <Route path="/login" component={Login} />
                     <Route path="/signup" component={Signup} />
                     <Route path="/datasets" component={SetList} />
                  </div>
               </>
            </Router>
         </div>
      );
   }
}

export default App;
