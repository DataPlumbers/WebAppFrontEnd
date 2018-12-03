import React from 'react';
import { Paper, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import FileItem from './FileItem'

class FilesList extends React.Component {

   renderFileItems() {
      let files = Array.from(this.props.files);

      return files.map(file => {
         return (
            <FileItem key={file.name} file={file} />
         );
      });
   }

   render() {
      return (
         <Paper className="files-list">
               <Table>
                  <TableHead>
                     <TableRow>
                           <TableCell>Filename</TableCell>
                           <TableCell>Size</TableCell>
                           <TableCell>Type</TableCell>
                           <TableCell>Upload Progress</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {this.props.files ? this.renderFileItems() : null}
                  </TableBody>
               </Table>
         </Paper>
      );
   }
}

export default FilesList;
