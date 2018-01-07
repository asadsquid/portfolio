import React from 'react';
import {Route, Switch, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import NavBar from '../../components/NavBar';
import Main from '../Main/Main';
const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  appFrame: {
    width: '100%',
    height: '100%',
  }
});

export class Layout extends React.Component {

  constructor() {
    super()
  }

  render() {
    const { classes } =  this.props
    return (
      <div className = {classes.root}>
        <div className = {classes.appFrame}>
          <NavBar>
          </NavBar>
          <div className = {classes.content}>
            <Switch>
              <Route exact path='/' component={Main} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object,
}
Layout.defaultProps = {
  classes: {}
}

export default withRouter(withStyles(styles)(Layout))
