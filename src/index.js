import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Layout } from './components/hoc/Layout';
import './css/bootstrap.min.css';
import './css/colors/black.css';
import './css/magnific-popup.css';
import './css/materialdesignicons.min.css';
import './css/pe-icon-7-stroke.css';
import './css/style.css';
import './css/waves.css';
import history from './history';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
    <Layout
    />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
