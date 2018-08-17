import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/build/main.css'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './containers/App';

const store = createStore(reducers, {});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
