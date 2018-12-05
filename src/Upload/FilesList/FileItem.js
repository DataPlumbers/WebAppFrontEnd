import React, { Component } from 'react';
import { CircularProgress, TableCell, TableRow } from '@material-ui/core';

export default class FileItem extends Component {

   renderCells = (ids) => {
      return ids.map(id => {
         return <TableCell key={id}>{this.props.file[id]}</TableCell>
      })
   }
   
   render() {
      return (
         <TableRow hover={true}>
            {this.renderCells(["name", "size", "type"])}
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
