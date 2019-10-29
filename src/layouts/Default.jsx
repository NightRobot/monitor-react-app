
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import routes from "../routes.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <div className="wrapper">

        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Header />
            <Switch>{this.getRoutes(routes)}</Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
