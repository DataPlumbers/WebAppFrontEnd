import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default class MenuList extends Component {
   state = {
      anchorEl: null
   }

   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = () => {
      this.setState({ anchorEl: null });
   };

   render() {
      const open = Boolean(this.state.anchorEl);
      
      return (
         <>
            <IconButton className={this.props.buttonClass} color="inherit" aria-label="Menu" onClick={this.handleClick}>
               <MenuIcon />
            </IconButton>

            <Menu
               anchorEl={this.state.anchorEl}
               open={open}
               onClose={this.handleClose}
            >
               <MenuItem selected={true} onClick={this.handleClose}>
                  BLAH
               </MenuItem>

               <MenuItem selected={false} onClick={this.handleClose}>
                  BLAH2
               </MenuItem>
            </Menu>
         </>
      );
   }
}