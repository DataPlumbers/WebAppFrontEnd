import React, { Component } from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class FileItem extends Component {
   state = {
      index: null,
      name: "",
      size: null,
      type: ""
   }

   removeFile = () => {
      this.props.onRemove(this.state.index);
   }

   bytesToSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Byte';
      let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
   };

   componentDidMount() {
      const index = this.props.index;
      const { name, type } = this.props.file;
      const size = this.bytesToSize(this.props.file.size);

      this.setState({index: index, name: name, size: size, type: type});
   }

   renderCells = (ids) => {
      return ids.map(id => {
         return <TableCell key={id}>{this.state[id]}</TableCell>;
      });
   }
   
   render() {
      return (
         <TableRow hover={true}>
            {this.renderCells(["name", "size", "type"])}
            <TableCell>
               <IconButton aria-label="Delete" onClick={this.removeFile}>
                  <DeleteIcon fontSize="small" />
               </IconButton>
            </TableCell>
         </TableRow>
      );
   }
}
