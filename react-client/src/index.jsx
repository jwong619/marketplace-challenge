import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const middleware = applyMiddleware();

const store = createStore(allReducers, applyMiddleware(thunk, promise));

store.subscribe (() => {
  console.log('---store changed', store.getState());
});


ReactDOM.render(

  <Provider store = {store}>
    <App/>
  </Provider>, document.getElementById('app')
);


export default store;
