import React, { useState, useEffect } from "react";
import NoticiaDataService from "../services/NoticiaService";

const Noticia = props => {
  const initialNoticiaState = {
    id: null,
    titulo: "",
    conteudo: "",
    dataPublicacao: ""
  };
  const [currentNoticia, setCurrentNoticia] = useState(initialNoticiaState);
  const [message, setMessage] = useState("");

  const getNoticia = id => {
    NoticiaDataService.get(id)
      .then(response => {
        setCurrentNoticia(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getNoticia(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentNoticia({ ...currentNoticia, [name]: value });
  };

  const updateNoticia = () => {
    NoticiaDataService.update(currentNoticia._id, currentNoticia)
      .then(response => {
        setMessage("Notícia atualizada com sucesso!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteNoticia = () => {
    NoticiaDataService.remove(currentNoticia._id)
      .then(response => {
        props.history.push("/noticias");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentNoticia ? (
        <div className="edit-form">
          <h4>Noticia</h4>
          <form>
            <div className="form-group">
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                name="titulo"
                value={currentNoticia.titulo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="conteudo">Conteúdo</label>
              <input
                type="text"
                className="form-control"
                id="conteudo"
                name="conteudo"
                value={currentNoticia.conteudo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="conteudo">Data de publicação</label>
              <input
                type="text"
                className="form-control"
                id="dataPublicacao"
                name="dataPublicacao"
                value={currentNoticia.dataPublicacao}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteNoticia}>
            Deletar
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateNoticia}
          >
            Atualizar
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Clique em alguma Notícia para visualizar os detalhes</p>
        </div>
      )}
    </div>
  );
};

export default Noticia;
