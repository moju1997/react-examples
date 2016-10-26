import { EventEmitter } from "events";

import * as c from '../constants/TodoConstants';
import todoDispatcher from '../dispatcher/TodoDispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 765789687,
        text: "Go Shopping"
      },
      {
        id: 654654765,
        text: "Pay Water Bill"
      }
    ];
  }

  getAll () {
    return this.todos;
  }

  createTodo (text) {
    const id = Date.now();
    this.todos.push({
      id,
      text
    });

    this.emit('change');
  }

  handleActions (action) {

    switch (action.type) {
      case c.TODO_CREATE: {
        this.createTodo(action.text);
        break;
      }

      default:

    }
  }

}

const todoStore = new TodoStore();
todoDispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
