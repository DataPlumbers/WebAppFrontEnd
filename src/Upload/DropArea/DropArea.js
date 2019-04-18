import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';

export default class DropArea extends Component {

   handleChange = event => {
      this.props.onDrop(event.target.files);
   };

   toggleUpload = () => {
      this.input.click();
   }

   render() {
      return (
         <div onClick={this.toggleUpload} className="input-body">
            <div className="droparea container">
               <div className="upload-icon container">
                  <Icon className="icon" fontSize="large">cloud_upload</Icon>
                  <h3>Select dataset files to upload</h3>
               </div>
               <input
                  className="file-input"
                  type="file"
                  multiple
                  onChange={this.handleChange}
                  accept=".csv"
                  ref={input => this.input = input}
                  style={{ display: 'none' }}
               />
            </div>
         </div>
      );
   }
}
