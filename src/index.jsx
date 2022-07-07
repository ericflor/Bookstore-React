import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducers from '/Users/m_2171923/Desktop/UDEMY/REACT_BOOKSTORE/bookstoreclient/src/components/modules/index.js';
import axios from 'axios';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.interceptors.request.use(
  (config) => {

    const token = window.localStorage.getItem('bookstore-token')
    
    if (token != null) {
      config.headers.Authorization = token;
    }

    return config;
  }, 
  (error) => {
    return Promise.reject(error)
  }
)

root.render(
  <Provider store={
    createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
