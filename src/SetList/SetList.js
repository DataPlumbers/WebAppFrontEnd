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
      results: [],
      others: [
         //{ id: 2, category: "Products", total: 45}, 
         //{ id: 3, category: "Purchases", total: 20},
         //{ id: 4, category: "Customers", total: 15}
      ]
   }

   componentDidMount() {
      this.getClassificationResults();
   }

   getClassificationResults = () => {
      const data = this.props.location.state.results; // classification results passed in from Classify view
      let categories = Object.keys(data);
      const results = categories.map(category => {
         return {category: category, data: data[category]};
      });
      this.setState({
         results: results
      });
   };

   renderResultsView = (index) => {
      if (this.state.results.length > 0) {
         this.props.history.push({
            pathname: '/results',
            state: {data: this.state.results[index]}
         });
      }
   };

   renderListItems = (results) => {
      return results.map((result, index) => {
         const secondary = result.total ? result.total + " datasets" : null;
         return (
            <ListItem 
               key={result.category}
               divider={true}
               onClick={() => this.renderResultsView(index)}
               button>
               <ListItemIcon>
                  <FolderIcon />
               </ListItemIcon>
               <ListItemText
                  primary={result.category}
                  secondary={secondary}
               />
            </ListItem>
         );
      })
   };

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
                     {this.renderListItems(this.state.results)}
                  </List>
                  </div>
               </Grid>
               {this.state.others.length > 0 ? <Grid className="classification-grid">
                  <Typography align={'left'} gutterBottom={true} variant="h6">
                     Other Classifications 
                  </Typography>
                  <div>
                  <List dense={true}>
                     {this.renderListItems(this.state.others)}
                  </List>
                  </div>
               </Grid> : null}
            </div>
         </>
      );
   }
}
