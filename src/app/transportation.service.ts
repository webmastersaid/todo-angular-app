import { Injectable } from "@angular/core";
import { Todos } from "./todos";

@Injectable({
    providedIn: 'root'
})
export class TransportationService {

    todos: Todos[] = []

    constructor() { }

    addTodo(todo: Todos) {
        if (todo.name && todo.text !== "") {
            this.todos.push(todo)
        } else if (todo.name == "") {
            alert('Field title is empty!')
        } else if (todo.text == "") {
            alert('Field description is empty!')
        } else {
            alert('Fields is empty!')
        }
    }

    deleteTodo(id: number) {
        for (let i = 0; i <= this.todos.length; i++) {
            if (id == this.todos[i].id) {
                this.todos.splice(i, 1)
            }
        }
    }

    getTodos() {
        return this.todos
    }

    getId() {
        const array = new Uint32Array(1);
        self.crypto.getRandomValues(array);
        return array[0];
    }

    getDate() {
        const newDate: Date = new Date()

    }
    
}