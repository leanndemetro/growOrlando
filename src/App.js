import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Nav/Nav"
import Contact from "./pages/Contact/Contact"




function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/">
            <Dashboard />
          </Route>
        <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
