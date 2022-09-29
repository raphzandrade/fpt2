import { BehaviorSubject } from "rxjs";
import { TodoItem } from "src/app/interfaces";

export const defaultItems = [{
    id: 1,
    message: 'mockMessage'
},
{
    id: 3,
    message: 'mockMessage'
}]

export class TodoListPushServiceMock {

    public readonly items: BehaviorSubject<TodoItem[]>
        = new BehaviorSubject(defaultItems)

    constructor() { }

    getItems(): void { }

    deleteItem(item: TodoItem): void { }

    postItem(item: TodoItem, redirectAfterSuccess?: boolean): void { }
}
