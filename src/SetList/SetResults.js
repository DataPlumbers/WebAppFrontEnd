import React, { Component } from 'react';
import { Table, TableCell, TableBody, TableHead, TableRow } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CloudDownload } from '@material-ui/icons';

import './SetList.scss';

export default class SetResult extends Component {
   state = {
      title: "",
      results: null,
      download: {
         filename: "",
         rhef: ""
      }
   }

   componentWillMount() {
      if (this.props.location.state) {
         const jsonData = this.props.location.state.data;
         const download = {
            filename: this.generateDownloadFilename(jsonData),
            rhef: this.generateDownloadHref(jsonData)
         };
         this.setState({
            title: this.props.location.state.data.category, 
            results: this.props.location.state.data.data,
            download: download
         });
      } else {
         this.props.history.push('/');
      }
   }

   generateDownloadFilename = (jsonData) => {
      return jsonData.category + "_export.json";
   };

   generateDownloadHref = (jsonOata) => {
      const contentType = "application/json;charset=utf-8;";
      const href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(jsonOata));
      return href;
   };

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
      return (
         <>
            <div className="setresults content-body">
            <Grid container justify="center" direction="column">
               <Grid item container justify="space-between" alignItems="center" alignContent="center">
                  <Typography align={'center'} gutterBottom variant="h4">
                     {this.state.title}
                  </Typography>
                  <Button 
                     variant="contained" 
                     color="primary" 
                     download={this.state.download.filename} 
                     href={this.state.download.rhef} 
                     target="_blank">
                     <CloudDownload style={{marginRight: 10}} />
                     Export
                  </Button>
               </Grid>
               <Grid item>
                  {this.state.results ? this.renderClassifications(this.state.results) : null}
               </Grid>
            </Grid>   
            </div>
         </>
      );
   }
}