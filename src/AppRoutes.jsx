import React from 'react';
import Route from 'react-router/lib/Route';
// import Redirect from 'react-router/lib/';
import IndexRoute from 'react-router/lib/IndexRoute';

import Master from './components/Master';
import HomePage from './components/pages/home/HomePage';
import SearchPage from './components/pages/search/SearchPage';
import ResultsPage from './components/pages/results/ResultsPage';
import AboutPage from './components/pages/about/AboutPage';
import BrowsePage from './components/pages/browse/BrowsePage';
import AddPage from './components/pages/add/AddPage';
import AccountPage from './components/pages/account/AccountPage';

const AppRoutes = (
  <Route path="/" component={Master}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="search" component={SearchPage} />
    <Route path="results" component={ResultsPage} />
    <Route path="about" component={AboutPage} />
    <Route path="browse" component={BrowsePage} />
    <Route path="add" component={AddPage} />
    <Route path="account" component={AccountPage} />
  </Route>
);

export default AppRoutes;
