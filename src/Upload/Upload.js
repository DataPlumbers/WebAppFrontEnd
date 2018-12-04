import React, { Component } from 'react';
<<<<<<< HEAD
import DropArea from './DropArea/DropArea'
import FilesList from './FilesList/FilesList'
=======
>>>>>>> abb67e41c63a55910adb1c1825993abebe3c0a8e

import './Upload.scss';

export default class Upload extends Component {
   state = {
<<<<<<< HEAD
      selectedFile: null,
      files: []
=======
      selectedFile: null
>>>>>>> abb67e41c63a55910adb1c1825993abebe3c0a8e
   };

   handleChange = event => {
      this.setState({selectedFile: event.target.files[0]});
   }

<<<<<<< HEAD
   handleDrop = files => {
      this.setState({files: files});
   }

=======
>>>>>>> abb67e41c63a55910adb1c1825993abebe3c0a8e
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
<<<<<<< HEAD
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
=======
         <div className="upload-body">
            UPLOAD DATASET
            <input type="file" onChange={this.handleChange}/>

            {this.state.selectedFile != null ? this.renderFileContents() : null}
         </div>
>>>>>>> abb67e41c63a55910adb1c1825993abebe3c0a8e
      );
   }
}
