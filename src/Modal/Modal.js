import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';

import './Modal.scss';

const types = {
   0: "ERROR",
   1: "SUCCESS",
   2: "INFO"
};

const renderMessage = message => {
   return (
      <div className="modal-box-content">
         {message.split('\n').map((item, key) => {
            return <Fragment key={key}>{item}<br/></Fragment>
         })}
      </div>
   );
}

const Modal = ({type, message, callback}) => {
   return (
      <div className="modal-overlay modal-flex">
         <div className="modal-box">
            <span className={`modal-text modal-text-${types[type].toLowerCase()}`}>
               <>
                  {types[type]}
                  <div className="hr-divider" />
               </>
            </span>
         
            {message.length > 0 ? renderMessage(message) : null}
            
            <div className="modal-box-button">
               <Button fullWidth={true} onClick={callback} variant="contained" color="primary" className="button">OK</Button>
            </div>
         </div>
      </div>
   );
};

export default Modal;