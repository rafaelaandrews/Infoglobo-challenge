import React, { useState, useEffect } from "react";
import NoticiaDataService from "../services/NoticiaService";
import { Link } from "react-router-dom";

const NoticiasList = () => {
  const [noticias, setNoticias] = useState([]);
  const [currentNoticia, setCurrentNoticia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveNoticias();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveNoticias = () => {
    NoticiaDataService.getAll()
      .then(response => {
        setNoticias(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveNoticia = (noticia, index) => {
    setCurrentNoticia(noticia);
    setCurrentIndex(index);
  };

  const findByTitle = () => {
    NoticiaDataService.findByTitle(searchTitle)
      .then(response => {
        setNoticias(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar um título"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Notícias</h4>

        <ul className="list-group">
          {noticias &&
            noticias.map((noticia, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveNoticia(noticia, index)}
                key={index}
              >
                {noticia.titulo}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentNoticia ? (
          <div>
            <h4>Noticia</h4>
            <div>
              <label>
                <strong>Título:</strong>
              </label>{" "}
              {currentNoticia.titulo}
            </div>
            <div>
              <label>
                <strong>Conteúdo:</strong>
              </label>{" "}
              {currentNoticia.conteudo}
            </div>
            <div>
              <label>
                <strong>Data de publicação:</strong>
              </label>{" "}
              {currentNoticia.dataPublicacao}
            </div>
            <Link
              to={"/noticia/" + currentNoticia._id}
              className="badge badge-warning"
            >
              Editar
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Cadastre uma Notícia</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticiasList;
