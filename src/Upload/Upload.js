import React, { Component } from 'react';

import './Upload.scss';

export default class Upload extends Component {
   state = {
      selectedFile: null
   };

   handleChange = event => {
      this.setState({selectedFile: event.target.files[0]});
   }

   render() {
      return (
         <div className="upload-body">
            UPLOAD DATASET
            <input type="file" onChange={this.handleChange}/>
         </div>
      );
   }
}
