import { Component } from '@angular/core'
import { TransportationService } from './transportation.service'
import { Todos } from './todos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  todos: Todos[]

  constructor(private transportationService: TransportationService) {
    this.todos = this.transportationService.getTodos()
  }

  addTodo(name: string, text: string) {
    const newDate: Date = new Date()
    const dateTime: string = newDate.getDate() + '.' + (newDate.getMonth() + 1) + '.' + newDate.getFullYear() + ' ' + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds()
    const newTodo: Todos = { name: name, text: text, date: dateTime }
    this.transportationService.addTodo(newTodo)
  }

  deleteTodo(i: number) {
    this.transportationService.deleteTodo(i)
  }

}
