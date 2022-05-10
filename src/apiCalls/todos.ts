import { Todo } from '@/types'
import api from './api'

export const todosApi = {
  getTodo: async (title: string): Promise<Todo> => {
    const res = await api.get(`/todos/${title}`)
    return res.data
  },
  getTodos: async (): Promise<Todo[]> => {
    const res = await api.get(`/todos`)
    return res.data
  },
  deleteTodo: async (_id: string): Promise<void> => {
    await api.delete(`/todos/${_id}`)
    return
  },
  createTodo: async (payload: Todo): Promise<Todo> => {
    const res = await api.post(`/todos`, payload)
    return res.data
  },
  updateTodo: async (payload: Todo): Promise<Todo> => {
    const res = await api.put(`/todos/${payload._id}`, payload)
    return res.data
  }
}
