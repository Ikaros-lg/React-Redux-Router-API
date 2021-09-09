import React from "react";
import "./index.css";
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import routes from "./routes/route";

class App extends React.Component {
  render() {
    return (
      <Router>
        
        <Nav/>
        
        <Switch>
          {this.displayRoute(routes)}
        </Switch>
      </Router>
    );
  }

  displayRoute = (routes) => {
    if(routes.length > 0){
      var displayRoute = routes.map((item, index) => {
        return <Route key={index} path={item.path} exact={item.exact}>{item.component}</Route>
      })
    }
    return displayRoute;
  }
}

export default App;
