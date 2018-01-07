import React from 'react';

import {Route, Switch} from 'react-router-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import customTheme from '../config/themeConfig.js'
import Main from './Main/Main'
import PaletteTest from './PaletteTest/PaletteTest'

const App = () => (
  <MuiThemeProvider theme={customTheme}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/home" component={Main}/>
        <Route path="/about" component={PaletteTest}/>
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>
);

export default App
