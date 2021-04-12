import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddNoticia from "./components/AddNoticia";
import Noticia from "./components/Noticia";
import NoticiasList from "./components/NoticiasList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/noticias" className="navbar-brand">
          Infoglobo
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/noticias"} className="nav-link">
              Notícias
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adicionar
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/noticias"]} component={NoticiasList} />
          <Route exact path="/add" component={AddNoticia} />
          <Route path="/noticia/:id" component={Noticia} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
