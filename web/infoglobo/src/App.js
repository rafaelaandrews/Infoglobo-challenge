import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddNews } from "./features/news/AddNews";
import { EditNews } from "./features/news/EditNews";
import { ListNews } from "./features/news/ListNews";

import React from "react";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/add-news">
            <AddNews />
          </Route>
          <Route path="/edit-news">
            <EditNews />
          </Route>
          <Route path="/">
            <ListNews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}