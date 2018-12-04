import React from 'react';
import { IconButton, TextField } from '@material-ui/core/';
import { Add } from '@material-ui/icons/';
import PropertiesList from './PropertiesList';

import './Classify.scss';

class Classify extends React.Component {
   state = {
      category: "",
      property: "",
      properties: []
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

   handlePropertyTextFieldChange = event => {
      this.setState({property: event.target.value});
   }

   render() {
      return (
         <>
         <h3>Dataset Category</h3>
         <div className="classify body">
            <div>
               <TextField
                  id="classification-category"
                  label="Category"
                  value={this.state.category}
                  type="search"
                  autoFocus={true}
                  margin="normal"
               />
            </div>
            <div>
               <TextField
                  id="classification-property"
                  label="Property"
                  value={this.state.property}
                  onChange={this.handlePropertyTextFieldChange}
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

export default Classify;
