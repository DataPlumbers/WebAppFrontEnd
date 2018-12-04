import React, { Component } from 'react';
import { Paper, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import FileItem from './FileItem'

const labels = ["Filename", "Size", "Type", "Upload Progress"];

export default class FilesList extends Component {

   renderFileItems() {
      let files = Array.from(this.props.files);

      return files.map(file => {
         return (
            <FileItem key={file.name} file={file} />
         );
      });
   }

   renderCells = (labels) => {
      return (
         <>
            {labels.map(label => {
               return <TableCell key={label}>{label}</TableCell>
            })}
         </>
      );
   }

   render() {
      return (
         <Paper className="files-list">
               <Table>
                  <TableHead>
                     <TableRow>
                           {this.renderCells(labels)}
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
