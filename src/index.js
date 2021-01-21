import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Layout } from './components/hoc/Layout';
import './css/colors/colors.css';
import './css/waves.css';
import history from './history';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <Router history={history} >
    <Layout
    />
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
