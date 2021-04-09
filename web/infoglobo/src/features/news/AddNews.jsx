import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { newsAdded } from "../news/SliceNews";

export function AddNews() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [error, setError] = useState(null);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handlePublicationDate = (e) => setPublicationDate(e.target.value);

  const newsAmount = useSelector((state) => state.news.entities.length);

  const handleClick = () => {
    if (title && content && publicationDate) {
      dispatch(
        newsAdded({
          id: newsAmount + 1,
          title,
          content,
          publicationDate
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setTitle("");
    setContent("");
    setPublicationDate("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Adicionar Notícia</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="titleInput">Título</label>
          <input
            className="u-full-width"
            type="text"
            id="titleInput"
            onChange={handleTitle}
            value={title}
          />
          <label htmlFor="contentInput">Conteúdo</label>
          <input
            className="u-full-width"
            type="text"
            id="contentInput"
            onChange={handleContent}
            value={content}
          />
          <label htmlFor="publicationDateInput">Data de publicação</label>
          <input
            className="u-full-width"
            type="date"
            id="publicationDateInput"
            onChange={handlePublicationDate}
            value={publicationDate}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
