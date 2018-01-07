
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List'

const styles = theme => ({
  menuWrapper: {
    position: 'fixed',
    width: '100%',
    zIndex: 2,
    backgroundColor: 'none',
    color: theme.palette.p1.tint,
    height: 50,
    padding: 0,
    borderColor: theme.palette.p1.tint,
    border: '2px dashed',
  },
  menuButton: {
    padding: 0,
    width: 24,
    margin: '0px 0 20px 0px',
  },

});


class NavBar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
   this.setState({
     [side]: open,
   });
  };
  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>  head </ListItem>
          <ListItem button>  intro </ListItem>
          <ListItem button>  work </ListItem>
          <ListItem button>  etc </ListItem>
        </List>
      </div>
    );

    return (

     <div className={classes.menuWrapper}>

       <div className={classes.menuButton}>
         <IconButton color='inherit' onClick={this.toggleDrawer('left', true)}>
           <MoreVertIcon />
         </IconButton>
       </div>

       <Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
         <div
           tabIndex={0}
           role="button"
           onClick={this.toggleDrawer('left', false)}
           onKeyDown={this.toggleDrawer('left', false)}
           >
           {sideList}
         </div>
       </Drawer>

     </div>
   );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
