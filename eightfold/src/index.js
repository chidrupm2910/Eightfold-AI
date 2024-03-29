import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import movieReducer from './store/reducer/movieReducer';
import 'font-awesome/css/font-awesome.min.css';

const rootReducer = combineReducers({
    movies: movieReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
ReactDOM.render( <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
