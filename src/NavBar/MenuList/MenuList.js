import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

export default class MenuList extends Component {
   state = {
      anchorEl: null
   }

   handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
   };

   handleClose = (path) => {
      this.setState({ anchorEl: null });
   };

   render() {
      const open = Boolean(this.state.anchorEl);
      const links = [
         {title: "View Datasets", url: "datasets"},
         {title: "Upload Datasets", url: "upload-sets"},
         {title: "Classify Datasets", url: "classify"}
      ]
      
      return (
         <>
            <IconButton className={this.props.buttonClass} color="inherit" aria-label="Menu" onClick={this.handleClick}>
               <MenuIcon />
            </IconButton>

            <Menu
               anchorEl={this.state.anchorEl}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
               }}
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
               }}
               getContentAnchorEl={null}
               open={open}
               onClose={this.handleClose}
            >
               {links.map(link => {
                  return (
                     <MenuItem key={link.url} selected={false} onClick={this.handleClose} component={props => <Link to={`/${link.url}`} {...props} />}>
                        {link.title}
                     </MenuItem>
                  );
               })}
            </Menu>
         </>
      );
   }
}