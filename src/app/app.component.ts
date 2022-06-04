import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-angular-app'
  todos: any = []
  addTodo(todo: string) {
    if (todo !== "") {
      this.todos.push(todo)
    } else {
      alert('Field is empty!')
    }
  }
  deleteTodo(todo: string) {
    for (let i = 0; i <= this.todos.length; i++) {
      if (todo == this.todos[i]) {
        this.todos.splice(i, 1)
      }
    }
  }
}
