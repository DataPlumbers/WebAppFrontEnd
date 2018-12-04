import React from 'react';
import Icon from '@material-ui/core/Icon';

class PropertiesList extends React.Component {

   removeProperty = (property) => {
      this.props.onChange(property);
   }

   render() {
      return (
         <>
            {this.props.properties.map(property => {
               return <span key={property}>{property} <Icon onClick={() => this.removeProperty(property)}>remove_circle</Icon> </span>
            })}
         </>
      );
   }
}

export default PropertiesList;
