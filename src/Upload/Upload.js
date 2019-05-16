import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import DropArea from './DropArea/DropArea';
import FilesList from './FilesList/FilesList';
import './Upload.scss';

const ONE_MB_IN_BYTES = 1048576; // 1 MB in bytes
const MAX_FILE_SIZE = ONE_MB_IN_BYTES * 10; // 10 MB
const MIN_FILE_SIZE = 0; // 0 bytes

export default class Upload extends Component {
   state = {
      selectedFile: null,
      files: []
   };

   componentDidMount() {
      // Restore files state for navigating back to Upload.js view
      if (this.props.location.state) {
         this.setState({ files: this.props.location.state.files });
      }
   }

   handleDrop = files => {
      const newFiles = Array.from(files);
      const filteredNewFiles = [...this.filterByFileSize(newFiles, MAX_FILE_SIZE)];
      let currentFiles = this.state.files;

      currentFiles = currentFiles.concat(filteredNewFiles);
      this.setState({ files: currentFiles });
   };

   filterByFileSize = (files, maxSize) => {
      return files.filter(file => (file.size > MIN_FILE_SIZE && file.size <= maxSize));
   };

   isFilesListEmpty = () => {
      return this.state.files.length === 0;
   };

   removeFile = index => {
      let files = [...this.state.files];
      files.splice(index, 1);
      this.setState({ files: files });
   };

   removeAllFiles() {
      this.setState({ files: [] });
   }

   render() {
      return (
         <>
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
               <Grid justify="space-around" alignItems="center" direction="row" container>
                  <Grid item>
                     <h3>Upload Datasets</h3>
                  </Grid>
                  <Grid item>
                     <Button variant="contained"
                        color="default"
                        disabled={this.isFilesListEmpty()}
                        component={(props) => <Link to={{
                           pathname: "/classify",
                           state: { files: this.state.files }
                        }} {...props} />}>
                        Next
                  </Button>
                  </Grid>
               </Grid>

               <div style={{ display: 'flex', flex: 1, flexDirection: 'column', minWidth: '60vw' }}>
                  <div className="upload content-body">
                     <DropArea onDrop={this.handleDrop} />
                  </div>
                  <div className="files-list-body content-body">
                     <FilesList files={this.state.files} uploadFile={this.uploadFile} handleRemoveFile={this.removeFile} />
                  </div>
               </div>
            </div>
         </>
      );
   }
}
