import React, { Component } from 'react';
import { Paper, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core';
import FileItem from './FileItem'

const labels = ["Filename", "Size", "Type", ""];

export default class FilesList extends Component {

   renderFileItems() {
      let files = this.props.files;

      return files.map((file, index) => {
         const key = file.name + index;
         return (
            <FileItem key={key} index={index} file={file} onRemove={this.props.handleRemoveFile} />
         );
      });
   }

   renderCells = (labels) => {
      return (
         <>
            {labels.map((label, idx) => {
               return <TableCell key={label} style={{ flex: idx !== 0 ? 1 : 4 }}>{label}</TableCell>
            })}
         </>
      );
   };

   render() {
      return (
         <Paper className="files-list">
            <Table>
               <colgroup>
                  <col style={{ width: '55%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '20%' }} />
                  <col style={{ width: '5%' }} />
               </colgroup>
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
