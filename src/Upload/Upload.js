import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DropArea from './DropArea/DropArea';
import FilesList from './FilesList/FilesList';

import './Upload.scss';

const ONE_MB_IN_BYTES = 1048576; // 1 MB in bytes
const MAX_FILE_SIZE = ONE_MB_IN_BYTES * 10; // 10 MB

export default class Upload extends Component {
   state = {
      selectedFile: null,
      files: []
   };

   handleDrop = files => {
      const newFiles = Array.from(files);
      const filteredNewFiles = [...this.filterByFileSize(newFiles, MAX_FILE_SIZE)];
      let currentFiles = this.state.files;

      currentFiles = currentFiles.concat(filteredNewFiles);
      this.setState({files: currentFiles});
   }

   filterByFileSize = (files, maxSize) => {
      return files.filter(file => (file.size <= maxSize));
   }

   isFilesListEmpty = () => {
      return this.state.files.length === 0;
   }

   componentDidUpdate() {
      console.log(this.state.files);
   }

   removeFile = index => {
      let files = [...this.state.files];
      files.splice(index, 1);
      this.setState({files: files});
   }

   removeAllFiles() {
      this.setState({files: []});
   }

   uploadFiles = () => {
      const url = "http://127.0.0.1:8000/upload";
      const data = new FormData();
      
      this.state.files.forEach(file => {
         data.append('file', file);
      });

      axios.post(url, data).then(response => {
         console.log(response);
         this.removeAllFiles();
      });
   }

   render() {
      return (
         <>
            <Grid justify="space-around" alignContent="center" alignItems="center" direction="row" container={true}>
               <h3>Upload Datasets</h3>
               <Button variant="contained" color="default" onClick={this.uploadFiles} disabled={this.isFilesListEmpty()}>
                  Next
               </Button>
            </Grid>
            <div className="upload content-body">
               <DropArea onDrop={this.handleDrop} />
            </div>
            <div className="files-list-body content-body">
               <FilesList files={this.state.files} uploadFile={this.uploadFile} handleRemoveFile={this.removeFile} />
            </div>
         </>
      );
   }
}
