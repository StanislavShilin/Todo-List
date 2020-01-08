import React from "react";
import ReactDom from 'react-dom';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    const todoList = [
        {label: 'Drink coffee', important: false, id: 1},
        {label: 'Make eat', important: false, id: 2},
        {label: 'Go to the job', important: true, id: 3},
    ];

    return (
      <div>
        <AppHeader />
        <SearchPanel />
        <TodoList todos={todoList}/>
      </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
