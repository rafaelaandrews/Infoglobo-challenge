import { fetchNews, newsDeleted } from "./newsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function NewsList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.news);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(newsDeleted({ id }));
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Notícias</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <button
            onClick={() => dispatch(fetchNews())}
            className="button-primary"
          >
            Carregar Notícias
          </button>
        </div>
        <div className="three columns">
          <Link to="/add-news">
            <button className="button-primary">Adicionar Notícia</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Conteúdo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, title, content, date }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{content}</td>
                    <td>{date}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Deletar</button>
                      <Link to={`/edit-news/${id}`}>
                        <button>Editar</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
