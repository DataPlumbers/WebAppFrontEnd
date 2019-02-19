import React, { Component } from 'react';
import Axios from 'axios';
import { IconButton, TextField, FormGroup } from '@material-ui/core/';
import { Add } from '@material-ui/icons/';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PropertiesList from './PropertiesList';
import './Classify.scss';

export default class Classify extends Component {
   state = {
      category: "",
      property: "",
      properties: []
   };

   addProperty = () => {
      if (this.state.property) {
         let newPropertiesList = this.state.properties.slice();
         newPropertiesList.push(this.state.property);
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

   classify = () => {
      const url = "http://127.0.0.1:8000/upload";
      const data = new FormData();
      const files = this.props.location.state.files; // files passed from Upload.js
      
      files.forEach(file => {
         data.append('file', file);
      });
      data.append('category', this.state.category); // category name (ex. "Review")
      data.append('properties', this.state.properties); // list of headers for classification (ex. ['author', 'comment', 'date'])

      Axios.post(url, data).then(response => {
         
      });
   };

   render() {
      return (
         <>
            <Grid justify="space-around" alignItems="center" direction="row" container>
               <Grid item>
                  <h3>Classify Dataset</h3>
               </Grid>
               <Grid item>
                  <Button variant="contained" color="primary" onClick={this.classify}>
                     Classify
                  </Button>
               </Grid>
            </Grid>
            <div className="classify content-body">
               <FormGroup>
                  <FormGroup row={true}>
                     <TextField
                        id="classification-category"
                        name="category"
                        label="Category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        type="search"
                        autoFocus={true}
                        required={true}
                        margin="normal"
                     />
                  </FormGroup>
                  <FormGroup row={true}>
                     <Grid container alignItems="center">
                        <Grid item>
                           <TextField
                              id="category-property"
                              name="property"
                              label="Property"
                              value={this.state.property}
                              onChange={this.handleChange}
                              margin="normal"
                           />
                        </Grid>
                        <Grid item>
                           <IconButton onClick={this.addProperty} aria-label="Add">
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
