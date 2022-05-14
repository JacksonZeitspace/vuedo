import { Commit, Dispatch } from 'vuex'
import { Todo, TodoState } from '@/types'
import { todosApi } from '@/apiCalls/todos'

export const TodoStore = {
  state: {
    todos: ['test'],
  },
  mutations: {
    setTodos(state: TodoState, val: Todo[]): void {
      state.todos = val
    }
  },
  actions: {
    async getTodos(
      { commit }: { commit: Commit; }
    ): Promise<void | Error> {
      try {
        const todos = await todosApi.getTodos()
        commit('setTodos', todos)
      } catch (e) {
        return e as Error
      }
    },
    async createTodo(
      { dispatch }: { dispatch: Dispatch },
      todo: Todo
    ): Promise<void | Error> {
      try {
        await todosApi.createTodo(todo)
        await dispatch('getTodos')
      } catch (e) {
        return e as Error
      }
    },
    async deleteTodo(
      { dispatch }: { dispatch: Dispatch },
      _id: string
    ): Promise<void | Error> {
      try {
        await todosApi.deleteTodo(_id)
        await dispatch('getTodos')
      } catch (e) {
        return e as Error
      }
    },
    async updateTodo(
      { dispatch }: { dispatch: Dispatch },
      { _id, title, description }: {
        _id: string,
        title: string,
        description: string
      }
    ): Promise<void | Error> {
      try {
        await todosApi.updateTodo({ _id, title, description })
        await dispatch('getTodos')
      } catch (e) {
        return e as Error
      }
    },
    async toggleDone(
      { dispatch }: { dispatch: Dispatch },
      { _id, done }: {
        _id: string,
        done: boolean,
      }
    ): Promise<void | Error> {
      try {
        await todosApi.toggleDone(_id, done)
        await dispatch('getTodos')
      } catch (e) {
        return e as Error
      }
    }
  },
  getters: {},
  namespaced: true
}