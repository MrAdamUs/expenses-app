import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';

import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(<p>Loading</p>, document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('root'));
});
