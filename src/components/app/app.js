import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {
    const todoList = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Have a lunch', important: false, id: 2},
        {label: 'Go to the job', important: true, id: 3},
    ];

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>

        <TodoList todos={todoList}/>
      </div>
    );
};

export default App