import React, { Component } from "react";

import todoStore from '../store/TodoStore';
import { createTodo } from '../actions/TodoActions';

export default class TodoApp extends Component {
    constructor () {
      super();
      this.state = {
        todos: todoStore.getAll(),
        newTodo: ''
      };
    }

    componentWillMount () {
      todoStore.addListener('change', this.getTodos.bind(this));
    }

    componentWillUnmount(){
      todoStore.removeListener('change', this.getTodos.bind(this));
    }

    getTodos () {
      this.setState({
        todos: todoStore.getAll()
      });
    }

    addTodo (){
      createTodo(this.state.newTodo);
      this.setState({newTodo: ''});
    }

    onInputChange (event) {
      const value = event.target.value;
      this.setState({newTodo: value});
    }

    render () {
      const { todos } = this.state;

      const todoItems = todos.map( (todo, i) => {
        return (<li key={todo.id}> {todo.text} </li>);
      });

      return (
        <div>
          <h1>Todo Items</h1>

          <ul>
            {todoItems}
          </ul>
          <input type="text" value={this.state.newTodo} onChange={this.onInputChange.bind(this)}/>

          <button onClick={this.addTodo.bind(this)}> Add Todo </button>
        </div>
      );
    }
}
