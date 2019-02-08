import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

import Axios from 'axios';
import './Users.scss';

export default class Signup extends Component {
   state = {
      email: "",
      password: "",
      verify_password: "",
      modal: null
   }

   handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };

   register = () => {
      let url = 'https://capstone-plumbers-api.herokuapp.com/users/signup';

      Axios.post(url, {
         email: this.state.email,
         password: this.state.password
      }).then(res => {
         this.openModal(1, "", () => {
            this.props.history.push('/login');
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

            <div>SIGNUP</div>
            <div className="login-body">
               <form className="form-container" noValidate autoComplete="off">
                  <div className="text-fields">
                     <TextField
                        label="Enter Email"
                        className="text-field"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        variant="outlined"
                     />
                     <TextField
                        label="Enter Password"
                        className="text-field"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange('password')}
                        margin="normal"
                        variant="outlined"
                     />
                     <TextField
                        label="Verify Password"
                        className="text-field"
                        value={this.state.verify_password}
                        type="password"
                        onChange={this.handleChange('verify_password')}
                        margin="normal"
                        variant="outlined"
                     />
                  </div>

                  <div className="button-row">
                     <Button disabled={this.state.password.length === 0 || this.state.password !== this.state.verify_password} onClick={this.register} variant="contained" color="primary" className="button">Register</Button>
                     <Button component={props => <Link to="/login" {...props}/>} variant="contained" color="secondary" className="button">Login</Button>
                  </div>
               </form>
            </div>
         </>
      );
   }
}