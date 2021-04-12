import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddNews } from "./features/news/AddNews";
import { EditNews } from "./features/news/EditNews";
import React from "react";
import { NewsList } from "./features/news/NewsList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-news">
            <AddNews />
          </Route>
          <Route path="/edit-news">
            <EditNews />
          </Route>
          <Route path="/">
            <NewsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
