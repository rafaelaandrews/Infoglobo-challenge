import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/noticia",
  headers: {
    accept: 'application/json, text/plain, */*',
  }
});
