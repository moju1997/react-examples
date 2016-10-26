import React, { Component } from "react";
import { connect } from 'react-redux';

import { createTodo } from '../actions/TodoActions';

class TodoApp extends Component {
    constructor () {
      super();
      this.state = {
        newTodo: ''
      };
    }

    addTodo (){
      console.log('Check 1');
      this.props.dispatch(createTodo(this.state.newTodo));
      this.setState({newTodo: ''});
    }

    onInputChange (event) {
      const value = event.target.value;
      this.setState({newTodo: value});
    }

    render () {
      const { todos } = this.props.todo;

      const todoItems = todos.map( (todo) => {
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

let select = (store) => {
  return { todo: store.todo };
}

export default connect(select)(TodoApp);
