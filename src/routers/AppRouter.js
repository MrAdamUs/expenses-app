import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExpenesDashboardPage from '../pages/ExpenesDashboardPage';
import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import HelpPage from '../pages/HelpPage';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' component={ExpenesDashboardPage} exact />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
