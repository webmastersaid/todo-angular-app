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

    deleteTodo(i: number) {
        this.todos.splice(i, 1)
    }

    getTodos() {
        return this.todos
    }

    getDate() {
        const newDate: Date = new Date()

    }
    
}