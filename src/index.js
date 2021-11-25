import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollTop from "./components/home/ScrollTop";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route, Switch } from "react-router-dom";

import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard/dashboard';

import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './components/forgotpassword/forgotpassword';

import { Provider } from "react-redux";
import  store from "./Redux/Store";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </ScrollTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();