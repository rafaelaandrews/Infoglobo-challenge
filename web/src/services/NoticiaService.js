import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const get = id => {
  return http.get(`/${id}`);
};

const create = data => {
  return http.post("/create", data);
};

const update = (id, data) => {
  return http.put(`/update/${id}`, data);
};

const remove = id => {
  return http.delete(`/delete/${id}`);
};

const findByTitle = title => {
  return http.get(`/titulo/${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle
};
