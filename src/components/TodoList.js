import React, { Component } from 'react';
import Todo from './Todo.js';

class TodoList extends Component {

  render() {
    var todos = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id}/>
        )
      });
    };
    return (
      <div >
          {renderTodos()}
      </div>
    );
  }
}

export default TodoList;
