import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.scss';

import NavBar from '../NavBar/NavBar';
import Table from '../Table/Table';

class App extends Component {
   render() {
      return (
         <div className="App">
            <NavBar />
            <div className="App-body">
               <h2>View Dataset</h2>
               <Table />
            </div>
         </div>
      );
   }
}

export default App;
