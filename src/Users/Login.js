import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './Users.scss';

export default class Login extends Component {
   state = {
      userName: "",
      password: ""
   }

   handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

   render() {
      return (
         <>
            <div>LOGIN</div>
            <div className="login-body">
               <form className="form-container" noValidate autoComplete="off">
                  <div className="text-fields">
                     <TextField
                        id="outlined-name"
                        label="User Name"
                        className="text-field"
                        value={this.state.userName}
                        onChange={this.handleChange('userName')}
                        margin="normal"
                        variant="outlined"
                     />
                     <TextField
                        id="outlined-name"
                        label="Password"
                        className="text-field"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                        variant="outlined"
                     />
                  </div>

                  <div className="button-row">
                     <Button variant="contained" color="primary" className="button">Login</Button>
                     <Button component={props => <Link to="/signup" {...props}/>} variant="contained" color="secondary" className="button">Signup</Button>
                  </div>
               </form>
            </div>
         </>
      );
   }
}