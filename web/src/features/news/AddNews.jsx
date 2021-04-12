import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { newsAdded } from "./newsSlice";

export function AddNews() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleContent = (e) => setContent(e.target.value);
  const handleDate = (e) => setDate(e.target.value);

  const newsAmount = useSelector((state) => state.news.entities.length);

  const handleClick = () => {
    if (title && content && date) {
      dispatch(
        newsAdded({
          id: newsAmount + 1,
          title,
          content,
          date
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setTitle("");
    setContent("");
    setDate("");
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
          <label htmlFor="dateInput">Data de Publicação</label>
          <input
            className="u-full-width"
            type="date"
            id="dateInput"
            onChange={handleDate}
            value={date}
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
