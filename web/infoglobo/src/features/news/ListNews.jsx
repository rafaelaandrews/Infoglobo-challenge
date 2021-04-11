import { fetchNews, newsDeleted } from "../news/SliceNews";
import { useDispatch, useSelector } from "react-redux";

import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export function ListNews() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.news);
  const loading = useSelector((state) => state.loading);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Título', width: 130 },
    { field: 'content', headerName: 'Conteúdo', width: 130 },
    { field: 'date', headerName: 'Data de publicação', width: 200 },
    { field: 'action', headerName: 'Ação', width: 130 }
  ]

  const rows = entities;

  const handleDelete = (id) => {
    dispatch(newsDeleted({ id }));
  };

  return (
    <div className="container">
      <div className={classes.root}>
        <Typography variant="h3">Notícias</Typography>
      </div>
      <div className={classes.root}>
        <Button onClick={() => dispatch(fetchNews())} variant="contained" color="primary">
          Carregar Notícias
          </Button>
        <Button onClick={() => dispatch(fetchNews())} variant="contained" color="primary" href="/add-news">
          Adicionar Notícia
          </Button>
      </div>
      <br/>
      <div style={{ height: 400, width: '50%' }}>
        {loading ? (
          "Loading..."
        ) : (
          <DataGrid rows={rows} columns={columns} />
        )}
      </div>
    </div>
  );
}
