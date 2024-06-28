import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class TodoController {
    constructor() {
        AppState.on('todoList', this.drawTodoList)
        AppState.on('account', this.drawTodoList)
        AppState.on('account', this.getTodo)

    }


    async getTodo() {
        try {
            await todoService.getTodos()
        } catch (error) {
            console.log('😛');
            Pop.error(error)
        }
    }

    async createTodo() {

        try {
            event.preventDefault()
            const form = event.target
            const todoData = getFormData(form)
            console.log('💾 📝', todoData);
            await todoService.createTodo(todoData)
        } catch (error) {
            Pop.error(error)
            console.log('❌ 📝 ❌');
        }
    }

    drawTodoList() {
        const todos = AppState.todoList
        let innerHTMLString = ''
        todos.forEach((todo) => innerHTMLString += todo.todoHTMLTemplate)
        setHTML('todo-List', innerHTMLString)
        console.log('📝 ✍️ ');
    }


    async destroyTodo(todoId) {
        try {
            const wantsToDelete = await Pop.confirm("Have you finished this Todo???")
            console.log('wants to delete', wantsToDelete);
            if (!wantsToDelete) return
            await todoService.destroyTodo(todoId)
        } catch (error) {
            console.log('❌ ⏰ ❌');
            Pop.error(error)
        }
    }
}
