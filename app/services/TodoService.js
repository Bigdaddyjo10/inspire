import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";

class TodoService {
    async toggleCompletedTodos(todoId) {
        const todoIndex = AppState.todoList.findIndex((todo) => todo.id == todoId)
        if (todoIndex == -1) throw new Error("You messed up on findIndex")
        const foundTodo = AppState.todoList[todoIndex]
        const todoData = { completed: !foundTodo.completed }
        const response = await api.put(`api/todos/${todoId}`, todoData)
        const updatedTodo = new Todo(response.data)
        AppState.todoList.splice(todoIndex, 1, updatedTodo)
    }

    async createTodo(todoData) {
        const response = await api.post('api/todos', todoData)
        const newTodo = new Todo(response.data)
        AppState.todoList.push(newTodo)
    }

    async getTodos() {
        const response = await api.get('api/todos')
        const newTodo = response.data.map((todoPOJO) => new Todo(todoPOJO))
        AppState.todoList = newTodo
    }

    async destroyTodo(todoId) {
        const response = await api.delete(`api/todos/${todoId}`)
        const todoIndex = AppState.todoList.findIndex((todo) => todo.id == todoId)
        if (todoIndex == -1) throw new Error("Find index is messed up")
        AppState.todoList.splice(todoIndex, 1)
    }
}

export const todoService = new TodoService();