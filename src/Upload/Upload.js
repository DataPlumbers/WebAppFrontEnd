import React, { Component } from 'react';

import './Upload.scss';

export default class Upload extends Component {
   state = {
      selectedFile: null
   };

   handleChange = event => {
      this.setState({selectedFile: event.target.files[0]});
   }

   renderFileContents = () => {
      let reader = new FileReader();

      reader.onload = () => {
         let text = reader.result;
         console.log(text);
      }

      reader.readAsText(this.state.selectedFile);
   }

   render() {
      return (
         <div className="upload-body">
            UPLOAD DATASET
            <input type="file" onChange={this.handleChange}/>

            {this.state.selectedFile != null ? this.renderFileContents() : null}
         </div>
      );
   }
}
