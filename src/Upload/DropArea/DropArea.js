import React from 'react';
import Icon from '@material-ui/core/Icon';
import './DropArea.scss';

class DropArea extends React.Component {
   state = {
      files: []
   }

   handleChange = event => {
      this.setState({files: event.target.files});
      
      console.log("Event files", event.target.files);

      this.props.onDrop(event.target.files);
   }

   componentDidUpdate() {
      console.log("DropArea files", this.state.files);
   }

   render() {
      return (
         <div className="droparea container">
            <input className="file-input" type="file" multiple onChange={this.handleChange}/>
            <div class="upload-icon container">
               <Icon className="icon" fontSize="large">cloud_upload</Icon>
               <h3>Select dataset files to upload</h3>
            </div>
         </div>
      );
   }
}

export default DropArea;