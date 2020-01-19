import React, {useState} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import Context from "../../context";

function App() {
        const [todoList, setTodos] = useState([
                {label: 'Drink coffee', id: 1},
                {label: 'Have a lunch', id: 2},
                {label: 'Go to the job', id: 3},
        ]);

    function onDelete(id){
        setTodos((todoList) => todoList.filter(todo => todo.id !== id));
    }

    return(
        <Context.Provider value={{onDelete}}>
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>

                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={todoList}
                />
            </div>
        </Context.Provider>
    )
}

export default App