import React, { Component } from 'react';
import DropArea from './DropArea/DropArea'
import FilesList from './FilesList/FilesList'

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
      this.setState({files: files});
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
         <>
            <h3>Upload Datasets</h3>
            <div className="upload-body">
               <DropArea onDrop={this.handleDrop} />

               {this.state.selectedFile != null ? this.renderFileContents() : null}
            </div>
            <div className="files-list-body blah">
               <FilesList files={this.state.files} />
            </div>
         </>
      );
   }
}
