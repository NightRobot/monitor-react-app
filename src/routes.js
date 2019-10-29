import React from 'react';

// import Dashboard from "./views/Dashboard";
// import Login from "./views/Login";

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Login = React.lazy(() => import('./views/Login'));

const Routes = [
  {
    path: "/main",
    name: "main",
    component: Dashboard,
    layout: "/dashboard"
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
];

export default Routes;
