export class Todo {
    constructor(data) {
        this.description = data.description
        this.completed = data.completed || false
        this.creatorId = data.creatorId
        this.id = data.id
    }


    get todoHTMLTemplate() {
        return `
<div>
    <label for="description">${this.description}</label>
    <input class="form-check-input" type="checkbox" id="flexCheckDefault" />
    <button onclick="app.TodoController.destroyTodo('${this.id}')" type="button" class="btn btn-outline-danger mdi mdi-trash-can-outline"></button>
</div>
`
    }
}

// "completed": {
//     "type": "Boolean",
//         "required": true,
//             "default": false
// },
// "description": {
//     "type": "String",
//         "required": true,
//             "maxLength": 500
// },
// "creatorId": {
//     "type": "SchemaObjectId",
//         "required": true,
//             "ref": "Account"