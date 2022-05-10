export interface Todo {
  _id?: string,
  title: string,
  description: string
  done?: boolean,
  __v?: number
}

export interface TodoState {
  todos: Todo[]
}

export interface AppState {
  todo: TodoState
}