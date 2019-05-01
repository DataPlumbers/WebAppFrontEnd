import React, { Component } from 'react';
import { Table, TableCell, TableBody, TableHead, TableRow } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import './SetList.scss';

export default class SetResult extends Component {
   state = {
      title: "",
      results: null
   }

   componentWillMount() {
      this.setState({
         title: this.props.location.state.data.category, 
         results: this.props.location.state.data.data
      });
   }

   renderClassifications = (classification) => {
      const properties = Object.keys(classification);
      return properties.map((property, index) => {
         const files = Object.keys(classification[property]);
         return (
            <div key={property}>
               <Typography align={'left'} gutterBottom={true} variant="h6">
                  {property}
               </Typography>
               <Paper key={property + index} className="setresults classification-table">
                  <Table>
                     <TableHead>
                        <TableRow>
                           <TableCell>
                              File
                           </TableCell>
                           <TableCell>
                              Headers Classified
                           </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {files.map((file, index) => {
                           const headers = classification[property][file];
                           return (
                              <TableRow key={file + index}>
                                 <TableCell>
                                    {file}
                                 </TableCell>
                                 <TableCell>
                                    {headers.join(', ')}
                                 </TableCell>
                              </TableRow>
                           );
                        })}
                     </TableBody>
                  </Table>
               </Paper>
            </div>
         );
      });
   };

   render() {
      return(
         <>
            <div className="setresults content-body">
               <Typography align={'center'} gutterBottom={true} variant="h4">
                  {this.state.title}
               </Typography>
               {this.renderClassifications(this.state.results)}
            </div>
         </>
      );
   }
}