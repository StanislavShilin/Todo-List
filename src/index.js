import React from "react";
import ReactDom from 'react-dom';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

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

ReactDom.render(<App />, document.getElementById('root'));
