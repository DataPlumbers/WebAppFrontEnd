import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import { Assessment, Info } from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class MenuList extends Component {
   state = {
      isDrawerOpen: false
   }

   toggleDrawer = () => {
      this.setState({isDrawerOpen: !this.state.isDrawerOpen});
   };

   renderMenuList = (links) => {
      return links.map(link => {
         return (
            link.internal ? this.renderInternalLink(link) : this.renderEnternalLink(link)
         );
      });
   };

   renderInternalLink(link) {
      return (
         <MenuItem key={link.url} selected={false} onClick={this.toggleDrawer} component={props => <Link to={`/${link.url}`} {...props} />}>
            {this.renderMenuItems(link)}
         </MenuItem>
      );
   };

   renderEnternalLink(link) {
      return (
         <MenuItem 
            key={link.url} 
            selected={false} 
            onClick={this.toggleDrawer} 
            component="a" href={link.url}
            target="_blank">
            {this.renderMenuItems(link)}
         </MenuItem>
      );
   };

   renderMenuItems = (link) => {
      return (
         <>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.title} />
         </>
      );
   }

   render() {
      const links = [
         {title: "Data Classifier", url: "upload", icon: <Assessment />, internal: true},
         {title: "Help", url: "https://dataplumbers123.gitbook.io/data-classifier/", icon: <Info />, internal: false}
      ];
      
      return (
         <>
            <IconButton className={this.props.buttonClass} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
               <MenuIcon />
            </IconButton>

            <Drawer open={this.state.isDrawerOpen} onClose={this.toggleDrawer}>
               <div
                  tabIndex={0}
                  role="button"
                  onClick={ this.toggleDrawer }
                  onKeyDown={ this.toggleDrawer }
               >
                  <List style={{width: 250}}>
                     {this.renderMenuList(links)}
                  </List>
               </div>
            </Drawer>
         </>
      );
   }
}