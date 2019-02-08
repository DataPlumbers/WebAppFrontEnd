import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

import Axios from 'axios';
import './Users.scss';

export default class Login extends Component {
   state = {
      email: "",
      password: "",
      modal: null
   }

   handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

   authenticate = () => {
      let url = 'https://capstone-plumbers-api.herokuapp.com/users/auth';

      Axios.post(url, {
         email: this.state.email,
         password: this.state.password
      }).then(res => {
         window.localStorage.setItem('loggedInUser', JSON.stringify({
            email: res.data.data.email,
            token: res.data.data.token
         }));
         this.openModal(1, "", () => {
            this.props.history.push('/');
         });
      }).catch(err => {
         this.openModal(0, err.response.data.message, this.closeModal);
      })
   }

   openModal = (type, message, callback) => {
      let modal = <Modal type={type} message={message} callback={callback} />
      this.setState({ modal });
   }

   closeModal = () => {
      this.setState({ modal: null });
   }

   renderModal() {
      return this.state.modal;
   }

   render() {
      return (
         <>
            {this.state.modal ? this.renderModal() : null}

            <div>LOGIN</div>
            <div className="login-body">
               <form className="form-container" noValidate autoComplete="off">
                  <div className="text-fields">
                     <TextField
                        label="Email"
                        className="text-field"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        variant="outlined"
                     />
                     <TextField
                        label="Password"
                        className="text-field"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange('password')}
                        margin="normal"
                        variant="outlined"
                     />
                  </div>

                  <div className="button-row">
                     <Button onClick={this.authenticate} variant="contained" color="primary" className="button">Login</Button>
                     <Button component={props => <Link to="/signup" {...props}/>} variant="contained" color="secondary" className="button">Signup</Button>
                  </div>
               </form>
            </div>
         </>
      );
   }
}