import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import TodoList from './TodoList.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = 
       [
        {
          id: 1,
          text: 'Walk the dog'
         }, {
          id: 2,
           text: 'Clean the yard'
          }
      ]      
      
  }

  render() {
     var todos = this.state.a.values;
    return (
      <div className="App">
        <TodoList todos = {todos}/>
      </div>
    );
  }
}

export default App;
