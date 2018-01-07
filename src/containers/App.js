import React from 'react';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import customTheme from '../config/themeConfig.js'
import Layout from './Layout/Layout'
import PaletteTest from './PaletteTest/PaletteTest'

const App = () => (
  <MuiThemeProvider theme={customTheme}>
    <Router>
      <Switch>
        <Route path='/' component={Layout} />
      </Switch>
    </Router>
  </MuiThemeProvider>
);

export default App
