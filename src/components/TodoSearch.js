import React, { Component } from 'react';
import "./TodoSearch.css"

class SearchTodo extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
        this.handleSearch=this.handleSearch.bind(this);
    };
    handleSearch(e){
        e.preventDefault();
        
        var searchText = this.searchText.value;
        console.log(searchText);
        this.props.onSearch(searchText);
    };
    render(){
        return(
            <div className="todo-search">
                <form onSubmit={this.handleSearch}>
                <input ref={(a) => this.searchText = a} placeholder="Search Todo">
              </input>
                    <button ref="onSearch" >Search</button>
                </form>
            </div>
        )
    }
}
export default SearchTodo;