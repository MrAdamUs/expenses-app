import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExpenesDashboardPage from './pages/ExpenesDashboardPage';
import AddExpensePage from './pages/AddExpensePage';
import EditExpensePage from './pages/EditExpensePage';
import HelpPage from './pages/HelpPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/' component={ExpenesDashboardPage} exact />
          <Route path='/create' component={AddExpensePage} />
          <Route path='/edit' component={EditExpensePage} />
          <Route path='/help' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
