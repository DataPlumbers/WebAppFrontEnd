import React, { Component } from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

export default class SetList extends Component {
   state = {
      classifiedDatasets: [{ id: 1, category: "Reviews", total: 100}],
      others: [
         { id: 2, category: "Products", total: 45}, 
         { id: 3, category: "Purchases", total: 20},
         { id: 4, category: "Customers", total: 15}
      ]
   }

   renderListItems = (datasets) => {
      return datasets.map(dataset => {
         const secondary = dataset.total ? dataset.total + " datasets" : null;
         return (<ListItem key={dataset.id} divider={true} button>
            <ListItemIcon>
               <FolderIcon />
            </ListItemIcon>
            <ListItemText
               primary={dataset.category}
               secondary={secondary}
            />
         </ListItem>);
      })
   }

   render() {
      return (
         <>
            <h3>Classified Datasets</h3>
            <div className="setlist content-body">
               <Grid className="classification-grid">
                  <Typography align={'left'} gutterBottom={true} variant="h6">
                     Classification Results
                  </Typography>
                  <div>
                  <List>
                     {this.renderListItems(this.state.classifiedDatasets)}
                  </List>
                  </div>
               </Grid>
               <Grid className="classification-grid">
                  <Typography align={'left'} gutterBottom={true} variant="h6">
                     Other Classifications 
                  </Typography>
                  <div>
                  <List dense={true}>
                     {this.renderListItems(this.state.others)}
                  </List>
                  </div>
               </Grid>
            </div>
         </>
      );
   }
}
