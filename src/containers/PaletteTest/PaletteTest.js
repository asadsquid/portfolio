import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import './PaletteTest.css'
import test from '../../images/test.png';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List'

const styles = theme => ({
  wrapper: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  box: {
    height: '100%',
    width: '100%',
  },
  p1: {
    justifyContent: 'center',
    display: 'flex',
    height: '100vh',
    width: '1000px',
  },
});

export class PaletteTest extends React.Component {

  render() {
    const { classes } =  this.props;

    return (

      <div className={classes.wrapper}>
        <div className={classes.p1}>
          <div className={classes.box} style={{backgroundColor: '#885159'}}></div>
          <div className={classes.box} style={{backgroundColor: '#AFA2FF'}}></div>
          <div className={classes.box} style={{backgroundColor: '#645188'}}></div>
          <div className={classes.box} style={{backgroundColor: '#886451'}}></div>
          <div className={classes.box} style={{backgroundColor: '#528881'}}></div>
          <div className={classes.box} style={{backgroundColor: '#F1F7EE'}}></div>
          <div className={classes.box} style={{backgroundColor: '#1E2019'}}></div>
        </div>
      </div>
    )

  }

}

export default withStyles(styles)(PaletteTest)
