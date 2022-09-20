// export interface TodoItem {
//     id: number,
//     message: string
// }

export class TodoItem {
    constructor(
        public id: number,
        public message: string
    ) { }
}


// const newTodoItem: TodoItem = {
//     id: 50,
//     message: 'nova mensagem'
// }

// const newTodoItem = new TodoItem(50, 'nova uma mensagem')