import React, { Component } from 'react';
import DropArea from './DropArea/DropArea'

import './Upload.scss';

export default class Upload extends Component {
   state = {
      selectedFile: null,
      files: []
   };

   handleChange = event => {
      this.setState({selectedFile: event.target.files[0]});
   }

   handleDrop = files => {
      console.log("Before setState", files);
      this.setState({files: files});
   }

   componentDidUpdate() {
      console.log("After setState", this.state.files);
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
            <DropArea onDrop={this.handleDrop}/>

            {this.state.selectedFile != null ? this.renderFileContents() : null}
         </div>
      );
   }
}
