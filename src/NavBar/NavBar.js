import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuList from './MenuList/MenuList';
import { Link } from 'react-router-dom';

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
               <Typography variant="h6" color="inherit" style={{textDecoration: "none"}} className={classes.grow} component={props => <Link to="/" {...props}/>}>
                  Data Classifier
               </Typography>
               <Button component={props => <Link to="/login" {...props}/>} color="inherit">Login</Button>
            </Toolbar>
         </AppBar>
      </div>
   );
}

export default withStyles(styles)(NavBar);