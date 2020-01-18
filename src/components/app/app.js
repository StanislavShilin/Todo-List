import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component{
    state = {
        todoList: [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Have a lunch', important: false, id: 2},
        {label: 'Go to the job', important: true, id: 3},
        ]
    };

    onDelete = (id) => {
      this.setState(({todoList}) => {
         const idx = todoList.findIndex(item => item.id === id);
         return {
             todoList: [...todoList.slice(0, idx), ...todoList.slice(idx + 1)]
         };
      });
    };

    render() {
        let {todoList} = this.state;
        return(
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={todoList}
                    onDelete={this.onDelete}
                />
            </div>
        )
    };
};