import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';

export default class DropArea extends Component {

   handleChange = event => {
      this.props.onDrop(event.target.files);
   };

   render() {
      return (
         <div className="droparea container">
            <input className="file-input" type="file" multiple onChange={this.handleChange} accept=".csv" />
            <div className="upload-icon container">
               <Icon className="icon" fontSize="large">cloud_upload</Icon>
               <h3>Select dataset files to upload</h3>
            </div>
         </div>
      );
   }
}
