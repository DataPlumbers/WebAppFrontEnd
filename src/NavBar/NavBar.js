import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuList from './MenuList/MenuList';

const styles = {
   root: {
     flexGrow: 1,
   },
   grow: {
     flexGrow: 1,
   },
   menuButton: {
     marginLeft: -12,
     marginRight: 20,
   },
 };

const NavBar = (props) => {
   const { classes } = props;

   return (
      <div>
         <AppBar position="static">
            <Toolbar>
               <MenuList buttonClass={classes.menuButton} />
               <Typography variant="h6" color="inherit" className={classes.grow}>
                  Data Classifier
               </Typography>
               <Button color="inherit">Login</Button>
            </Toolbar>
         </AppBar>
      </div>
   );
}

export default withStyles(styles)(NavBar);