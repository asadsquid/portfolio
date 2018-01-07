import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import './Main.css'
import test from '../../images/test.png';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/Menu';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List'
import NavBar from '../../components/NavBar'
import ContentBox from '../../components/ContentBox'
import Logo from '../../components/Logo'

const styles = theme => ({
  menuButton: {
    color: theme.palette.p1.tint,
  },
  hiColor: {
    fontColor: theme.palette.p1.tint,
  },
  head: {
    backgroundColor: theme.palette.p1.plum,
  },
  intro: {
    backgroundColor: theme.palette.p1.purple,
  },
  work: {
    backgroundColor: theme.palette.p1.tint,
  },
  etc: {
    backgroundColor: theme.palette.p1.tea,
  },


});

export class Main extends React.Component {

  // constructor() {
  //   super()
  // }

  render() {
    const { classes } =  this.props;
      return (

      <div className = "main-content">
        <NavBar></NavBar>
        <div className = "main-wrapper">

          <div id="head-wrap">
            <div id='logo'>
              <Logo/>
            </div>
            <div id='desc'>
              <h2>software engineer</h2>
              <h2>minneapolis</h2>
              {/* <h2>sagittarius</h2> */}
              <h2>enfp</h2>

            </div>


          </div>

          <div id="head" className={ classes.head }>
            <ContentBox>
            </ContentBox>
          </div>

          <div id="intro" className={ classes.intro }>
          <ContentBox>
          </ContentBox>
          </div>

          <div id="work" className={ classes.work }>
            <ContentBox>
            </ContentBox>
          </div>

          <div id="etc" className={ classes.etc }>
            <ContentBox>
            </ContentBox>
          </div>

        </div>

      </div>
    )

  }

}

export default withStyles(styles)(Main)
