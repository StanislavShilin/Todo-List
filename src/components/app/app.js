import React, {useState} from "react";

import AppHeader from "../app-header";
import AddTodo from "../addTodo";
import TodoList from "../todo-list";

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

    function addTodo(title) {
        setTodos((todoList) => todoList.concat({
            label: title,
            id: Date.now(),
        }))
    }

    return(
        <Context.Provider value={{onDelete}}>
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>

                <div className="top-panel d-flex">
                    <AddTodo onCreate={addTodo}/>
                </div>

                <TodoList
                    todos={todoList}
                />
            </div>
        </Context.Provider>
    )
}

export default App