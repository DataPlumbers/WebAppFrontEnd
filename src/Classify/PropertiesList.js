import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

import './Classify.scss';

export default class PropertiesList extends Component {

   removeProperty = property => {
      this.props.onChange(property);
   }

   render() {
      return (
         <>
            {this.props.properties.map(property => {
               return (<Chip
                  className="property-item"
                  key={property}
                  label={property}
                  onDelete={() => this.removeProperty(property)}
                  variant="outlined"
               />);
            })}
         </>
      );
   }
}
