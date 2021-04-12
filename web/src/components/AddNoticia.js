import React, { useState } from "react";
import NoticiaDataService from "../services/NoticiaService";

const AddNoticia = () => {
  const initialNoticiaState = {
    id: null,
    titulo: "",
    conteudo: "",
    dataPublicacao: ""
  };
  const [noticia, setNoticia] = useState(initialNoticiaState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNoticia({ ...noticia, [name]: value });
  };

  const saveNoticia = () => {
    var data = {
      titulo: noticia.titulo,
      conteudo: noticia.conteudo,
      dataPublicacao: noticia.dataPublicacao
    };

    NoticiaDataService.create(data)
      .then(response => {
        setNoticia({
          id: response.data.id,
          titulo: response.data.titulo,
          conteudo: response.data.conteudo,
          dataPublicacao: response.data.dataPublicacao
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newNoticia = () => {
    setNoticia(initialNoticiaState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Notícia cadastrada com sucesso.</h4>
          <button className="btn btn-success" onClick={newNoticia}>
            Adicionar outra Notícia
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              required
              value={noticia.titulo}
              onChange={handleInputChange}
              name="titulo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="conteudo">Conteúdo</label>
            <input
              type="text"
              className="form-control"
              id="conteudo"
              required
              value={noticia.conteudo}
              onChange={handleInputChange}
              name="conteudo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dataPublicacao">Data de publicação</label>
            <input
              type="date"
              className="form-control"
              id="dataPublicacao"
              required
              value={noticia.dataPublicacao}
              onChange={handleInputChange}
              name="dataPublicacao"
            />
          </div>

          <button onClick={saveNoticia} className="btn btn-success">
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default AddNoticia;
