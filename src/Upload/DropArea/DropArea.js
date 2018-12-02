import React from 'react';
import './DropArea.scss';

class DropArea extends React.Component {
   render() {
      return (
        <div className="droparea container">
            <input className="file-input" type="file" />
        </div>
      );
   }
}

export default DropArea;