import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import './App.scss';

import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import Login from '../Users/Login';
import Signup from '../Users/Signup';
import SetList from '../SetList/SetList';
import Upload from '../Upload/Upload';
import Classify from '../Classify/Classify';

const isAuthenticated = () => {
   return window.localStorage.length > 0 &&
      window.localStorage.getItem('loggedInUser') !== null;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
   return (
     <Route
       {...rest}
       render={props =>
         isAuthenticated() ? (
           <Component {...props} />
         ) : (
           <Redirect
             to={{
               pathname: "/login",
               state: { from: props.location }
             }}
           />
         )
       }
     />
   );
 }

class App extends Component {
   render() {
      return (
         <div className="App"> 
            <Router>
               <>
                  <NavBar />
                  <div className="App-body">
                     <PrivateRoute exact path="/" component={Home} />
                     <Route path="/login" component={Login} />
                     <Route path="/signup" component={Signup} />
                     <PrivateRoute path="/datasets" component={SetList} />
                     <PrivateRoute path="/upload" component={Upload} />
                     <PrivateRoute path="/classify" component={Classify} />
                  </div>
               </>
            </Router>
         </div>
      );
   }
}

export default App;
