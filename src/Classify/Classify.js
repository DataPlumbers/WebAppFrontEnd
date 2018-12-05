import React, { Component } from 'react';
import { IconButton, TextField } from '@material-ui/core/';
import { Add } from '@material-ui/icons/';
import PropertiesList from './PropertiesList';

import './Classify.scss';

export default class Classify extends Component {

   constructor() {
      super();
      this.state = {
         category: "",
         property: "",
         properties: []
      }
      this.handleChange = this.handleChange.bind(this);
   }

   addProperty = () => {
      if (this.state.property) {
         let newPropertiesList = this.state.properties.slice();
         newPropertiesList.push(this.state.property);

         this.setState({properties: newPropertiesList, property: ""});
      }
   }

   handPropertiesListChange = (propertyToRemove) => {
      let newPropertiesList;

      newPropertiesList = this.state.properties.filter(property => {
         return property !== propertyToRemove;
      });
      this.setState({properties: newPropertiesList});
   }

   handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
   }

   render() {
      return (
         <>
            <h3>Dataset Category</h3>
            <div className="classify content-body">
               <div>
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
               </div>
               <div>
                  <TextField
                     id="category-property"
                     name="property"
                     label="Property"
                     value={this.state.property}
                     onChange={this.handleChange}
                     margin="normal"
                  />
                  <IconButton onClick={this.addProperty} aria-label="Add">
                     <Add />
                  </IconButton>
               </div>
               <div>
                  <PropertiesList onChange={this.handPropertiesListChange} properties={this.state.properties} />
               </div>
            </div>
         </>
      );
   }
}
