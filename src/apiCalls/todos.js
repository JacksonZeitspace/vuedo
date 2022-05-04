import api from "./api";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.log(error);
    });

export const todosApi = {
  getTodo: handleError(async (title) => {
    const res = await api.get(`/todos/${title}`);
    return res.data;
  }),
  getTodos: handleError(async () => {
    const res = await api.get(`/todos`);
    return res.data;
  }),
  deleteTodo: handleError(async (title) => {
    const res = await api.delete(`/todos/${title}`);
    return res.data;
  }),
  createTodo: handleError(async (payload) => {
    const res = await api.post(`/todos`, payload);
    return res.data;
  }),
  updateTodo: handleError(async (payload) => {
    const res = await api.put(`/todos/${payload._id}`, payload);
    return res.data;
  }),
};
