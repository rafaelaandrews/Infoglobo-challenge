import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { newsAdded } from "../news/SliceNews";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function AddNews() {
  const classes = useStyles();

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
      <div className={classes.root}>
        <Typography variant="h3">Adicionar Notícia</Typography>
      </div>
      <br/>
      <div className="row">
          <label htmlFor="titleInput">Título</label>
          <TextField onChange={handleTitle} value={title} id="titleInput" variant="outlined" />
        </div>
        <br/>
        <div className="row">
          <label htmlFor="contentInput">Conteúdo</label>
          <TextField onChange={handleContent} value={content} id="contentInput" variant="outlined" />
        </div>
        <br/>
        <div className="row">
          <label htmlFor="publicationDateInput">Data de publicação</label>
          <TextField onChange={handleTitle} value={content} id="contentInput" variant="outlined" />
          <input
            className="u-full-width"
            type="date"
            id="publicationDateInput"
            onChange={handlePublicationDate}
            value={publicationDate}
          />
        </div>
        <br/>
        <div className="row">
          {error && error}
          <Button onClick={handleClick} variant="contained" color="primary">
            Salvar
          </Button>
        </div>
    </div>
  );
}
