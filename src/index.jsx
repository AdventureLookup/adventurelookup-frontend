import 'core-js/fn/object/assign';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import AppRoutes from './AppRoutes';
import { createHashHistory } from 'history';

const mountNode = document.getElementById('app');

// Needed for onTouchTap
// this dependency should no longer be needed as ofReact 1.0
// Check this repo for details:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render((
  <Router
    history={useRouterHistory(createHashHistory)({ queryKey: false })}
    onUpdate={() => window.scrollTo(0, 0)}
  >
    {AppRoutes}
  </Router>
  ), mountNode);
