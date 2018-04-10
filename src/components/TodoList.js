import React, { Component } from 'react';
import TodoItems from './TodoItems';
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var input = this._inputElement.value;
    this.props.addItem(input);
    this._inputElement.value="";
    // if (this._inputElement.value !== "") {
    //   var newItem = {
    //     text: this._inputElement.value,
    //     key: Date.now()
    //   };
    //   this.setState((prevState) => {
    //     return {
    //       items: prevState.items.concat(newItem)
    //     };
    //   });
    //   this._inputElement.value="";
    // }
    // console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    return this.props.deleteItem(key);
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    });
  }

  render() {
    var items = this.props.items;
    return (
        <div className="todoListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a} placeholder="enter task">
              </input>
              <button type="submit">Add Todo</button>
            </form>
          </div>
          <TodoItems entries={items} delete={this.deleteItem}/>
        </div>
    );
  }
}

export default TodoList;
