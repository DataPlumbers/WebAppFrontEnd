import React, { Component } from 'react';
import Axios from 'axios';
import { Icon, IconButton, TextField, FormGroup } from '@material-ui/core/';
import { Add } from '@material-ui/icons/';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import PropertiesList from './PropertiesList';
import './Classify.scss';

export default class Classify extends Component {
   state = {
      category: "",
      property: "",
      properties: []
   };

   addProperty = () => {
      const newProperty = this.state.property;
      if (newProperty) {
         let newPropertiesList = [...this.state.properties, newProperty];
         newPropertiesList = [...new Set(newPropertiesList)];
         this.setState({properties: newPropertiesList, property: ""});
      }
   };

   handPropertiesListChange = propertyToRemove => {
      let newPropertiesList;
      newPropertiesList = this.state.properties.filter(property => {
         return property !== propertyToRemove;
      });
      this.setState({properties: newPropertiesList});
   };

   handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
   };

   // sends the dataset files and classifcation ontology to the backend
   classify = () => {
      const url = "http://127.0.0.1:8000/upload";
      const data = new FormData();
      const files = this.props.location.state.files; // files passed from Upload.js
      
      files.forEach(file => {
         data.append('file', file);
      });
      data.append('category', this.state.category); // category name (ex. "Review")
      data.append('properties', this.state.properties); // list of headers for classification (ex. ['author', 'comment', 'date'])

      this.props.history.push('/datasets');
      Axios.post(url, data).then(response => {
         // render loading while processing uplaod
         // render next view
      });
   };

   removeCategory = () => {
      const url = "http://127.0.0.1:8000/category/remove";
      const data = new FormData();

      data.append('category', this.state.category);
      Axios.post(url, data).then(response => {
         // reset input fields
      });
   };

   // check if user provided dataset files and classification ontology
   canClassify() {
      return this.state.category && this.state.properties.length > 0 && this.props.location.state.files.length > 0;
   };

   render() {
      return (
         <>
            <Grid justify="space-around" alignItems="center" direction="row" container>
               <Grid item>
                  <Grid alignItems="center" direction="row" container>
                     <Grid item>
                        <IconButton color="inherit" 
                           disableRipple
                           component={(props) => <Link to={{
                              pathname: "/upload",
                              state: {files: this.props.location.state.files}
                              }} {...props}/>}>
                           <Icon>chevron_left</Icon>
                        </IconButton>
                     </Grid>
                     <Grid item>
                        <h3>Classify Dataset</h3>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid item>
                  <Button variant="contained" 
                     color="primary" 
                     disabled={!this.canClassify()}
                     onClick={this.classify}>
                     Classify
                  </Button>
               </Grid>
            </Grid>
            <div className="classify content-body">
               <FormGroup>
                  <FormGroup row>
                     <TextField
                        id="classification-category"
                        name="category"
                        label="Category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        type="search"
                        autoFocus
                        required
                        margin="normal"
                     />
                  </FormGroup>
                  <FormGroup row>
                     <Grid container alignItems="center">
                        <Grid item>
                           <TextField
                              id="category-property"
                              name="property"
                              label="Property"
                              value={this.state.property}
                              onChange={this.handleChange}
                              required
                              margin="normal"
                           />
                        </Grid>
                        <Grid item>
                           <IconButton onClick={this.addProperty} aria-label="Add" disabled={!this.state.property}>
                              <Add />
                           </IconButton>
                        </Grid>
                     </Grid>
                  </FormGroup>
                  <div className="properties-container">
                     <PropertiesList onChange={this.handPropertiesListChange} properties={this.state.properties} />
                  </div>
               </FormGroup>
            </div>
         </>
      );
   }
}
