import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard/Dashboard";



function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
