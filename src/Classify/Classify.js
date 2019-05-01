import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Icon, IconButton, TextField, FormGroup } from '@material-ui/core/';
import { Add } from '@material-ui/icons/';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import PropertiesList from './PropertiesList';
import Autocomplete from './Autocomplete';
import './Classify.scss';

// temporary dummy data
const results = {
   Review: {
      name: {
            "eCommerce.csv": ["name", "Consumer_name", "Review_name"],
            "data.csv": ["name"]
      },
      summary: {
            "eCommerce.csv": [""],
            "data.csv": ["rev_summary", "sum_date"]
      },
      id: {
            "eCommerce.csv": ["rev_id", "user_id", "product_id"],
            "data.csv": ["id", "user_id"]
      }
   }
};

export default class Classify extends Component {
   state = {
      category: "",
      property: "",
      properties: [],
      selectedCategory: null
   };

   addProperty = () => {
      const newProperty = this.state.property;
      if (newProperty) {
         let newPropertiesList = [...this.state.properties, newProperty];
         newPropertiesList = [...new Set(newPropertiesList)];
         this.setState({properties: newPropertiesList, property: ""});
      }
   };

   onSelectCategory = category => {
      if (category) {
         this.setState({
            category: category.label,
            properties: category.value,
            selectedCategory: category
         });
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

      Axios.post(url, data).then(response => {
         // render loading while processing uplaod
         // render next view
         if (response.data.ok) {
            this.props.history.push({
               pathname: '/classifications',
               state: {results: response.data.results}
            });
         }
      });
   };

   /**
    * Returns a list of categories.
    * name - if category name contains this string within its name, return those
    * Example return: [
    *    {label: 'Reporter', value: ['fullname', 'role', 'address', 'id']},
    *    {label: 'Review', value: ['author', 'comment', 'date']}
    * ]
    */
   getCategories = async name => {
      const url = "http://127.0.0.1:8000/category/get";
      let result = [];
      const config = {
         params: {
            'category_name': name
         }
      };

      const response = await Axios.get(url, config);
      if (response.data.ok) {
         result = response.data.categories;
      }
      return result;
   }

   removeCategory = async () => {
      const url = "http://127.0.0.1:8000/category/remove";
      const data = new FormData();

      if (this.state.selectedCategory) {
         const categoryName = this.state.selectedCategory.label;
         data.append('category_name', categoryName);
         const response = await Axios.post(url, data);
         if (response.data.ok) {
            this.resetForm();
         }
      }
   };

   resetForm = () => {
      this.setState({
         selectedCategory: null,
         category: "",
         property: "",
         properties: []
      });
   };

   // check if user provided dataset files and classification ontology
   canClassify = () => {
      return this.state.category && this.state.properties.length > 0 && this.props.location.state.files.length > 0;
   };

   canRemoveCategory = () => {
      return (this.state.selectedCategory != null) && (this.state.selectedCategory.label === this.state.category);
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
                     <Autocomplete value={this.state.selectedCategory} filterOptions={this.getCategories} onSelect={this.onSelectCategory} placeholder="Search a category" />
                     <Button color="secondary" onClick={this.removeCategory} disabled={!this.canRemoveCategory()}>
                        <DeleteIcon fontSize="small" />
                     </Button>
                  </FormGroup>
                  <FormGroup row>
                     <TextField
                        id="classification-category"
                        name="category"
                        label="Category"
                        value={this.state.category}
                        onChange={this.handleChange}
                        type="search"
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
