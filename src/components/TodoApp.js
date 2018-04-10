import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import SearchTodo from './TodoSearch';

import "./TodoApp.css";
class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                key: 1,
                text: "todo 1"
            }, {
                key: 2,
                text: "todo 2"
            }, {
                key: 3,
                text: "Nop bai"
            }],
            searchText: ''
        }
        this.onSearch = this.onSearch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };
    onSearch(searchText) {
        this.setState({
            searchText: searchText
        })
        // this.handleSearch();
    };
    addItem(input) {
        if (input !== "") {
            var newItem = {
                text: input,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        //   console.log(this.state.items);
    };
    handleSearch() {
        var { searchText } = this.state;
        var newItems = this.state.items.filter((item) => {
            if (item.text.includes(searchText)) {
                return true;
            }
            return false;
        });
        return newItems;
    };
    deleteItem(key){
        var newItems = this.state.items.filter(todo=>{
            if(todo.key === key){
                return false;
            } return true;
        })
        this.setState({
            items: newItems
        })
    }
    render() {
        var { searchText } = this.state;
        var items = this.handleSearch();
        return (
            <div>
                <h1>Todo App</h1>
                <div className="todo-app">
                    <SearchTodo onSearch={this.onSearch} />
                    <TodoList items={items} addItem={this.addItem} deleteItem={this.deleteItem} />
                </div>
            </div>
        )
    }
};
export default TodoApp;