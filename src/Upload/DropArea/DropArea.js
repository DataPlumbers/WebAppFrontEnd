import React from 'react';
import Icon from '@material-ui/core/Icon';

class DropArea extends React.Component {

   handleChange = event => {
      this.props.onDrop(event.target.files);
   }

   render() {
      return (
         <div className="droparea container">
            <input className="file-input" type="file" multiple onChange={this.handleChange}/>
            <div className="upload-icon container">
               <Icon className="icon" fontSize="large">cloud_upload</Icon>
               <h3>Select dataset files to upload</h3>
            </div>
         </div>
      );
   }
}

export default DropArea;
