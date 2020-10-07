import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import LandingPage from "./pages/landingpage.js";
import DashBoard from "./pages/dashBoard.js";
import FullTable from "./pages/fullTable.js";
import LocationID from "./pages/locationID.js";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/pages/user/:id" component={DashBoard} />
        <Route path="/pages/fullTable" component={FullTable} />
        <Route path="/pages/location/:id" component={LocationID} />
      </Switch>
    </Router>
  );
}
export default App;
