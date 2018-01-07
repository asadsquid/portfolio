import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import './Main.css'
import test from '../../images/test.png';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List'
import NavBar from '../../components/NavBar'
import ContentBox from '../../components/ContentBox'
import Logo from '../../components/Logo'
import Banner from '../../components/Banner'

const styles = theme => ({
  mainContent: {
    backgroundColor: theme.palette.p1.background,
    height: '100vh',
    width: '100vw'
  },
  root: {
    width: '100%',
  },
  appFrame: {}

});

export class Main extends React.Component {

  // constructor() {
  //   super()
  // }

  render() {
    const { classes } =  this.props;
      return (

      <div className = {classes.mainContent}>
        <Banner />
        <div className = {classes.mainWrapper}>
          <div id="head-wrap">
            <Logo />
          </div>~
            <div id='desc'>
          </div>
        </div>

      </div>
    )

  }

}

Main.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(Main)
