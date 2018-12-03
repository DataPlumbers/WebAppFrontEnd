import React from 'react';
import { CircularProgress, TableCell, TableRow } from '@material-ui/core';

class FileItem extends React.Component {

   render() {
      return (
         <TableRow hover={true}>
               <TableCell>
                  {this.props.file.name}
               </TableCell>
               <TableCell>
                  {this.props.file.size}   
               </TableCell>
               <TableCell>
                  {this.props.file.type}        
               </TableCell>
               <TableCell className="upload-progress">
                  <CircularProgress
                     variant="static"
                     size={20}
                     value={80}
                  />
               </TableCell>
         </TableRow>
      );
   }
}

export default FileItem;
