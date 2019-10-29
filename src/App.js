import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch ,Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DefaultLayout = React.lazy(() => import('./layouts/Default'));
const Login = React.lazy(() => import('./views/Login'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/dashboard" render={props => <DefaultLayout {...props} />} />
              <Route exact path="/login" render={props => <Login {...props}/>} />
              <Redirect from="/" to="/dashboard/main" />
            </Switch>
          </React.Suspense>
      </HashRouter>
  );
}

export default App;
